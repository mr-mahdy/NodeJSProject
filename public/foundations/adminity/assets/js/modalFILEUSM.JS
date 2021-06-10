'use strict';
$(document).ready(function () {
//Basic alert


// UPLOAD FILE BERHASIL
	document.querySelector('.upload-file').onclick = function(){
		swal({
					title: "PASTIKAN FILE YANG DIPILIH TELAH SESUAI?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("FILE USM BERHASIL DIUPLOAD", "KLIK OK Untuk Kembali.", "success");
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
  