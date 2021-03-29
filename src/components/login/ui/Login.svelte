<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import { loginUser } from "../services/login.services";
  import { isEmpty, isValidEmail } from "./../../../helpers/validators";

  let email,
    password = "";

  $: formIsValid = isValidEmail(email) && isEmpty(password);

  const handleSubmit = async () => {
    const response = await loginUser(email, password);
    if (!response.error) {
      window.location.href = "/dashboard";
    } else {
      notifier.danger(
        `Usuario o contraseña invalidos. Intente nuevamente.`,
        5000
      );
      email = "";
      password = "";
    }
  };
</script>

<NotificationDisplay />
<section class="flex flex-col items-center h-screen md:flex-row">
  <!-- h-full container flex flex-col items-center justify-center px-5 mx-auto text-gray-600 bg-auto bg-no-repeat bg-center
   hidden bg-auto bg-no-repeat  w-full h-screen md:items-center md:w-1/3 xl:w-2/3 md:flex -->
  <div
    class="hidden sm:flex h-screen bg-cover bg-center md:w-2/3 flex items-center"
    style="background-image: url(team.webp)"
  >
    <div
      class="text-white bg-black p-10 opacity-75 flex flex-col items-center justify-center mx-auto max-h-64 max-w-max "
    >
      <p class="font-black text-4xl pb-5">Nuestra misión es clara</p>

      <p class="text-md">
        Profundizamos para mejorar la percepción y tenemos el coraje de actuar.
        Reunimos a un grupo de personas adecuadas para prestar los mejores
        servicios contables y tributarios, así como los servicios de auditoria y
        revisoría fiscal en Colombia a organizaciones e impulsar la
        transformación, mejorando los proceso y el cambio tecnológico a nivel
        contable. Trabajamos con nuestros clientes para desarrollar las
        capacidades que permiten a las organizaciones lograr una ventaja
        sostenible. Estamos dando forma al futuro. Juntos.
      </p>
    </div>
  </div>
  <div
    class="flex items-center justify-center w-full h-screen px-6 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12"
  >
    <div class="flex flex-col items-center w-full h-100">
      <div class="flex flex-col text-blue-700">
        <p class="font-bold text-4xl">GMH Auditores</p>
        <p class="text-sm text-center">
          Firma Contable, Auditoria y Consultoria
        </p>
      </div>
      <form class="w-full mt-6" on:submit|preventDefault={handleSubmit}>
        <div>
          <label
            class="block font-medium leading-relaxed tracking-tighter text-gray-700 text-md"
            for="email"
            >Correo
          </label>
          <input
            type="text"
            name="email"
            id="email"
            bind:value={email}
            class="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 focus:bg-white focus:ring-3 focus:outline-none focus:border-blue-700 focus:ring-blue-70"
          />
        </div>
        <div class="mt-4">
          <label
            class="block font-medium leading-relaxed tracking-tighter text-gray-700 text-md"
            for="password"
            >Contraseña
          </label>
          <input
            type="password"
            name="password"
            bind:value={password}
            minlength="6"
            class="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 focus:bg-white focus:ring-3 focus:outline-none focus:border-blue-700 focus:ring-blue-700"
          />
        </div>
        <button
          class={formIsValid
            ? "btn my-3"
            : "btn opacity-50 cursor-not-allowed my-4"}
          disabled={!formIsValid}
          type="submit"
          >Ingresar
        </button>
      </form>
      <hr class="w-full my-6 border-gray-300" />
    </div>
  </div>
</section>
