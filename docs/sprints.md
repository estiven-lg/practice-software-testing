# Sprints

Documentación consolidada de todas las versiones y variantes de sprint.

## Sprint 1 - Product Catalog

The foundation sprint. A basic e-commerce catalog with products, categories, and brands.

### Features

- Product listing with detail pages
- Category tree structure and filtering
- Brand management
- Product images
- Contact form

### API Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/brands`                 | List all brands          |
| GET    | `/brands/{id}`            | Get brand by ID          |
| POST   | `/brands`                 | Create brand             |
| PUT    | `/brands/{id}`            | Update brand             |
| DELETE | `/brands/{id}`            | Delete brand             |
| GET    | `/categories`             | List all categories      |
| GET    | `/categories/tree`        | Get category tree        |
| GET    | `/categories/tree/{id}`   | Get subtree by ID        |
| POST   | `/categories`             | Create category          |
| PUT    | `/categories/{id}`        | Update category          |
| DELETE | `/categories/{id}`        | Delete category          |
| GET    | `/products`               | List all products        |
| GET    | `/products/{id}`          | Get product by ID        |
| GET    | `/products/{id}/related`  | Get related products     |
| POST   | `/products`               | Create product           |
| PUT    | `/products/{id}`          | Update product           |
| DELETE | `/products/{id}`          | Delete product           |
| GET    | `/images`                 | List product images      |

### UI Routes

| Path             | Page                 |
|------------------|----------------------|
| `/`              | Product overview     |
| `/product/:id`   | Product detail       |
| `/category/:name`| Products by category |
| `/contact`       | Contact form         |

## Sprint 2 - Users & Search

Adds user authentication, invoicing, favorites, contact messaging, reports, and search capabilities.

### New Features

- User registration and JWT-based login
- Password management (change, forgot)
- Search endpoints for products, brands, and categories
- Invoice creation and management
- Favorites (save products)
- Contact messaging system with replies and file attachments
- Payment validation
- Reporting (sales, customers, top products)

### New API Endpoints

#### Users

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| POST   | `/users/login`            | Authenticate user        |
| POST   | `/users/register`         | Register new user        |
| POST   | `/users/change-password`  | Change password          |
| POST   | `/users/forgot-password`  | Request password reset   |
| GET    | `/users/logout`           | Logout                   |
| GET    | `/users/me`               | Get current user profile |
| GET    | `/users/refresh`          | Refresh JWT token        |
| GET    | `/users`                  | List all users           |
| GET    | `/users/{id}`             | Get user by ID           |
| GET    | `/users/search`           | Search users             |
| PUT    | `/users/{id}`             | Update user              |
| DELETE | `/users/{id}`             | Delete user              |

#### Invoices

| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/invoices`                | List invoices            |
| GET    | `/invoices/{id}`           | Get invoice by ID        |
| GET    | `/invoices/search`         | Search invoices          |
| POST   | `/invoices`                | Create invoice           |
| PUT    | `/invoices/{id}`           | Update invoice           |
| PUT    | `/invoices/{id}/status`    | Update invoice status    |
| DELETE | `/invoices/{id}`           | Delete invoice           |

#### Favorites

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/favorites`        | List user favorites      |
| GET    | `/favorites/{id}`   | Get favorite by ID       |
| POST   | `/favorites`        | Add favorite             |
| PUT    | `/favorites/{id}`   | Update favorite          |
| DELETE | `/favorites/{id}`   | Remove favorite          |

#### Messages

| Method | Endpoint                       | Description              |
|--------|--------------------------------|--------------------------|
| GET    | `/messages`                    | List messages            |
| GET    | `/messages/{id}`               | Get message by ID        |
| POST   | `/messages`                    | Send message             |
| POST   | `/messages/{id}/attach-file`   | Attach file to message   |
| POST   | `/messages/{id}/reply`         | Reply to message         |
| PUT    | `/messages/{id}/status`        | Update message status    |

#### Reports

| Method | Endpoint                                  | Description                    |
|--------|-------------------------------------------|--------------------------------|
| GET    | `/reports/total-sales-of-years`           | Total sales by year            |
| GET    | `/reports/total-sales-per-country`        | Sales by country               |
| GET    | `/reports/top10-purchased-products`       | Top 10 purchased products      |
| GET    | `/reports/top10-best-selling-categories`  | Top 10 selling categories      |
| GET    | `/reports/customers-by-country`           | Customer distribution          |
| GET    | `/reports/average-sales-per-month`        | Monthly average sales          |
| GET    | `/reports/average-sales-per-week`         | Weekly average sales           |

