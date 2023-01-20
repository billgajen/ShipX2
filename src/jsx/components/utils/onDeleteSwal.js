import swal from "sweetalert";

export const onDeleteSwal = (deleteFileName, deleteFunction) => {
  swal({
    title: "Are you sure?",
    text: `Once deleted, you will no longer see this ${deleteFileName}`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      deleteFunction();
      swal("Poof! Your file is deleted!", {
        icon: "success",
      });
    } else {
      swal(`Your ${deleteFileName} is safe!`);
    }
  });
};
