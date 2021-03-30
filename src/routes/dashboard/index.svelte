<script>
  import FormUser from "../../components/admin/ui/FormUser.svelte";
  import ListUsers from "../../components/admin/ui/ListUsers.svelte";
  import NavBarLeft from "./../../components/shared/ui/NavBarLeft.svelte";
</script>

<section class="flex flex-row flex-grow h-full">
  <div class="flex flex-col items-center justify-start my-3 w-14">
    <NavBarLeft />
  </div>
  <div class="flex flex-col w-full sm:flex-row">
    <div class="flex flex-col my-3 sm:w-1/3 sm:pr-3">
      <FormUser />
    </div>
    <div class="flex flex-row justify-start pr-5 my-3 space-x-3 sm:w-2/3">
      <ListUsers />
    </div>
  </div>
</section>
