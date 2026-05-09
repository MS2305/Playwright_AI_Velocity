# Velocity Login and Navigation Plan

## Application Overview

Test the EY Velocity login flow and navigation through focus and driver submenu, followed by Skip and Step links navigation.

## Test Scenarios

### 1. Velocity Login & Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login and Navigate Through Focus and Steps

**File:** `tests/login/velocity-navigation.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads with username input and login control
  2. Enter username 'meenakshi.sundaram.s@ey.com' and submit login
    - expect: User is authenticated successfully
    - expect: Dashboard or home page loads
  3. Click the 'Focus' menu
    - expect: Focus menu expands or opens
  4. Click the 'About 7 drivers' submenu under Focus
    - expect: The About 7 drivers submenu loads or displays its page/content
  5. Click the 'Skip' button
    - expect: Skip action completes and the next expected navigation state appears
  6. Click the 'Step 2' link
    - expect: Step 2 page or section loads successfully
  7. Click the 'Step 3' link
    - expect: Step 3 page or section loads successfully
  8. Click the 'Step 4' link
    - expect: Step 4 page or section loads successfully
