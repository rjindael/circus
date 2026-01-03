# Circus

Lightweight Python MVC+ORM website template using Svelte & Postgres 🎪

Circus draws inspiration upon the existing [Laravel web framework](https://github.com/laravel/framework) (including the [Eloquent ORM](https://laravel.com/docs/12.x/eloquent)), but with several key distinctions:

- Implemented as a distinct Python web framework
- Built-in user auth & session handling (with bare minimum extensibility )
- No separation between the framework and the template; fork Circus to create your own website, as Circus itself is a template.
  - Create your app in `app/`
  - Actual WSGI framework is abstracted away in `srv/`
- **Heavily opinionated!**
  - Default view system is Svelte with Vite for frontend development
    - Tailwind included & encouraged
  - More granular migration system for extra details in tables, as DB engine is not agnostic (currently solely Postgres)
  - Emphasis on minimizing resource usage, with a relatively more lightweight testing environment than Sail while still utilizing Docker

The ultimate goal of Circus is to enable rapid prototyping of complex websites with the extensibility and ease-of-use provided by Laravel, while being more lightweight & simple on the whole.

## Usage

### Prerequisites

- Python v3.10+
- Bun v1.3+
- Docker

### Installation

TODO

### CLI

Circus cli is liek artisan.
TODO

## License

Circus is licensed under the GNU Affero General Public License v3. A copy of it has been included with Circus.
