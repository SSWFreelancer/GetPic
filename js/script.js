document.addEventListener('DOMContentLoaded', function(event) {
	var fileTop = document.querySelector('.main__filetop');
	var fileClose = document.querySelector('.main__close');
	if(fileTop){
	    fileTop.addEventListener('click', function(event) {
	    		fileTop.parentNode.classList.toggle('active');
	    });
	}
	if(fileClose){
	    fileClose.addEventListener('click', function(event) {
	    		if(fileTop){
	    			fileTop.parentNode.classList.toggle('active');
	    		}
	    		var searchInput = fileClose.previousElementSibling.querySelector('input');
	    		if(searchInput){
	    			searchInput.value = '';
	    		}

	    });
	}
	var gallery = document.querySelector('.card__gallery');
	var footer = document.querySelector('.footer');
	if(gallery){
	   function adjustGalleryHeight() {
	        var pageHeight = document.documentElement.scrollHeight;
	        if(footer){
	        	var footerHeight = footer.offsetHeight;
	        	var maxHeight = pageHeight - footerHeight - 175;
	        }else{
	        	var maxHeight = pageHeight - 175;
	        }
	        gallery.style.maxHeight = maxHeight + 'px';
	   }
	   adjustGalleryHeight();
	   window.addEventListener('resize', adjustGalleryHeight);
	}


	var dropContainer = document.querySelector('.main__file');
	var mainFilesContainer = document.querySelector('.main__files');
	var inputFile = document.querySelector('.main__filewrap input');
	var button = document.querySelector('.main__files-button');
	if(dropContainer){
		function readfiles(files) {
		  for (var i = 0; i < files.length; i++) {
		    var reader = new FileReader();
		    reader.onload = function(event) {
		      var img = document.createElement('img');
		      img.src = event.target.result;
		      var fileWrap = document.createElement('div');
		      fileWrap.classList.add('main__filewrap');
		      fileWrap.appendChild(img);
		      mainFilesContainer.insertBefore(fileWrap, button);
		      button.classList.add('changed');
		    }
		    reader.readAsDataURL(files[i]);
		  }
		}

		dropContainer.ondragover = function () { return false; };
		dropContainer.ondragend = function () { return false; };
		dropContainer.ondrop = function (e) {
		  e.preventDefault();
		  readfiles(e.dataTransfer.files);
		};

		inputFile.addEventListener('change', function(e) {
		  readfiles(e.target.files);
		});
	}


  const selects = document.querySelectorAll("select");
  if(selects){
	  selects.forEach(function (element) {
		  const choices = new Choices(element, {
		    placeholder: false,
		    placeholderValue: '', 		 
		    removeItemButton: true, 	
		    loadingText: 'Загрузка...',
		    noResultsText: 'Результаты не найдены',
		    noChoicesText: 'Нет вариантов на выбор',
		    itemSelectText: '',
		    uniqueItemText: 'Можно добавлять только уникальные значения',
		    customAddItemText: 'Можно добавлять только значения, соответствующие определенным условиям',
		    addItemText: (value) => {
		      return `Нажмите Enter, чтобы добавить <b>"${value}"</b>`;
		    },
		    maxItemText: (maxItemCount) => {
		      return `Только ${maxItemCount} элементов могуть быть добавлены`;
		    },
		  });			
	  });  	
	  const selInput = document.querySelector('input.choices__input');
	  if(selInput){
	  	selInput.setAttribute('placeholder', 'Выбрать  из списка')
	  }
  }

	var blockTop = document.querySelectorAll('.content__block-arrow, .content__block-top>p');
	if(blockTop){
		blockTop.forEach(function(blockTop) {
		    blockTop.addEventListener('click', function(event) {
		    		blockTop.parentNode.parentNode.classList.toggle('hide');
		    });
		});		
	}
	var asideMore = document.querySelectorAll('.aside__tags-more');
	if(asideMore){
		asideMore.forEach(function(asideMore) {
		    asideMore.addEventListener('click', function(event) {
		    	asideMore.parentNode.classList.toggle('active');
		    });
		});		
	}
  var body = document.querySelector('body');
  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		var body = document.querySelector('body');
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');

		    });
		});		
	}
});

