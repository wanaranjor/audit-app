<script>
  import FormUser from "../../components/admin/ui/FormUser.svelte";
  import NavBarLeft from "./../../components/shared/ui/NavBarLeft.svelte";
</script>

<section class="flex flex-row flex-grow h-full">
  <div class="flex flex-col items-center justify-start my-3 w-14">
    <NavBarLeft />
  </div>
  <div class="flex flex-col-reverse w-full sm:flex-row">
    <div class="flex flex-row justify-start pr-5 my-3 sm:w-3/4">
      <div class="w-1/2">
        <FormUser />
      </div>
      <div />
    </div>
    <div class="flex flex-col my-3 sm:w-1/4 sm:pr-3">..</div>
  </div>
</section>
