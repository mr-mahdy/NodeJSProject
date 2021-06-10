  'use strict';
$(document).ready(function () {
//Basic alert

// KOMPONEN USM
	document.querySelector('.simpan-komponenUSM').onclick = function(){
		swal("DATA USM TELAH DISIMPAN!", "klik OK untuk Kembali", "success");
	};

	document.querySelector('.hapus-komponenUSM').onclick = function(){
		swal({
					title: "HAPUS DATA USM?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("DATA USM DIHAPUS!", "Data yang dipilih telah dihapus, KLIK OK Untuk Kembali.", "success");
				});
	};
// END KOMPONEN USM

		$('#openBtn').on('click',function () {
			$('#myModal').modal({
				show: true
			})
		});

		$(document).on('show.bs.modal', '.modal', function (event) {
			var zIndex = 1040 + (10 * $('.modal:visible').length);
			$(this).css('z-index', zIndex);
			setTimeout(function() {
				$('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
			}, 0);
		});
	});
  