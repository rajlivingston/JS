const data = {
    info: { name: 'Alice', age: 25 },
    address: { city: 'Wonderland', zip: '12345' }
  };
  const key = 'address';
  const updated = {
    ...data,
    [key]: { ...data[key], country: 'Fictionland' }
  };
  console.log(updated);
  