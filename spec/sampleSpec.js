describe("A suite", function() {
    var a;
    it("spec a", function() {
      a = true;
      expect(a).toBe(true);
    });
    it("spec b", function() {
        a = false;
        expect(a).toBe(false);
    });
  });  