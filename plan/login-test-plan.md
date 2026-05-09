# Login Test Plan

## Application Overview

The EY Velocity application provides a dashboard for managing projects and assessments. The login functionality authenticates users via their EY email address, redirecting valid users to the dashboard upon successful login.

## Test Scenarios

### 1. Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Email

**File:** `tests/login/successful-login.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads with email input field and 'Login' button
  2. Enter 'meenakshi.sundaram.s@ey.com' in the email field
    - expect: Email 'meenakshi.sundaram.s@ey.com' is entered into the field
  3. Click the 'Login' button
    - expect: User is redirected to the dashboard page
    - expect: Dashboard displays welcome message for the user
  4. Click the profile icon to display the logout option
    - expect: Logout option becomes visible
  5. Click the Logout option
    - expect: User is returned to the login page

#### 1.2. Login with Empty Email Field

**File:** `tests/login/empty-email.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads
  2. Leave the email field blank
    - expect: Email field remains empty
  3. Click the 'Login' button
    - expect: An error message indicating that email is required is displayed
  
#### 1.3. Login with Invalid Email Format

**File:** `tests/login/invalid-email-format.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads
  2. Enter 'invalidemail' in the email field
    - expect: Invalid email 'invalidemail' is entered
  3. Click the 'Login' button
    - expect: An error message indicating invalid email format is displayed
  
#### 1.4. Login with Non-EY Email

**File:** `tests/login/non-ey-email.spec.ts`

**Steps:**
  1. Navigate to https://velocity.vel-qa1.ey.com/login
    - expect: Login page loads
  2. Enter 'test@gmail.com' in the email field
    - expect: Non-EY email 'test@gmail.com' is entered
  3. Click the 'Login' button
    - expect: An error message indicating access is restricted to EY emails is displayed

