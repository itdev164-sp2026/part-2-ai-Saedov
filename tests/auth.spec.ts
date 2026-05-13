import { test, expect } from "@playwright/test";

const TEST_EMAIL = process.env.TEST_USER_EMAIL;
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD;

test.describe("Login page visibility", () => {
  test("shows email input, password input, and sign-in button on /login", async ({
    page,
  }) => {
    await page.goto("/login");

    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Sign in" })
    ).toBeVisible();
  });
});

test.describe("Authenticated flows", () => {
  test.beforeEach(() => {
    if (!TEST_EMAIL || !TEST_PASSWORD) {
      test.skip(
        true,
        "TEST_USER_EMAIL and TEST_USER_PASSWORD must be set to run credentialed tests"
      );
    }
  });

  test("redirects to the dashboard after a successful login", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.getByLabel("Email").fill(TEST_EMAIL!);
    await page.getByLabel("Password").fill(TEST_PASSWORD!);
    await page.getByRole("button", { name: "Sign in" }).click();

    // Wait for navigation away from /login — the app redirects to "/" on success
    await page.waitForURL((url) => !url.pathname.startsWith("/login"), {
      timeout: 10_000,
    });

    expect(page.url()).not.toContain("/login");
  });

  test("shows Overview, Projects, and Settings sidebar links after login", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.getByLabel("Email").fill(TEST_EMAIL!);
    await page.getByLabel("Password").fill(TEST_PASSWORD!);
    await page.getByRole("button", { name: "Sign in" }).click();

    await page.waitForURL((url) => !url.pathname.startsWith("/login"), {
      timeout: 10_000,
    });

    // Shadcn's <Sidebar> renders entirely as <div> elements — no <aside> or
    // <nav> — so there is no ARIA landmark role to scope against. The inner
    // sidebar div always carries data-sidebar="sidebar", which is the
    // component library's own stable contract for targeting sidebar content.
    const sidebar = page.locator('[data-sidebar="sidebar"]');
    await expect(sidebar.getByRole("link", { name: "Overview" })).toBeVisible();
    await expect(sidebar.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(sidebar.getByRole("link", { name: "Settings" })).toBeVisible();
  });
});
