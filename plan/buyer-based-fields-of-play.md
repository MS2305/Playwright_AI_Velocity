# Buyer-based Fields of Play Navigation Plan

## Application Overview

Verify the EY Velocity Focus menu navigation to Buyer-based Fields of Play and confirm the user lands on the correct page.

## Test Scenarios

### 1. Navigation Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Focus menu to Buyer-based Fields of Play

**File:** `tests/navigation/buyer-based-fields-of-play.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads with the email input and Login button visible
  2. Enter 'meenakshi.sundaram.s@ey.com' and submit the login form
    - expect: User is authenticated and the dashboard page loads
  3. Click the 'Focus' menu in the top navigation
    - expect: Focus menu is opened or activated
  4. Select 'Buyer-based Fields of Play' from the Focus menu
    - expect: Buyer-based Fields of Play page loads or becomes active
  5. Verify the Buyer-based Fields of Play landing page
    - expect: The page URL or page content confirms the Buyer-based Fields of Play page is displayed
