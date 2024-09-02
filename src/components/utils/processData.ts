const sortString = (str: string): string => {
    return str
      .split('')
      .sort((a, b) => {
        const order = 'bBaA';
        return order.indexOf(a) - order.indexOf(b);
      })
      .join('');
  };
  
  const processData = (jsonObj: any): any => {
    const traverse = (obj: any) => {
      if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          if (typeof obj[key] === 'string') {
            obj[key] = sortString(obj[key]);
          } else if (typeof obj[key] === 'object') {
            traverse(obj[key]);
          }
        }
      }
    };
  
    const clonedObj = JSON.parse(JSON.stringify(jsonObj)); // Deep copy to avoid mutating original data
    traverse(clonedObj);
    return clonedObj;
  };
  
  export default processData;
  