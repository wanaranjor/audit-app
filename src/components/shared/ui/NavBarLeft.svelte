<script>
  import Badge24 from "carbon-icons-svelte/lib/Badge24";
  import Building24 from "carbon-icons-svelte/lib/Building24";
  import Cyclist24 from "carbon-icons-svelte/lib/Cyclist24";
  import ExamMode24 from "carbon-icons-svelte/lib/ExamMode24";
  import Logout24 from "carbon-icons-svelte/lib/Logout24";
  import Pedestrian24 from "carbon-icons-svelte/lib/Pedestrian24";

  // import { stores, goto } from "@sapper/app";
  // import { logoutUser } from "./login/services/services";

  // const { session } = stores();

  // const handleLogout = async () => {
  //   const result = await logoutUser();
  //   if (result.status === 700) {  import UserAvatarFilled24 from "carbon-icons-svelte/lib/UserAvatarFilled24";
  //     console.log("cerrar sesion");
  //     $session.user = null;
  //     $session.profile = null;
  //     goto("/");
  //   } else {
  //     alertError("Error al cerrar la sesión. Intente nuevamente.");
  //   }
  // };
</script>

<nav>
  <ul class="space-y-2">
    <li>
      <a
        href="/dashboard"
        class="flex items-center p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <Building24 />
      </a>
    </li>
    <li>
      <a
        href="/"
        class="flex items-center p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <Pedestrian24 />
      </a>
    </li>
    <li>
      <a
        href="/"
        class="flex items-center p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <ExamMode24 />
      </a>
    </li>
    <li>
      <a
        href="/"
        class="flex items-center p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <Badge24 />
      </a>
    </li>
    <li>
      <a
        href="/"
        class="flex items-center p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <Cyclist24 />
      </a>
    </li>
    <li>
      <button
        class="flex items-center w-full p-2 space-x-3 font-light text-gray-500 rounded-md hover:bg-blue-700 hover:text-white"
      >
        <Logout24 />
      </button>
    </li>
  </ul>
</nav>
