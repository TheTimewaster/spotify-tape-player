export default defineEventHandler(async (event) => {
  const { code } = useQuery(event);
  const config = useRuntimeConfig();

  const host = `http://${event.req.headers.host}`;
  const postParams = new URLSearchParams({
    code: code as string,
    grant_type: 'authorization_code',
    redirect_uri: `${host}/api/callback`,
  });

  try {
    const response = await $fetch<{refresh_token: string, access_token: string}>(
      'https://accounts.spotify.com/api/token',
      {
        body: postParams,
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(
            `${config.public['spotify-client-id']}:${config.public['spotify-client-secret']}`
          )}`,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );

    setCookie(event, 'spotify-access-token', response.access_token, { path: '/' });

    return sendRedirect(event, '/');
  } catch (error) {
    return sendRedirect(event, '/login');
  }
})