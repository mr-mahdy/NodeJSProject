'use strict';
$(document).ready(function () {
//Basic alert


// UPLOAD FILE BERHASIL
	document.querySelector('.jual-formulir').onclick = function(){
		swal({
					title: "SIMPAN FORMULIR?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("FORMULIR BERHASIL DISIMPAN", "KLIK OK Untuk Kembali.", "success");
				});
	};
// END DATA POERIODE

// batalkan kwitansi
	document.querySelector('.batalkan-kwitansi').onclick = function(){
		swal({
					title: "BATALKAN KWITANSI?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("KWITANSI TELAH DIBATALKAN!", "Kwitansi yang dipilih telah dibatalkan, KLIK OK Untuk Kembali.", "success");
				});
	};
// END batalkan kwitansi

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
  