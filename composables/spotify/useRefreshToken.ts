import axios from "axios";

export const useFetchRefreshToken = () => {
  const config = useRuntimeConfig();
  const refreshToken = useCookie('spotify-refresh-token');
  const accessToken = useCookie('spotify-acess-token');

  const fetch = async () => {
    if (refreshToken.value == null || refreshToken.value === '') {
      throw new Error('No refresh token found');
    }

    const postParams = new URLSearchParams({
      refresh_token: refreshToken.value,
      grant_type: 'refresh_token',
    });

    const response = await axios(
      'https://accounts.spotify.com/api/token',
      {
        data: postParams,
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(
            `${config.public['spotify-client-id']}:${config.public['spotify-client-secret']}`
          )}`,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );

    accessToken.value = response.data.access_token;
  }

  return {
    fetch
  }

}