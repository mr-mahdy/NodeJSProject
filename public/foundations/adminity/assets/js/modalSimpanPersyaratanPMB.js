  'use strict';
$(document).ready(function () {
//Basic alert

// simpan persyaratan
	document.querySelector('.simpan-persyaratanPMB').onclick = function(){
		swal("PERSYARATAN TELAH DISIMPAN!", "klik OK untuk Kembali", "success");
	};

	document.querySelector('.hapus-persyaratanPMB').onclick = function(){
		swal({
					title: "HAPUS PERSYARATAN?",
					text: "",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "YA",
					closeOnConfirm: false
				},
				function(){
					swal("PERSYARATAN DIHAPUS!", "Persyaratan yang dipilih telah dihapus, KLIK OK Untuk Kembali.", "success");
				});
	};
// END simpan persyaratan

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
  