#### Search & Payment

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/brands/search`      | Search brands            |
| GET    | `/categories/search`  | Search categories        |
| GET    | `/products/search`    | Search products          |
| POST   | `/payment/check`      | Validate payment         |

### UI Routes

Same as Sprint 1 (no new UI pages).

## Sprint 3 - Checkout & Rentals

Adds a checkout flow and rental product support.

### New Features

- Checkout page for completing purchases
- Rental products overview page
- Enhanced invoice line item handling

### API Changes

Same endpoints as Sprint 2. Backend improvements to invoice line item processing.

### UI Routes

| Path             | Page                     | New? |
|------------------|--------------------------|------|
| `/`              | Product overview         |      |
| `/product/:id`   | Product detail           |      |
| `/category/:name`| Products by category     |      |
| `/rentals`       | Rental products overview | Yes  |
| `/checkout`      | Checkout                 | Yes  |
| `/contact`       | Contact form             |      |

## Sprint 4 - Auth & Accounts

Adds authenticated user areas with route protection, account management, and contract testing.

### New Features

- Login and registration pages
- Protected account area (profile, invoices, favorites, messages)
- Route guards (`UserAuthGuard`) for authenticated-only pages
- Lazy-loaded modules for auth and account sections
- PATCH support for partial updates on resources
- Database refresh endpoint for testing
- Pact contract testing integration

### New API Endpoints

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| POST   | `/refresh`          | Reset database (migrate + seed) |
| PATCH  | `/brands/{id}`      | Partial update brand         |
| PATCH  | `/categories/{id}`  | Partial update category      |
| PATCH  | `/invoices/{id}`    | Partial update invoice       |
| PATCH  | `/products/{id}`    | Partial update product       |
| PATCH  | `/users/{id}`       | Partial update user          |

### UI Routes

| Path             | Page                     | New? |
|------------------|--------------------------|------|
| `/`              | Product overview         |      |
| `/product/:id`   | Product detail           |      |
| `/category/:name`| Products by category     |      |
| `/rentals`       | Rental products overview |      |
| `/checkout`      | Checkout                 |      |
| `/contact`       | Contact form             |      |
| `/auth`          | Login / Register (lazy)  | Yes  |
| `/account`       | Account panel (lazy)     | Yes  |

#### Account Panel Pages

- Profile management
- Invoice history and details
- Favorites list
- Messages / contact requests

## Sprint 5 - Full Platform

The complete production version with shopping cart, admin dashboard, social auth, 2FA, PDF invoices, multiple payment methods, and multi-language support.

### New Features

- **Shopping Cart** - Add/remove items, update quantities
- **Social Login** - Google and GitHub OAuth
- **Two-Factor Authentication** - TOTP setup and verification
- **PDF Invoices** - Generate and download invoice PDFs
- **Multiple Payment Methods** - Credit card, bank transfer, buy-now-pay-later, gift card, cash on delivery
- **Admin Dashboard** - Full management of products, invoices, users, categories, brands, and reports
- **Chat Widget** - In-app support chat
- **Multi-language** - Transloco i18n support
- **Privacy Policy** page

#### Platform Upgrades

- Laravel 11 &rarr; Laravel 12
- PHP 8.1 &rarr; PHP 8.3
- PHPUnit &rarr; Pest testing framework
- Hash routing &rarr; clean URLs with scroll restoration
- Full lazy-loading for all route modules

### New API Endpoints

#### Cart

| Method | Endpoint                              | Description              |
|--------|---------------------------------------|--------------------------|
| POST   | `/carts`                              | Create cart              |
| POST   | `/carts/{id}`                         | Add item to cart         |
| GET    | `/carts/{id}`                         | Get cart contents        |
| PUT    | `/carts/{id}/product/quantity`        | Update item quantity     |
| DELETE | `/carts/{cartId}/product/{productId}` | Remove item from cart    |
| DELETE | `/carts/{cartId}`                     | Delete cart              |

#### Invoice Downloads

| Method | Endpoint                              | Description              |
|--------|---------------------------------------|--------------------------|
| GET    | `/invoices/{id}/download-pdf`         | Download invoice PDF     |
| GET    | `/invoices/{id}/download-pdf-status`  | Check PDF generation status |

#### Social Authentication

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/auth/social-login`      | Initiate social login    |
| GET    | `/auth/cb/google`         | Google OAuth callback    |
| GET    | `/auth/cb/github`         | GitHub OAuth callback    |

