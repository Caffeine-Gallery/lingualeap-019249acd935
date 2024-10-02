export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getApiKey' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
