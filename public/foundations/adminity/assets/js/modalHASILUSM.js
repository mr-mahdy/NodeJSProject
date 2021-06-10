  'use strict';
$(document).ready(function () {
//Basic alert


// PINDAHKAN KE HALAMAN 2
	document.querySelector('.pindahkan-halaman2').onclick = function(){
		swal({
					title: "PINDAHKAN PESERTA KE HALAMAN 2?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("PESERTA YANG TIDAK LULUS DI PRODI BERHASIL DIPINDAHKAN KE HALAMAN 2!", "KLIK OK Untuk Kembali.", "success");
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
  