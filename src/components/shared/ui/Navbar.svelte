<script>
  import { stores } from "@sapper/app";
  import Logout24 from "carbon-icons-svelte/lib/Logout24";
  import User32 from "carbon-icons-svelte/lib/User32";

  const { session } = stores();
  const handleLogout = async () => {
    // const result = await logoutUser();
    // if (result.status === 200) {
    //   console.log("cerrar sesion");
    //   $session.user = null;
    //   goto("/");
    // } else {
    //   alertError("Error al cerrar la sesión. Intente nuevamente.");
    // }
  };
</script>

<nav
  class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto"
>
  <a href="/" class="mr-5 hover:text-gray-900">First Link</a>
  <a href="/" class="mr-5 hover:text-gray-900">Second Link</a>
  <a href="/" class="mr-5 hover:text-gray-900">Third Link</a>
  <a href="/" class="mr-5 hover:text-gray-900">Fourth Link</a>
</nav>
<div class="flex flex-row items-center space-x-2">
  <User32 />
  <p>Sandra Sanchez</p>
</div>
<button
  class="inline-flex items-center px-3 py-1 mt-4 space-x-1 text-base text-gray-600 bg-gray-100 border-0 rounded md:mt-0"
  on:click={handleLogout}
>
  <Logout24 />
  <p>Salir</p>
</button>