#### TOTP (Two-Factor Auth)

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/totp/setup`       | Set up 2FA               |
| POST   | `/totp/verify`      | Verify TOTP code         |
| POST   | `/totp/login/totp`  | Login with TOTP          |

#### HTTP QUERY Method

All search/filter endpoints also accept the [HTTP QUERY method](http-query-method.md)
(RFC 10008): a safe, idempotent request whose JSON body carries the criteria
that would otherwise go in the URL query string. The GET variants keep working
unchanged.

| Method | Endpoint             | Description                            |
|--------|----------------------|----------------------------------------|
| QUERY  | `/products`          | Filter products via JSON body criteria |
| QUERY  | `/products/search`   | Search products                        |
| QUERY  | `/brands/search`     | Search brands                          |
| QUERY  | `/categories/search` | Search categories                      |
| QUERY  | `/categories/tree`   | Category tree scoped by slug           |
| QUERY  | `/invoices/search`   | Search invoices (authenticated)        |
| QUERY  | `/users/search`      | Search users (admin)                   |

### UI Routes

| Path        | Module          | Description                |
|-------------|-----------------|----------------------------|
| `/`         | ProductsModule  | Product browsing (lazy)    |
| `/privacy`  | PrivacyModule   | Privacy policy (lazy)      |
| `/checkout` | CheckoutModule  | Checkout flow (lazy)       |
| `/contact`  | ContactModule   | Contact form (lazy)        |
| `/auth`     | AuthModule      | Login / Register (lazy)    |
| `/account`  | AccountModule   | User account panel (lazy)  |
| `/admin`    | AdminModule     | Admin dashboard (lazy)     |

### Feature Comparison Across Sprints

| Feature                | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Sprint 5 |
|------------------------|:--------:|:--------:|:--------:|:--------:|:--------:|
| Products / Categories  | x        | x        | x        | x        | x        |
| Brands                 | x        | x        | x        | x        | x        |
| Contact Form           | x        | x        | x        | x        | x        |
| User Auth (JWT)        |          | x        | x        | x        | x        |
| Search                 |          | x        | x        | x        | x        |
| Invoices               |          | x        | x        | x        | x        |
| Favorites              |          | x        | x        | x        | x        |
| Reports                |          | x        | x        | x        | x        |
| Checkout               |          |          | x        | x        | x        |
| Rentals                |          |          | x        | x        | x        |
| Login / Register Pages |          |          |          | x        | x        |
| Account Panel          |          |          |          | x        | x        |
| Route Guards           |          |          |          | x        | x        |
| PATCH Endpoints        |          |          |          | x        | x        |
| Shopping Cart          |          |          |          |          | x        |
| Social Login           |          |          |          |          | x        |
| 2FA / TOTP             |          |          |          |          | x        |
| PDF Invoices           |          |          |          |          | x        |
| Multiple Payments      |          |          |          |          | x        |
| Admin Dashboard        |          |          |          |          | x        |
| Chat Widget            |          |          |          |          | x        |
| Multi-language         |          |          |          |          | x        |

## Sprint 5 (with bugs)

A variant of Sprint 5 with **90+ intentional bugs** embedded throughout the application. Designed for exploratory testing practice, bug-hunting exercises, and agile testing workshops.

### Purpose

- Practice exploratory testing techniques
- Learn to write effective bug reports
- Session-based testing exercises
- Agile testing workshop scenarios

### Differences from Sprint 5

- Contains 90+ intentional bugs across the UI, API, and accessibility
- Missing some Sprint 5 features (cart, social login, TOTP)
- Exposes a log endpoint for debugging

#### Additional API Endpoint

| Method | Endpoint              | Description                 |
|--------|-----------------------|-----------------------------|
| GET    | `/logs/laravel.log`   | View application logs       |

### Hosted Version

| Component   | URL                                                                                     |
|-------------|-----------------------------------------------------------------------------------------|
| Application | [with-bugs.practicesoftwaretesting.com](https://with-bugs.practicesoftwaretesting.com)   |
| API         | [api-with-bugs.practicesoftwaretesting.com](https://api-with-bugs.practicesoftwaretesting.com) |
| Swagger     | [API Documentation](https://api-with-bugs.practicesoftwaretesting.com/api/documentation) |

### List of Known Bugs

#### UI Bugs

| ID | Page | Title |
|----|------|-------|
| 1 | Cart | Plus / minus sign is not adding the amount |
| 2 | Category page | Sort works the other way around |
| 3 | Category page | Category "Chainsaw" leads to 404 |
| 4 | Category page | Some product names are aligned to the right |
| 5 | Category page | Title centered in Edge |
| 6 | Category page | Product names prevented from wrapping in Firefox |
| 7 | Checkout - cart | Delete button is disabled |
| 8 | Checkout - cart | Total price displays 0,00 |
| 9 | Checkout - billing address | Typo "Billing Address" |
| 10 | Checkout - billing address | Instead of postcode "Missing value" is displayed |
| 11 | Checkout - billing address | Submit / Next button has no text |
| 12 | Checkout - payment | Payment method dropdown shows "Error 304 - Missing Payment Gateway" |
| 13 | Invoice list | No pagination |
| 14 | Invoice page | Payment method shows "Method not found" |
| 15 | Invoice page | City is displayed in Country field and Country as City |
| 16 | Invoice page | Address fields display "undefined" |
| 17 | Login page | Email and password will not be validated |
| 18 | Login page | Incorrect Tab Order in Firefox |
| 19 | Login page | Input padding of email is not correct in Chrome |
| 20 | Login page | Button width is not correct in Firefox |
| 21 | Login page | User will be locked after 1 invalid attempt (should be 3) |
| 22 | Forgot password | Different font for the button in Edge and Chrome |
| 23 | Forgot password | Input padding of email is not correct in Chrome |
| 24 | Forgot password | Button width is not correct in Edge |
| 25 | Forgot password | Email syntax will not be checked |
| 26 | Home page | Some product images are not visible in Chrome |
| 27 | Home page | Price range selection doesn't work, max price is not sent to the server |
| 28 | Home page | Broken image instead of Toolshop logo |
| 29 | Home page | Home link in upper corner links to the contact page |
| 30 | Home page | Broken image instead of magnifying glass beside "Search" |
| 31 | Home page | Link text typo "Contakt" instead of "Contact" |
| 32 | Home page | "User Data not found" displayed instead of username |
| 33 | Home page | Typo "Sorth" instead of "Sort" |
| 34 | Home page | Typo "Serch" instead of "Search" on button |
| 35 | Home page | Product names prevented from wrapping in Firefox |
| 36 | Profile page | First Name displayed as Last Name and vice versa |
| 37 | Profile page | "City not found" displayed in city field |
| 38 | Profile page | Changing address fields leads to 404 or error |
| 39 | Profile page | Updated password is not hashed in DB, so it no longer works |
| 40 | Product detail | Plus / minus buttons do not change quantity |
| 41 | Product detail | "Add to favourites" displays error "Upsss... something wrong" |
| 42 | Product detail | Typo "Reltded products" instead of "Related products" |
| 43 | Product detail | "Add to cart" shows red error but items are still added |
| 44 | Product detail | Title aligned to the right in Firefox & Edge |
| 45 | Product detail | Buttons overlap in Chrome |
| 46 | Product detail | Badge text color is black |
| 47 | Product detail | Cannot add more than 10 pieces to cart |
| 48 | Rentals page | Bulldozer images don't work in Firefox and Edge |
| 49 | Rentals page | Title centered in Chrome |
| 50 | Registration page | Error reveals password hint for existing users |
| 51 | Registration page | Special characters in name cause "Invalid character" error |
| 52 | Registration page | State displays country and country displays state |
| 53 | Registration page | Incorrect Tab Order in Chrome |
| 54 | Registration page | Typo in Phone placeholder |
| 55 | Registration page | Different font for error messages in Edge and Chrome |
| 56 | Registration page | City label not aligned properly in Firefox |
| 57 | Registration page | Input padding of phone not correct in Firefox |
| 58 | Registration page | Button width not correct in Chrome |
| 59 | Registration page | Smaller font for some dropdown options |
| 60 | Contact page | Dropdowns display "Error 101" and "Error 202" |
| 61 | Contact page | Incorrect Tab Order in Firefox |
| 62 | Contact page | Typo in Message placeholder |
| 63 | Contact page | Different font for Attachment label in Edge and Chrome |
| 64 | Contact page | Email label not aligned properly in Firefox |
| 65 | Contact page | Input padding of firstname not correct in Firefox |
| 66 | Contact page | Button width not correct in Edge and Chrome |
| 67 | Contact page | Smaller font for some dropdown options |
| 68 | Contact page | PDF file upload not allowed |
| 69 | Contact page | JPG file upload not allowed |
| 70 | Contact page | File with 0KB can be uploaded |
| 84 | Emails | Logo used inconsistently in mails |

#### API / Security Bugs

| ID | Area | Title | OWASP Category |
|----|------|-------|----------------|
| 71 | `users/{id}` | Can retrieve details from a different user by changing the ID | OWASP API1:2023 - Broken Object Level Authorization |
| 72 | Token / refresh token | Long-lived access token (260000 min / refresh 520000 min) | OWASP API2:2023 - Broken Authentication |
| 73 | `users` | Responses reveal `enabled` and `failed_login_attempts` to non-admins | OWASP API3:2023 - Broken Object Property Level Authorization |
| 74 | `brands` | Possible to delete a brand without admin token | OWASP API5:2023 - Broken Function Level Authorization |
| 75 | `products` | Responses reveal stock amount to non-admins | OWASP API3:2023 - Broken Object Property Level Authorization |
| 76 | `products` | Possible to delete a product without admin token | OWASP API5:2023 - Broken Function Level Authorization |
| 77 | `reports` | Too strict rate limiter returns 429 Too Many Requests | OWASP API4:2019 - Lack of Resources & Rate Limiting |
| 78 | `invoices` | All invoices returned regardless of token ownership | OWASP API5:2023 - Broken Function Level Authorization |
| 79 | `users/login` | SQL injection allows login as any user (append `' -- ` to email) | OWASP API8:2019 - Injection |
| 80 | `logs/laravel.log` | Application logs exposed through the web | OWASP API8:2023 - Security Misconfiguration |
| 81 | `invoices` | Can modify amount and price via POST | OWASP A04:2021 - Insecure Design |
| 82 | All IDs | IDs are incremental and guessable (vs ULIDs in non-bug version) | OWASP API1:2023 - Broken Object Level Authorization |
| 83 | Token roles | Wrong status code 401 instead of 403 for wrong role | OWASP API2:2023 - Broken Authentication |

