const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  
  test('Testando função uppercase', (done) => {
    uppercase('VentuRin', (str) => {
      try {
        expect(str).toBe('VENTURIN');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  

