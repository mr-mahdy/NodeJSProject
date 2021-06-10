  'use strict';
$(document).ready(function () {
//Basic alert

// DATA PERIODE
	document.querySelector('.simpan-data-periode').onclick = function(){
		swal("DATA PERIODE TELAH DISIMPAN!", "klik OK untuk Kembali", "success");
	};

	document.querySelector('.hapus-data-periode').onclick = function(){
		swal({
					title: "HAPUS DATA PERIODE",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("DATA PERIODE DIHAPUS!", "Data yang dipilih telah dihapus, KLIK OK Untuk Kembali.", "success");
				});
	};
// END DATA POERIODE


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
  