#### Accessibility Bugs

| ID | Area | Title |
|----|------|-------|
| 85 | Links | Contrast of links too low (4.26:1) |
| 86 | Checkout wizard | Contrast of checkout wizard labels too low (3.94:1) |
| 87 | Login form | No labels on form inputs |
| 88 | Checkout address form | No labels on form inputs |
| 89 | Checkout payment form | No labels on form inputs |
| 90 | Checkout login form | No labels on form inputs |
| 91 | Product detail | Quantity input has no label |
| 92 | Product detail | Product images have no alt text |
| 93 | Product overview | Search form has no labels |
| 94 | Product overview | No fieldset for filters |

#### Discoverable Via Tour Types

| Tour | Description |
|------|-------------|
| Landmark Tour | Test key functional landmarks (buttons, inputs, counters) |
| Supporting Actor Tour | Test secondary UI elements (dropdowns, sort, filters) |
| SuperModel Tour | Visual/layout issues across browsers |
| FedEx Tour | Follow data end-to-end through the system |
| GarbageCollector Tour | Test all buttons and interactive elements |
| Intellectual Tour | Test with invalid, edge-case, or boundary data |
| BadBoy Tour | Security-focused testing (injection, authorization) |
| Links/Typos | Check all links and text for correctness |
| Accessibility | Test with screen readers, contrast checkers, keyboard nav |

