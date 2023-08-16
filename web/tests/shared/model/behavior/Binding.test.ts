import { Binding } from "../../../../src/shared/model/behavior/Binding";
import { describe, test, expect } from "vitest";

describe("Binding", () => {
  describe("export", () => {
    test("KeyPress", () => {
      const binding = Binding.KeyPress("A");
      expect(binding.export()).toEqual("&kp A");
    });
    test("KeyToggle", () => {
      const binding = Binding.KeyToggle("A");
      expect(binding.export()).toEqual("&kt A");
    });
    test("StickyKey", () => {
      const binding = Binding.StickyKey("A");
      expect(binding.export()).toEqual("&sk A");
    });
    test("ModTap", () => {
      const binding = Binding.ModTap("LSHIFT", "A");
      expect(binding.export()).toEqual("&mt LSHIFT A");
    });
  });
});
