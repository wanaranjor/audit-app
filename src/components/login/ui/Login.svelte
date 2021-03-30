<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import { loginUser } from "../services/login.services";

  let email,
    password = "";

  // $: formIsValid = isValidEmail(email) && isEmpty(password);
  $: formIsValid = true;

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
  <div
    class="flex items-center h-screen bg-center bg-cover sm:flex md:w-2/3"
    style="background-image: url(team.webp)"
  >
    <div
      class="flex flex-col items-center justify-center p-10 mx-auto text-white bg-black opacity-75 max-h-64 max-w-max "
    >
      <p class="pb-5 text-4xl font-black">Nuestra misión es clara</p>

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
        <p class="text-4xl font-bold">Auditoría Cloud</p>
        <p class="text-sm text-center">
          Firma Contable, Auditoría y Consultoría
        </p>
      </div>
      <form class="w-full mt-6" on:submit|preventDefault={handleSubmit}>
        <div>
          <label
            class="block font-medium leading-relaxed tracking-tighter text-gray-700 text-md"
            for="email"
            >Correo
            <input
              type="text"
              name="email"
              id="email"
              bind:value={email}
              class="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 focus:bg-white focus:ring-3 focus:outline-none focus:border-blue-700 focus:ring-blue-70"
            />
          </label>
        </div>
        <div class="mt-4">
          <label
            class="block font-medium leading-relaxed tracking-tighter text-gray-700 text-md"
            for="password"
            >Contraseña
            <input
              type="password"
              name="password"
              bind:value={password}
              minlength="6"
              class="w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 focus:bg-white focus:ring-3 focus:outline-none focus:border-blue-700 focus:ring-blue-700"
            />
          </label>
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