## Sprint 5 (performance)

A variant of Sprint 5 with **performance degradation middleware** applied to key endpoints. Designed for load testing, resilience testing, and performance engineering practice.

### Purpose

- Practice performance and load testing
- Observe application behavior under stress
- Test monitoring and alerting setups
- Understand degradation strategies

### How It Works

Selected API endpoints include a `performance.degrade` middleware that simulates realistic performance degradation under load. As request volume increases, response times gradually increase based on configurable strategies.

#### Middleware Parameters

| Parameter         | Description                                             |
|-------------------|---------------------------------------------------------|
| `threshold`       | Number of requests before degradation begins            |
| `window`          | Time window in seconds for counting requests            |
| `max_delay`       | Maximum added delay in milliseconds                     |
| `strategy`        | Degradation curve: `exponential`, `stepped`, or `linear`|
| `scope`           | Scope of rate tracking (e.g., `ip`)                     |
| `degradation_type`| Type of degradation (e.g., `blocking`)                  |

### Affected Endpoints

| Endpoint                         | Threshold | Window | Max Delay | Strategy    |
|----------------------------------|-----------|--------|-----------|-------------|
| `GET /brands`                    | 20        | 300s   | 3000ms    | exponential |
| `GET /categories/tree`           | 10        | 60s    | 2000ms    | stepped     |
| `GET /categories/search`         | 10        | 60s    | 2000ms    | stepped     |
| `GET /invoices/{id}`             | 50        | 300s   | 2000ms    | stepped     |
| `GET /products`                  | 50        | 60s    | 1000ms    | linear      |
| `GET /reports/total-sales-of-years` | 20     | 300s   | 3000ms    | exponential |
| `POST /users/login`              | 10        | 60s    | 2000ms    | stepped     |
| `POST /users/register`           | 30        | 300s   | 1000ms    | linear      |

