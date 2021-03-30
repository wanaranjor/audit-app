<script>
  import {
    isEmpty,
    isEqualPassword,
    isNumber,
    isValidEmail,
  } from "../../../helpers/validators";

  let razonSocial,
    tipoDoc,
    numeroDoc,
    email,
    password,
    conPassword = "";

  $: formIsValid =
    isEmpty(razonSocial) &&
    isEmpty(tipoDoc) &&
    isNumber(numeroDoc) &&
    isValidEmail(email) &&
    isEqualPassword(password, conPassword);

  const handleSubmit = async () => {
    // if (formIsValid) {
    //   let result = await addUser(
    //     razonSocial,
    //     tipoDoc,
    //     numeroDoc,
    //     email,
    //     password
    //   );
    //   if (result === 200) {
    //     formIsValid = false;
    //     notifier.success(
    //       `Registro creado correctamente. Pulse en Ingresar para terminar su proceso de registro.`,
    //       7000
    //     );
    //     razonSocial = "";
    //     tipoDoc = "";
    //     numeroDoc = "";
    //     email = "";
    //     password = "";
    //     conPassword = "";
    //   } else {
    //     notifier.danger("Algo salio mal, verifique nuevamente.", 5000);
    //   }
    //   if (result === 403) {
    //     notifier.danger(
    //       "El número de documento ya se encuentra registrado.",
    //       5000
    //     );
    //   }
    // }
  };
</script>

<!-- <NotificationDisplay /> -->
<section class="flex flex-col p-5 bg-white border rounded-md">
  <p class="pb-3 text-lg font-semibold">Registro usuarios</p>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label class="label-form" for="razonSocial"
        >1. Nombre Razón Social
      </label>
      <input type="text" bind:value={razonSocial} class="input-form" />
    </div>
    <div class="flex flex-col w-full mt-4 space-x-0 md:space-x-3 md:flex-row">
      <div class="w-full mb-4 md:w-1/2">
        <label class="label-form" for="tipDocumento"> 2. Tipo Documento </label>
        <!-- TODO: cargar opciones del Select desde API -->
        <select bind:value={tipoDoc} class="text-xs input-form">
          <option value="" select>-------</option>
          <option value={"NIT"}>NIT</option>
          <option value={"CC"}>CEDÚLA DE CIUDADANIA</option>
          <option value={"CE"}>CEDÚLA DE EXTRANJERIA</option>
          <option value={"OTRO"}>OTRO</option>
        </select>
      </div>
      <div class="w-full mb-4 md:w-1/2">
        <label class="label-form" for="numeroDoc"> 3. Número Documento </label>
        <input class="input-form" type="text" bind:value={numeroDoc} />
        {#if !isNumber(numeroDoc)}
          <p class="text-xs italic text-gray-600">Solo números</p>
        {/if}
      </div>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3 md:flex-row">
      <div class="w-full md:w-1/2">
        <div class="">
          <label class="label-form" for="password">6. Contraseña </label>
          <input type="password" bind:value={password} class="input-form" />
        </div>
      </div>
      <div class="w-full mb-4 md:w-1/2">
        <div class="mt-4 sm:mt-0">
          <label class="label-form" for="conPassword"
            >7. Confirmar Contraseña
          </label>
          <input type="password" bind:value={conPassword} class="input-form" />
          {#if !isEqualPassword(password, conPassword)}
            <p class="text-xs italic text-gray-600">
              Las contraseñas no son iguales
            </p>
          {/if}
        </div>
      </div>
    </div>
    <div class="">
      <label class="label-form" for="email">6. Correo Eléctronico </label>
      <input type="email" bind:value={email} class="lowercase input-form" />
    </div>
    <div class="flex flex-col">
      <button
        class={formIsValid
          ? "btn mt-4"
          : "btn opacity-50 cursor-not-allowed mt-4"}
        disabled={!formIsValid}
        type="submit">Crear</button
      >
    </div>
  </form>
</section>
