<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import AddFilled24 from "carbon-icons-svelte/lib/AddFilled24";
  import { createEventDispatcher } from "svelte";
  import { isEmpty, isNumber, isValidEmail } from "../../../helpers/validators";
  import { addEmpresa } from "../services/admin.services";

  const dispatch = createEventDispatcher();

  let razonSocial,
    tipoDoc,
    numeroDoc,
    segmentoCliente,
    direccion,
    ciudad,
    pais,
    telefono,
    correoEmpresarial,
    nombreContacto,
    correoContacto = "";

  $: formIsValid =
    isEmpty(razonSocial) &&
    isEmpty(tipoDoc) &&
    isNumber(numeroDoc) &&
    isEmpty(segmentoCliente) &&
    isEmpty(direccion) &&
    isEmpty(ciudad) &&
    isEmpty(pais) &&
    isEmpty(telefono) &&
    isValidEmail(correoEmpresarial) &&
    isEmpty(nombreContacto) &&
    isValidEmail(correoContacto);

  // isEqualPassword(password, conPassword);

  const handleSubmit = async () => {
    if (formIsValid) {
      let result = await addEmpresa(
        razonSocial,
        tipoDoc,
        numeroDoc,
        segmentoCliente,
        direccion,
        ciudad,
        pais,
        telefono,
        correoEmpresarial,
        nombreContacto,
        correoContacto
      );
      if (result === 200) {
        formIsValid = false;
        dispatch("updateListEmpresas");
        notifier.success(`Cliente Empresarial creado correctamente.`, 7000);
        razonSocial = "";
        tipoDoc = "";
        numeroDoc = "";
        segmentoCliente = "";
        direccion = "";
        ciudad = "";
        pais = "";
        telefono = "";
        correoEmpresarial = "";
        nombreContacto = "";
        correoContacto = "";
      } else {
        notifier.danger("Algo salio mal, verifique nuevamente.", 5000);
      }
      if (result === 403) {
        notifier.danger(
          "El número de documento ya se encuentra registrado.",
          5000
        );
      }
    }
  };
</script>

<NotificationDisplay />
<section class="flex flex-col p-5 bg-white border rounded-md">
  <div class="flex flex-row items-center pb-3 space-x-3">
    <AddFilled24 class="text-blue-700" />
    <p class="text-lg font-semibold text-gray-700">Registro usuarios</p>
  </div>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="w-full pb-2">
      <label class="label-form" for="razonSocial"
        >Nombre Razón Social
        <input type="text" bind:value={razonSocial} class="input-form" />
      </label>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <label class="label-form" for="tipoDoc">
          Tipo documento
          <!-- TODO: cargar opciones del Select desde API -->
          <select bind:value={tipoDoc} class="text-xs input-form">
            <option value="" select>-------</option>
            <option value={"NIT"}>NIT</option>
            <option value={"CC"}>CEDÚLA DE CIUDADANIA</option>
            <option value={"CE"}>CEDÚLA DE EXTRANJERIA</option>
            <option value={"OTRO"}>OTRO</option>
          </select>
        </label>
      </div>
      <div class="w-full md:w-1/2">
        <label class="label-form" for="numeroDoc">
          Número documento
          <input class="input-form" type="text" bind:value={numeroDoc} />
        </label>
        <!-- {#if !isNumber(numeroDoc)}
          <p class="text-xs italic text-gray-600">Solo números</p>
        {/if} -->
      </div>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <label class="label-form" for="segmentoCliente">
          Segmento cliente
          <!-- TODO: cargar opciones del Select desde API -->
          <select bind:value={segmentoCliente} class="text-xs input-form">
            <option value="" select>-------</option>
            <option value={"1"}>SERVICIOS</option>
            <option value={"2"}>PETROLEO</option>
            <option value={"3"}>BANCA</option>
            <option value={"4"}>SEGUROS</option>
          </select>
        </label>
      </div>
      <div class="w-full md:w-1/2">
        <label class="label-form" for="direccion">
          Dirección
          <input class="input-form" type="text" bind:value={direccion} />
        </label>
      </div>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <label class="label-form" for="ciudad">
          Ciudad
          <input class="input-form" type="text" bind:value={ciudad} />
        </label>
      </div>
      <div class="w-full md:w-1/2">
        <label class="label-form" for="pais">
          Pais
          <input class="input-form" type="text" bind:value={pais} />
        </label>
      </div>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <label class="label-form" for="telefono">
          Teléfono
          <input class="input-form" type="text" bind:value={telefono} />
        </label>
      </div>
      <div class="w-full md:w-1/2">
        <label class="label-form" for="correoEmpresarial">
          Correo empresarial
          <input
            class="input-form"
            type="text"
            bind:value={correoEmpresarial}
          />
        </label>
      </div>
    </div>
    <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <label class="label-form" for="nombreContacto">
          Nombre contacto
          <input class="input-form" type="text" bind:value={nombreContacto} />
        </label>
      </div>
      <div class="w-full md:w-1/2">
        <label class="label-form" for="correoContacto">
          Correo contacto
          <input class="input-form" type="text" bind:value={correoContacto} />
        </label>
      </div>
    </div>
    <!-- <div class="flex flex-col w-full space-x-0 md:space-x-3.5 md:flex-row pb-2">
      <div class="w-full md:w-1/2">
        <div class="">
          <label class="label-form" for="password"
            >Contraseña
            <input type="password" bind:value={password} class="input-form" />
          </label>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="mt-4 sm:mt-0">
          <label class="label-form" for="conPassword"
            >Confirmar Contraseña
            <input
              type="password"
              bind:value={conPassword}
              class="input-form"
            />
          </label> -->
    <!-- {#if !isEqualPassword(password, conPassword)}
            <p class="text-xs italic text-gray-600">
              Las contraseñas no son iguales
            </p>
          {/if} -->
    <!-- </div>
      </div>
    </div> -->
    <!-- <div class="">
      <label class="label-form" for="email"
        >6. Correo eléctronico
        <input type="email" bind:value={email} class="lowercase input-form" />
      </label>
    </div> -->
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