### Degradation Strategies

- **Exponential** - Delay increases exponentially as requests approach the threshold. Simulates cascading slowdowns.
- **Stepped** - Delay increases in discrete steps. Simulates tiered resource contention.
- **Linear** - Delay increases proportionally with request count. Simulates gradual resource exhaustion.

### Implementation Details

Performance degradation is implemented in both the **API** (Laravel middleware) and the **frontend** (Angular directive).

---

#### API – Performance Degradation Middleware

##### Source files

| File | Description |
|------|-------------|
| `API/app/Http/Middleware/PerformanceDegradationMiddleware.php` | Middleware class — tracks request counts per IP via cache, calculates delay based on strategy, applies `usleep()` blocking delays, and throws simulated 504 errors |
| `API/app/Http/Kernel.php:38` | Registers the middleware alias `performance.degrade` |
| `API/routes/api.php` | Applies the middleware to specific routes (see table below) |

##### Route-level middleware registration

| Route file location | Endpoint | Middleware parameters |
|----------------------|----------|-----------------------|
| `routes/api.php:48` | `GET /brands` | `threshold:20,window:300,max_delay:3000,strategy:exponential` |
| `routes/api.php:68` | `GET /categories/tree` | `threshold:10,window:60,max_delay:2000,strategy:stepped` |
| `routes/api.php:71` | `GET /categories/search` | `threshold:10,window:60,max_delay:2000,strategy:stepped,degradation_type:blocking` |
| `routes/api.php:103` | `GET /invoices/{id}` | `threshold:50,window:300,max_delay:2000,strategy:stepped,degradation_type:blocking` |
| `routes/api.php:118` | `GET /products` | `threshold:50,window:60,max_delay:1000,strategy:linear,degradation_type:blocking` |
| `routes/api.php:130` | `GET /reports/total-sales-of-years` | `threshold:20,window:300,max_delay:3000,strategy:exponential,degradation_type:blocking` |
| `routes/api.php:146` | `POST /users/login` | `threshold:10,window:60,max_delay:2000,strategy:stepped,degradation_type:blocking` |
| `routes/api.php:150` | `POST /users/register` | `threshold:30,window:300,max_delay:1000,strategy:linear,degradation_type:blocking` |

---

#### Frontend – Render Delay Directive

##### Source file

| File | Description |
|------|-------------|
| `UI/src/app/render-delay-directive.directive.ts` | Angular directive that introduces artificial rendering delays — sets element opacity to 0.3, disables buttons and links, then re-enables after a random delay |

##### Behavior

- On render, the host element is set to **30% opacity**
- All **buttons** inside the element are **disabled**
- All **anchor tags** have pointer events disabled and opacity reduced to 50%
- After a random delay (within the configured range), the element is restored to normal
- Default delay range: **500–2000ms**

##### Affected components

