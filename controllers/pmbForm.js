const axios = require('./axios');

exports.getPmbForm = (req, res, next) => {
    if (typeof req.session.username === 'undefined') {
      const resClient = axios.postClientAPI();
      resClient.then(dataClient => {
        const token = dataClient.data.client.token;
        const resUser = axios.postLoginUser(token);
        req.session.token = token;
        resUser.then(dataUser => {
          const username = '000' + Object.values(dataUser)[2];
          req.session.username = username;
          inputFormData(username, token, '1', res, req)
        })
      }).catch(err => console.log(err))
    } else {  
      if (req.params.page) {
        inputFormData(req.session.username, req.session.token, req.params.page, res, req)
      } else {
        inputFormData(req.session.username, req.session.token, '1', res, req)
      }
    }
    
};

inputFormData = (username, token, page, res, req) => {
  const resGetForm = axios.getAllFormulir(username, token, page);  
  resGetForm.then(dataForm => {
    let arr = [];
    Object.entries(dataForm.result.data).forEach(([key, value]) => {
      arr[key] = value;
    }) 
    let links = [];
    Object.entries(dataForm.result.links).forEach(([key, value]) => {
      if (value != "pagination.next" || value != "pagination.previous") {
        links[key] = value;
      }
    })
    res.render('setup-pmb/pmb-form/index', {
      title: 'Setup PMB - PMB Formulir',
      dataForm: arr,
      data: [],
      session: req.session,
      links: links,
      message: req.flash('message'),
      layout: '../views/layouts/templates'
    });
  })
}

exports.addPmbForm = (req, res, next) => {
  const data = [];
  data['nama'] = req.body.nama;
  data['jmlPilihan'] = req.body.jmlPilihan;
  data['harga'] = req.body.harga;
  data['NA'] = req.body.NA;
  data['ket'] = req.body.ket;
  data['hanyaProdi1'] = req.body.hanyaProdi1;
  data['kecualiProdi1'] = req.body.kecualiProdi1;
  data['hanyaProdi2'] = req.body.hanyaProdi2;
  data['kecualiProdi2'] = req.body.kecualiProdi2;
  data['hanyaProdi3'] = req.body.hanyaProdi3;
  data['kecualiProdi3'] = req.body.kecualiProdi3;
  const resPostForm = axios.addFormulir(req.session.username, req.session.token, data);
  console.log(req.session.username);
  console.log(req.body.Y);

  resPostForm.then(dataForm => {
    req.flash('message', Object.values(dataForm)[1]);
    res.redirect('/setup-pmb/form');
  }).catch(err => console.log(err))
};

exports.editPmbForm = (req, res, next) => {
  const id = req.params.id;
  const data = [];
  data['nama'] = req.body.nama;
  data['jmlPilihan'] = req.body.jmlPilihan;
  data['harga'] = req.body.harga;
  data['NA'] = req.body.NA;
  data['ket'] = req.body.ket;
  data['hanyaProdi1'] = req.body.hanyaProdi1;
  data['kecualiProdi1'] = req.body.kecualiProdi1;
  data['hanyaProdi2'] = req.body.hanyaProdi2;
  data['kecualiProdi2'] = req.body.kecualiProdi2;
  data['hanyaProdi3'] = req.body.hanyaProdi3;
  data['kecualiProdi3'] = req.body.kecualiProdi3;
  const resPostForm = axios.editFormulir(req.session.username, req.session.token, data, id);

  resPostForm.then(dataForm => {
    req.flash('message', Object.values(dataForm)[1]);
    res.redirect('/setup-pmb/form');
  }).catch(err => console.log(err))
};

exports.deletePmbForm = (req, res, next) => {
  const id = req.params.id;
  const resDeleteForm = axios.deleteFormulir(req.session.username, req.session.token, id);

  resDeleteForm.then(data => {
    req.flash('message', Object.values(data)[1]);
    res.redirect('/setup-pmb/form');
  }).catch(err => console.log(err))
};


// exports.getAddComment = (req, res, next) => {
//   res.render('comment/add-comment', {
//     pageTitle: 'Add Comment'
//   });
// };

// exports.postAddComment = (req, res, next) => {
//   const today = getCurrentDate();
//   const content = req.body.content;
//   const comment = new Comment({
//     date: today,
//     content,
//     userId: req.user._id
//   });
//   comment
//     .save()
//     .then(result => {
//       console.log(today, `Comment created. Date: ${today}. Content: ${content}`);
//       res.redirect('/display-comments');
//     })
//     .catch(err => handleError(err));
// };



// exports.getEditComment = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const commentId = req.params.commentId;
//   Comment.findById(commentId)
//     .then(comment => {
//       if (!comment) {
//         return res.redirect('/');
//       }
//       res.render('comment/edit-comment', {
//         pageTitle: 'Edit Comment',
//         editing: editMode,
//         comment
//       });
//     })
//     .catch(err => handleError(err));
// };

// exports.postEditComment = (req, res, next) => {
//   const today = getCurrentDate();
//   const commentId = req.body.commentId;
//   const updatedContent = req.body.content;
//   Comment.findById(commentId)
//     .then(comment => {
//       if (comment.userId.toString() !== req.user._id.toString()) {
//         return res.redirect('/');
//       }
//       comment.content = updatedContent;
//       comment.editDate = today;
//       return comment.save()
//         .then(result => {
//           console.log(today, `Comment edited. Edit Date: ${today}. Content: ${updatedContent}`);
//           res.redirect('/display-comments');
//         })
//         .catch(err => handleError(err));
//     })
//     .catch(err => handleError(err));
// };


// exports.postDeleteComment = (req, res, next) => {
//   const commentId = req.body.commentId;
//   Comment.deleteOne({
//       _id: commentId,
//       userId: req.user._id
//     })
//     .then(() => {
//       console.log(`Comment with id ${commentId} has been deleted.`);
//       res.redirect('/display-comments');      
//     })
//     .catch(err => handleError(err));
// };