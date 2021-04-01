<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import CloseFilled24 from "carbon-icons-svelte/lib/CloseFilled24";
  import { createEventDispatcher } from "svelte";
  import { isEmpty } from "../../../helpers/validators";
  import { addAuditoria } from "./../services/admin.services.js";

  export let empresaId;
  // import { getInfoModel } from "../../shared/services/shared.services";

  // const { session } = stores();
  // const { token } = $session.user.data;

  const dispatch = createEventDispatcher();

  // const MODEL = process.env.MODEL_AREA;

  // let areas = [];
  let nameAudit,
    description = "";

  // onMount(async () => {
  //   areas = await getInfoModel(MODEL, token);
  // });

  $: formIsValid = isEmpty(nameAudit) && isEmpty(description);

  const handleSubmit = async () => {
    if (formIsValid) {
      let result = await addAuditoria(nameAudit, description, empresaId);
      if (result === 200) {
        formIsValid = false;
        dispatch("updateListAudit");
        notifier.success(`Registro creado correctamente.`, 7000);
        nameAudit = "";
        description = "";
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

  const handleClose = () => {
    dispatch("closeBox");
  };
</script>

<NotificationDisplay />

<form
  class="w-full py-3 bg-white border rounded-lg px-7"
  on:submit|preventDefault={handleSubmit}
>
  <div class="flex justify-end">
    <button
      on:click={handleClose}
      class="text-sm font-semibold text-right text-blue-700 rounded-full"
      ><CloseFilled24 /></button
    >
  </div>
  <div class="flex flex-col">
    <div class="w-full mb-4">
      <label class="label-form" for="nameAudit">Nombre auditoría</label>
      <input type="text" bind:value={nameAudit} class="input-form" required />
    </div>

    <div class="w-full mb-4">
      <label class="label-form" for="description">Description </label>
      <input type="text" bind:value={description} class="input-form" required />
    </div>
  </div>
  <div class="flex flex-col">
    <button
      class={formIsValid ? "btn" : "btn opacity-50 cursor-not-allowed"}
      disabled={!formIsValid}
      type="submit">Crear</button
    >
  </div>
</form>
