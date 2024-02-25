const baseUrlApi = `${'https://myapi.com/'}api/`;

let ApiConfig = {
  baseUrlApi,
  token: null as string | null,
  user: `${baseUrlApi}users`,
};

export { ApiConfig };
