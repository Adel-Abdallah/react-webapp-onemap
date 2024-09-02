const countECharacters = (jsonObj: any): number => {
    let count = 0;
  
    const traverse = (obj: any) => {
      if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          count += (key.match(/[eE]/g) || []).length;
          traverse(obj[key]);
        }
      }
    };
  
    traverse(jsonObj);
    return count;
  };
  
  export default countECharacters;
  