| Component | File | Delay range |
|-----------|------|-------------|
| Admin – Users list | `UI/src/app/admin/users-list/users-list.component.html:13` | 500–2000ms |
| Admin – Products list | `UI/src/app/admin/products-list/products-list.component.html:13` | 500–2000ms |
| Admin – Orders list | `UI/src/app/admin/orders-list/orders-list.component.html:12` | 500–2000ms |
| Admin – Brands list | `UI/src/app/admin/brands-list/brands-list.component.html:12` | 500–2000ms |
| Admin – Categories list | `UI/src/app/admin/categories-list/categories-list.component.html:12` | 500–2000ms |
| Admin – Messages list | `UI/src/app/admin/messages-list/messages-list.component.html:4` | 500–2000ms |
| Admin – Avg sales/month | `UI/src/app/admin/reports/average-sales-month/average-sales-month.component.html:13` | 1500–3500ms |
| Admin – Avg sales/week | `UI/src/app/admin/reports/average-sales-week/average-sales-week.component.html:13` | 1500–3500ms |
| Admin – Statistics | `UI/src/app/admin/reports/statistics/statistics.component.html:7,31,57,81` | 500–2000ms |
| Account – Profile | `UI/src/app/account/profile/profile.component.html:1` | 1000–2000ms |
| Account – Messages | `UI/src/app/account/messages/messages.component.html:8` | 500–2500ms |
| Account – Invoices | `UI/src/app/account/invoices/invoices.component.html:4` | 500–2000ms |
| Account – Favorites | `UI/src/app/account/favorites/favorites.component.html:9` | 500–2000ms |
| Account – Message detail | `UI/src/app/account/messages/message-detail/message-detail.component.html:1` | 750–2500ms |
| Account – Invoice detail | `UI/src/app/account/invoices/details/details.component.html:7` | 500–2000ms |

---

### List of Known Behaviors

These are intentional performance degradation characteristics that testers should be aware of.

#### API Behaviors

| # | Area | Behavior | Location |
|---|------|----------|----------|
| 1 | All degraded endpoints | **Simulated 504 Gateway Timeout** — When delay reaches `max_delay`, 20% of requests return a 504 instead of a normal response | `PerformanceDegradationMiddleware.php:128-138` |
| 2 | All degraded endpoints | **Blocking worker threads** — Delays use `usleep()` which blocks the PHP worker; sustained load can exhaust the worker pool | `PerformanceDegradationMiddleware.php:125` |
| 3 | All degraded endpoints | **Per-IP counter reset** — Switching client IP resets the request counter, bypassing the threshold | `PerformanceDegradationMiddleware.php:89-90` |
| 4 | All degraded endpoints | **Cache-dependent counters** — Counters stored in Laravel cache; restarting the cache driver resets all counters | `PerformanceDegradationMiddleware.php:30-33` |
| 5 | Exponential strategy | **Narrow degradation band** — Uses `100 * 1.5^n`, so delay jumps from trivial to max within a narrow range of excess requests | `PerformanceDegradationMiddleware.php:158-160` |
| 6 | Stepped strategy | **Fixed step thresholds** — Delays jump at fixed excess-request counts (5, 10, 20, 50, 100) regardless of the endpoint's configured threshold | `PerformanceDegradationMiddleware.php:164-171` |
| 7 | All degraded endpoints | **Window TTL reset** — Each `Cache::put()` resets the TTL to the full window duration, so steady traffic never lets the counter expire | `PerformanceDegradationMiddleware.php:33` |

#### Frontend Behaviors

| # | Area | Behavior | Location |
|---|------|----------|----------|
| 8 | Admin list pages | **Render delay 500–2000ms** — Page content fades to 30% opacity and buttons/links are disabled for a random period | `render-delay-directive.directive.ts` |
| 9 | Admin report pages | **Extended render delay 1500–3500ms** — Report charts experience longer delays than list pages | `average-sales-month.component.html:13`, `average-sales-week.component.html:13` |
| 10 | Account pages | **Render delay 500–2500ms** — Profile, messages, invoices, and favorites pages experience rendering delays | `render-delay-directive.directive.ts` |
| 11 | All affected pages | **Buttons disabled during delay** — All buttons inside the directive host are set to `disabled="true"` during the delay period | `render-delay-directive.directive.ts:25` |
| 12 | All affected pages | **Links blocked during delay** — Anchor tags have `pointerEvents` set to `none` and click events are blocked during the delay | `render-delay-directive.directive.ts:30-40` |
| 13 | All affected pages | **No loading indicator** — Elements fade to 30% opacity but no spinner or skeleton screen is shown; users see a dimmed, unresponsive page | `render-delay-directive.directive.ts:16` |
| 14 | All affected pages | **No error handling for 504** — The frontend has no specific handling for the simulated 504 timeouts thrown by the API middleware | HTTP interceptors in `_helpers/` |

### All Other Features

This version includes all Sprint 5 features (cart, social login, 2FA, admin dashboard, etc.) alongside the performance degradation.
