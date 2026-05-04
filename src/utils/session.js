const session = {
    get: key => {
      if (window && window.localStorage.getItem(key))
        return JSON.parse(window.localStorage.getItem(key));
  
      return null;
    },
  
    set: (key, data) => {
      window.localStorage.setItem(key, JSON.stringify(data));
      return true;
    },
  
    remove: key => {
      if (window && window.localStorage.getItem(key)) {
        window.localStorage.removeItem(key);
        return true;
      }
  
      return undefined;
    },
  };
  
  export default session;