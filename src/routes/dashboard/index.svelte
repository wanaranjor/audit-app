<script>
  import { onMount } from "svelte";
  import CardEmpresas from "../../components/admin/ui/CardEmpresas.svelte";
  import FormUser from "../../components/admin/ui/FormUser.svelte";
  import { getEmpresas } from "./../../components/admin/services/admin.services.js";
  import NavBarLeft from "./../../components/shared/ui/NavBarLeft.svelte";

  let listEmpresas = [];

  onMount(async () => {
    listEmpresas = await getEmpresas();
  });

  const handleUpdate = async () => (listEmpresas = await getEmpresas());
</script>

<section class="flex flex-row flex-grow h-full">
  <div class="flex flex-col items-center justify-start my-3 w-14">
    <NavBarLeft />
  </div>
  <div class="flex flex-col w-full sm:flex-row">
    <div class="flex flex-col my-3 sm:w-1/3 sm:pr-3">
      <FormUser on:updateListEmpresas={handleUpdate} />
    </div>
    <div class="flex flex-row justify-start pr-5 my-3 space-x-3 sm:w-2/3">
      <!-- <Empresas {listEmpresas} /> -->
      <CardEmpresas {listEmpresas} />
    </div>
  </div>
</section>
