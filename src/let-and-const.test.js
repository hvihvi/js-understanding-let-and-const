describe("let: ", () => {
  test("reassigning the variable and nested properties are possible", () => {
    let a = {
      a1: { a2: 0 }
    };
    a.a1.a2 = 1; // possible
    expect(a.a1.a2).toBe(1);
    a = 1; // possible
    expect(a).toBe(1);
  });

  test("which value has b ?", () => {
    let a = 0;
    let b = a;
    a = 1;
    expect(a).toBe(1);
    //expect(b).toBe();
  });

  test("which value has b.b1 ?", () => {
    let a = {
      a1: 0
    };
    let b = {
      b1: a.a1
    };

    a.a1 = 1;
    expect(a.a1).toBe(1);
    //expect(b.b1).toBe();
  });

  test("which value has b.b1.b2 ?", () => {
    let a = {
      a1: { a2: 0 }
    };
    let b = {
      b1: a.a1
    };

    a.a1.a2 = 1;
    expect(a.a1.a2).toBe(1);
    //expect(b.b1.a2).toBe();
  });
});

describe("const: ", () => {
  test("reassigning the variable is not possible but reassigning nested properties is possible", () => {
    const a = {
      a1: { a2: 0 }
    };
    // a = 1; // cannot reassign `a`
    a.a1.a2 = 1; // possible
    expect(a.a1.a2).toBe(1);
  });

  test("which value has b.b1 ?", () => {
    const a = {
      a1: 0
    };
    const b = {
      b1: a.a1
    };

    a.a1 = 1;
    expect(a.a1).toBe(1);
    //expect(b.b1).toBe();
  });

  test("which value has b.b1.b2 ?", () => {
    const a = {
      a1: { a2: 0 }
    };
    const b = {
      b1: a.a1
    };

    a.a1.a2 = 1;
    expect(a.a1.a2).toBe(1);
    //expect(b.b1.a2).toBe();
  });

  test("spread: which value has b.b1.b2 ?", () => {
    const a = {
      a1: { a2: 0 }
    };
    const b = {
      b1: { ...a.a1 }
    };

    a.a1.a2 = 1;
    expect(a.a1.a2).toBe(1);
    //expect(b.b1.a2).toBe();
  });

  test("spread: which value has b.a1.a2 ?", () => {
    const a = {
      a1: { a2: 0 }
    };
    const b = { ...a };

    a.a1.a2 = 1;
    expect(a.a1.a2).toBe(1);
    //expect(b.a1.a2).toBe();
  });
});
