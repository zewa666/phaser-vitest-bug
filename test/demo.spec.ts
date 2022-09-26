import { describe, expect, it } from "vitest";
import { game } from "../src/index";

describe("a new game", () => {
    it("should start", () => {
        expect(game.isRunning).toBe(true);
    })
})