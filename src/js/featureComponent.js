
var FeatureComponent = function () {};

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');






var Hogan = require('./hogan.js');

var intId = 1;
FeatureComponent.prototype.constants = {
    noOfElementsInARow: 2,
    newItem: [{
        "contentId": "newItem_"+intId,
        "displaySequence": 1,
        "primaryTitle": "Add Feature Title",
        "secondaryTitle": "Add Title",
        "description": "Add a short description for instructor that briefly describes the feature.",
        "studentDescription": "Add a short description for students that briefly describes the feature.",
        "resourceUrl": "",
        "ctaText":"Add Button Label",
        "ctaUrl": "https://www.sample.com",
        "appCTAs": [{
                "type": "mobile",
                "platformType": "iTunes",
                "ctaUrl": "https://www.apple.com/",
                "ctaText": "Launch iTunes",
                "ctaImageUrl": "http://www.tweaksoftware.com/products/rv/Applegreyicon.png"
            },{
            "type": "mobile",
            "platformType": "android",
            "ctaUrl": "https://www.android.com/",
            "ctaText": "Launch Adroid",
            "ctaImageUrl": "https://www.android.com/static/2016/img/apps-carousel/icons/hulu-plus_1x.png"
        }
        ]

    }]
};

FeatureComponent.prototype.FeatureData = function () {

    return {
        Data                : window.$featureData,
        FeatureBeingEdited  : window.$featureBeingEdited,
        Element             : window.$element,
        Options             : window.$options,
        Permissions         : window.$permissions
    }
};



FeatureComponent.prototype.init = function (options, data, element, permissions) {
    if (options.editMode) {
        document.getElementById("saveWatcher").value = false;
    }
    //console.log(data);
    //sorting features array based on display sequence
    if(data.contents)
    {
        data.contents =  data.contents.sort(function(a,b){ return parseInt(a.displaySequence)-parseInt(b.displaySequence) });
        var isStartedFromZero = false;
        for(var x = 0; x < data.contents.length; x++)
        {
            if(parseInt(data.contents[x].displaySequence) === 0)
            {
                isStartedFromZero = true;
                break;
            }
        }
        if(isStartedFromZero)
        {
            for(var y = 0; y < data.contents.length; y++)
            {
                data.contents[y].displaySequence =  parseInt(data.contents[y].displaySequence)+1;
            }
        }
        var hasDuplicateSequenceNumbersOrEmptyStrings = false;
        // check for duplicate sequence
        for(var z = 0; z < data.contents.length; z++)
        {
            for(var w = 0; w < data.contents.length; w++ )
            {
                if((data.contents[z].contentId !== data.contents[w].contentId) && (data.contents[z].displaySequence) && (data.contents[w].displaySequence) && (parseInt(data.contents[z].displaySequence) === parseInt(data.contents[w].displaySequence)))
                {
                    hasDuplicateSequenceNumbersOrEmptyStrings = true;
                }
            }
        }
        if(hasDuplicateSequenceNumbersOrEmptyStrings)
        {
            for(var p = 0; p < data.contents.length; p++ ) {
                data.contents[p].displaySequence =  p+1;
            }

        }

    }
    // Disable Make Live button if no features
    if (data.contents.length === 0) {
        if (options.editMode) {
            document.getElementById("makeLiveBtn").disabled = true;
        }
    }
    var mobileFeatureFound = false;
    var androidURL = '', appleURL = '', mobileDateIndex = -1;
    var androidURLImage = '', appleURLImage = '';
    // Initial loop to identify appCTA section availability
    for (var i = 0; i < data.contents.length; i++) {
        if(!mobileFeatureFound) {
            if (!(data.contents[i].appCTAs === undefined || data.contents[i].appCTAs.length == 0)) {
                mobileFeatureFound = true;
                mobileDateIndex = i;
                for(var j=0; j < data.contents[i].appCTAs.length; j++){
                    if(data.contents[i].appCTAs[j].platformType === "android"){
                        androidURL = data.contents[i].appCTAs[j].ctaUrl;
                        androidURLImage = data.contents[i].appCTAs[j].ctaImageUrl;
                    }
                    else if(data.contents[i].appCTAs[j].platformType === "iTunes"){
                        appleURL = data.contents[i].appCTAs[j].ctaUrl;
                        appleURLImage = data.contents[i].appCTAs[j].ctaImageUrl;
                    }

                }
            }
        }
    }

    if(mobileDateIndex > -1){
        data.contents.unshift(data.contents[mobileDateIndex]);
        data.contents.splice(mobileDateIndex, 1);
    } else if(data.featureType === 'PRODUCT_MODEL') {
        data.contents.unshift({
            "displaySequence": "1",
            "primaryTitle": "Student Description - Pl",
            "secondaryTitle": "",
            "description": "La De Da",
            "resourceUrl": "",
            "ctaText": "Video LInk",
            "ctaUrl": "",
            "studentDescription": "Do Re Me",
            "appCTAs": [{
                "type": "mobile",
                "platformType": "iTunes",
                "ctaUrl": "https://www.apple.com/",
                "ctaText": "Launch iTunes",
                "ctaImageUrl": "http://www.tweaksoftware.com/products/rv/Applegreyicon.png"
            },
                {
                "type": "mobile",
                "platformType": "android",
                "ctaUrl": "https://www.android.com/",
                "ctaText": "Launch Adroid",
                "ctaImageUrl": "https://www.android.com/static/2016/img/apps-carousel/icons/hulu-plus_1x.png"
            }]
        })
    }

    for (var i = 0; i < data.contents.length; i++) {
        data.contents[i].hasCTA = true;
        data.contents[i].hasImage = true;
        if(i === 0 && data.featureType === 'PRODUCT_MODEL'){
            data.contents[i].displayMobileFeature = "display-mobile-feature";
            data.contents[i].hideFeature = "hide-feature";
            data.contents[i].iTunesDownloadUrl = appleURL;
            data.contents[i].androidDownloadUrl = androidURL;
            data.contents[i].appleImage = appleURLImage;
            data.contents[i].androidImage = androidURLImage;
        } else {
            data.contents[i].displayMobileFeature = "hide-mobile-feature";
        }
        if (data.contents[i].ctaUrl === undefined || data.contents[i].ctaUrl === '') {
            data.contents[i].ctaText = "Add Button Label";
            data.contents[i].ctaUrl = '';
            data.contents[i].hasCTA = false;
        }
        if (data.contents[i].resourceUrl === undefined || data.contents[i].resourceUrl === '') {
            data.contents[i].resourceUrl = '';
            data.contents[i].hasImage = false;
        }
        if(data.contents[i].studentDescription === undefined || data.contents[i].studentDescription === ''){
            data.contents[i].studentDescription = '';
        }
        data.contents[i].testDisplay = 'hide-mobile-feature-empty';

    }

    this.element = element;
    if (options.editMode) {
        window.$featureData = data;
        window.$featureData.featureEdited = false;
    }
    var _compiledTemplate = this._prepareTemplate(data, options);
    document.getElementById(element).appendChild(_compiledTemplate);

    // bind event if appopriate edit rights available
    if (options.editMode && permissions.Update) {
        FeatureComponent.prototype.addEventListenerToOverlay(document.getElementsByClassName('o-feature-overlay'));
    }

    FeatureComponent.prototype.HandlePermissions(permissions,data);



    window.$featureBeingEdited  = null;
    window.$element             = element;
    window.$options             = options;
    window.$permissions         = permissions;
    return this;
};

FeatureComponent.prototype.HandlePermissions = function(permissions,data)
{
    // handle feature remove rights
    if(!permissions.Delete)
    {
        for(var j = 0; j < data.contents.length; j++)
        {
            var removeFeatureContainers = [];
            removeFeatureContainers = document.getElementsByClassName('o-feature-remove-button');
            for(var i = 0; i <  removeFeatureContainers.length; i++)
            {
                removeFeatureContainers[i].remove();
            }
        }
    }

    //handling edit rights
    if(!permissions.Update)
    {
        var removeFeatureContainers = [];
        removeFeatureContainers = document.getElementsByClassName('o-feature-remove-button');
        for(var i = 0; i <  removeFeatureContainers.length; i++)
        {
            removeFeatureContainers[i].remove();
        }
        // remove overlays if Edit rights not present
        FeatureComponent.prototype.RemoveOverlays(data.contents.length);
    }

}

FeatureComponent.prototype.RemoveOverlays = function(iterations){

    for(var x = 0; x < iterations; x++)
    {
        var overlays =  [];
        overlays =  document.getElementsByClassName('o-feature-overlay');
        for(var i = 0; i <  overlays.length; i++)
        {
            overlays[i].remove();
        }
    }

};


FeatureComponent.prototype.addNew = function () {
    document.getElementById("makeLiveBtn").disabled = false; //Enable Make Live button
    var newFeature = JSON.parse(JSON.stringify(FeatureComponent.prototype.constants.newItem));
    newFeature[0].displaySequence = window.$featureData.contents.length+1;
    newFeature[0].contentId = "newItem_" + intId;
    newFeature[0].displayMobileFeature = 'hide-mobile-feature';
    //this.parentNode.insertBefore(_cell, this.nextSibling);
    var node;
    if (window.$featureData.contents.length == 0) {
        node = document.getElementById('testId');

        var _compiledTemplate = this._prepareTemplate({contents:newFeature}, {
            editMode: true
        });
        node.appendChild(_compiledTemplate);
        FeatureComponent.prototype._addEventListenerToNode(_compiledTemplate.getElementsByClassName('o-feature-overlay')[0]);
    } else {
        var _cell = document.createElement('article');
        _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');

        _cell.innerHTML = Hogan.compile(templateEditCell).render(newFeature[0]);
        var itemId = window.$featureData.contents[window.$featureData.contents.length - 1].contentId;
        node = document.getElementById('feature_' + itemId);
        node.parentNode.parentNode.insertBefore(_cell, null);

        FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
    }
    // FeatureComponent.prototype.setDisplaySequence();
    newFeature[0].displayMobileFeature = 'hide-mobile-feature';

    window.$featureData.contents.push(newFeature[0]);
    intId += 1;
    FeatureComponent.prototype.HandlePermissions(window.$permissions,window.$featureData);
};


FeatureComponent.prototype.removeItem = function (item, event) {

    if (confirm("Do you want to remove this item?") == true){

        //this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode);
        document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
        window.$featureData.featureEdited = false; // Enable edit to other feature components
        document.getElementById("saveWatcher").value = true;

        for (var i = 0; i < window.$featureData.contents.length; i++) {
            if (window.$featureData.contents[i].contentId === item) {
                window.$featureData.contents.splice(i, 1);
            }
        }
        FeatureComponent.prototype.setDisplaySequence();
        var dom = document.getElementById(window.$element);
        dom.innerHTML = '';
        FeatureComponent.prototype.init(window.$options,window.$featureData,window.$element,window.$permissions);
        if (window.$featureData.contents.length === 0) {
                document.getElementById("makeLiveBtn").disabled = false;
        }
    }
};


FeatureComponent.prototype.saveItem = function (item, event) {

    console.log('came to save data');
    console.log(item);

    var node = document.getElementById('feature_' + item); //= event.target.parentNode.parentNode.parentNode
    var isValid = true;
    console.log(node);
    var newItem = FeatureComponent.prototype._validateItem(node);
    console.log(newItem);
    if (newItem !== null) {
        console.log('came to save data not null');
        newItem.contentId = item;
        for (var i = 0; i < window.$featureData.contents.length; i++) {

            if (window.$featureData.contents[i].contentId === item) {
                window.$featureData.contents[i] = newItem;
            }
        }
        document.getElementById("saveWatcher").value = true;
        // FeatureComponent.prototype.setDisplaySequence();
        document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
        window.$featureData.featureEdited = false; // Enable edit to other feature components
    } else {
        console.log('came to save data null');
        node.className += ' ' + 'o-feature-editable-content';
    }
    console.log('came to save data all done');
};
FeatureComponent.prototype.setDisplaySequence = function () {
    for (var i = 0; i < window.$featureData.contents.length; i++) {
        window.$featureData.contents[i].displaySequence = i+1;
    }
};
FeatureComponent.prototype._validateItem = function(node){

    var newFeature = JSON.parse(JSON.stringify(FeatureComponent.prototype.constants.newItem[0]));
    var urlRegex = /(https):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    newFeature.primaryTitle =      node.getElementsByClassName('o-feature-brand')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.secondaryTitle =    node.getElementsByClassName('o-feature-title')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.description =       node.getElementsByClassName('o-feature-description-inst')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.studentDescription =       node.getElementsByClassName('o-feature-description-stud')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.resourceUrl =       node.getElementsByClassName('o-feature-img-src')[0].value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.ctaText =           node.getElementsByClassName('o-feature-action-button')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.ctaUrl =            node.getElementsByClassName('o-feature-action-url')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.displaySequence =   node.getElementsByClassName('o-feature-sort-input')[0].value;

    // Grab mobile properties
    //newFeature.appCTAs[0]. = o-itunes-download-url;
    newFeature.appCTAs[0].ctaUrl = node.getElementsByClassName('o-itunes-download-url')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.appCTAs[0].ctaImageUrl = node.getElementsByClassName('o-feature-app-store')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.appCTAs[1].ctaUrl = node.getElementsByClassName('o-android-download-url')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    newFeature.appCTAs[1].ctaImageUrl = node.getElementsByClassName('o-feature-g-play')[0].textContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    console.log('came to validate ' + newFeature.appCTAs[0].ctaImageUrl);

    ////validation logics
    if (newFeature.primaryTitle.trim().length == 0) {
        alert("Feature Title is Mandatory");
        return null;
    }
    if (newFeature.secondaryTitle.trim().length == 0) {
        alert("Title is Mandatory");
        return null;
    }
    if (newFeature.description.trim().length == 0 && newFeature.studentDescription.trim().length == 0) {
        alert("Student or Instructor Description is Mandatory ");
        return null;
    }
    if ((newFeature.ctaUrl.trim().length != 0) && (!urlRegex.test(newFeature.ctaUrl.trim()))) {
        alert("Invalid CTA URL");
        return null;
    }
    if ((newFeature.resourceUrl.trim().length != 0) && (!urlRegex.test(newFeature.resourceUrl.trim()))) {
        alert("Invalid Image URL"); // Image or Resource??
        return null;
    }

        console.log(newFeature);
    return newFeature;
};







FeatureComponent.prototype.CheckVideoUrl = function () {
    var url =  document.getElementById('videoLinkBox').value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var urlRegex = /(https):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if ((url.trim().length != 0) && (!urlRegex.test(url.trim()))) {
        alert("Invalid Video URL!");
        return;
    }
    document.getElementById('videoIframe').src = url;

};

FeatureComponent.prototype.cancelItem = function (item,event) {
    var node = event.target.parentNode.parentNode.parentNode;

    if (node.classList.contains('o-feature-editable-content')) {
        node.classList.remove('o-feature-editable-content');
        node.getElementsByClassName('o-feature-img-border')[0].className = node.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');

    }
    for(var i = 0; i < window.$featureData.contents.length ; i++) {
        if(window.$featureData.contents[i].contentId ===item){
            node.getElementsByClassName('o-feature-brand')[0].textContent = window.$featureData.contents[i].primaryTitle;
            node.getElementsByClassName('o-feature-title')[0].textContent = window.$featureData.contents[i].secondaryTitle;
            node.getElementsByClassName('o-feature-description-inst')[0].textContent = window.$featureData.contents[i].description;
            node.getElementsByClassName('o-feature-description-stud')[0].textContent = window.$featureData.contents[i].studentDescription;
            node.getElementsByClassName('o-feature-img-src')[0].value = window.$featureData.contents[i].resourceUrl;
            node.getElementsByClassName('o-feature-action-button')[0].textContent = window.$featureData.contents[i].ctaText;
            node.getElementsByClassName('o-feature-action-url')[0].textContent = window.$featureData.contents[i].ctaUrl;
            node.getElementsByClassName('o-feature-sort-input')[0].value = window.$featureData.contents[i].displaySequence;
        }
    }

    document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
    window.$featureData.featureEdited = false; // Enable edit to other feature components
    window.$featureBeingEdited = null;
};

FeatureComponent.prototype.addEventListenerToOverlay = function (nodeList) {
    for(var i = 0; i <nodeList.length ; i++) {
        FeatureComponent.prototype._addEventListenerToNode(nodeList[i]);
    }
};

FeatureComponent.prototype.ReorderFeatures = function(editedFeature,features,savedFeature)
{
    if(parseInt(savedFeature.displaySequence) === parseInt(window.$featureBeingEdited.displaySequence)) {
        // do nothing sequence no is not change
    }
    else {

        if((features.contents.length) < savedFeature.displaySequence) {

            features.contents[features.contents.length-1].displaySequence = parseInt(window.$featureBeingEdited.displaySequence);
            for(var i = 0; i < features.contents.length; i++)
            {
                if(savedFeature.contentId == features.contents[i].contentId)
                {
                    features.contents[i].displaySequence =  parseInt(features.contents.length);
                }
            }
        }
        else {

            for(var i = 0; i < features.contents.length; i++)
            {
                if((parseInt(savedFeature.displaySequence) === parseInt(features.contents[i].displaySequence)) && (window.$featureBeingEdited.contentId !== features.contents[i].contentId))
                {
                    features.contents[i].displaySequence = parseInt(window.$featureBeingEdited.displaySequence);
                }
            }
        }
    }
    var dom = document.getElementById(window.$element);
    dom.innerHTML = '';
    window.$featureData.contents = JSON.parse(JSON.stringify(features.contents));
    FeatureComponent.prototype.init(window.$options,window.$featureData,window.$element,window.$permissions);
}

FeatureComponent.prototype._addEventListenerToNode = function (node) {
    node.addEventListener('click', function () {
        //Check if any other feature components are in edit mode
        if(window.$featureData.featureEdited == false){
            document.getElementById("makeLiveBtn").disabled = true; // Disable Make Live button
            if (this.parentNode.className.indexOf('o-feature-editable-content') == -1) {
                this.parentNode.className += ' ' + 'o-feature-editable-content';
                window.$featureData.featureEdited = true;// Disable edit to other feature components
                var _beingEditedFeatureID = this.parentNode.getAttribute('id').replace('feature_','');
                for(var x = 0; x < window.$featureData.contents.length; x++)
                {
                    if(_beingEditedFeatureID === window.$featureData.contents[x].contentId)
                    {
                        window.$featureBeingEdited = window.$featureData.contents[x];
                    }
                }

            }
        }
    });
    node.parentNode.getElementsByClassName('o-feature-save')[0].addEventListener('click', function () {
        if(parseInt(this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-sort-input')[0].value) >= 0){
            this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className.replace(' o-feature-editable-content', '');
            this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className = this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
            var _featureContentID = this.parentNode.parentNode.parentNode.getAttribute( 'id' ).replace('feature_','');
            var _savedFeature = null;
            for(var x = 0; x < window.$featureData.contents.length; x++)
            {
                if(_featureContentID === window.$featureData.contents[x].contentId)
                {
                    _savedFeature = window.$featureData.contents[x];
                }
            }
            FeatureComponent.prototype.ReorderFeatures(_featureContentID,JSON.parse(JSON.stringify(window.$featureData)),_savedFeature);
            window.$featureBeingEdited = null;
        }
    });
    //node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("img")[0].addEventListener('click', function () {
    //    if(this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
    //        this.parentNode.className +=  ' '+ 'o-feature-img-border-edit';
    //    }
    //});
    node.parentNode.getElementsByClassName('o-feature-mobile-img')[0].getElementsByTagName("a")[0].addEventListener('click', function (args) {
        FeatureComponent.prototype.imageEditMode(args, this);
    });

    node.parentNode.getElementsByClassName('o-feature-app-store')[0].getElementsByTagName("a")[0].addEventListener('click', function (args) {
        FeatureComponent.prototype.imageEditMode(args, this);
    });

    node.parentNode.getElementsByClassName('o-feature-google-play')[0].getElementsByTagName("a")[0].addEventListener('click', function (args) {
        FeatureComponent.prototype.imageEditMode(args, this);
    });
    node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("a")[0].addEventListener('click', function (args) {

        var linkId = args.target.id;
        if (args.target.innerHTML == 'Change Image') {
            document.getElementById(linkId).innerHTML = 'Done';
            if (this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
                this.parentNode.className += ' ' + 'o-feature-img-border-edit';
            }
        }else if (args.target.innerHTML == 'Done') {
            document.getElementById(linkId).innerHTML = 'Change Image';
            var perentNode = document.getElementById(linkId).parentNode;
            var newUrl = perentNode.getElementsByTagName('textarea')[0].value;
            perentNode.getElementsByTagName('img')[0].src = newUrl;
            if (this.parentNode.className.indexOf('o-feature-img-border-edit') > -1) {
                this.parentNode.classList.remove("o-feature-img-border-edit");
            }
        }
    });
    node.parentNode.getElementsByClassName('o-feature-remove')[0].addEventListener('click', function () {


        //this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode);
        //document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
        //window.$featureData.featureEdited = false; // Enable edit to other feature components
        //document.getElementById("saveWatcher").value = true;

    });
};

FeatureComponent.prototype._prepareTemplate = function (data, options) {

    var _output = document.createElement('section');
    _output.setAttribute('class','o-feature-main');

    var _previous_row = document.createElement('section');
    _previous_row.setAttribute('class','o-feature-row');

    var _addCellAdded = false;

    var _row = document.createElement('section');
    if (options.editMode) {
        _row.setAttribute('class','o-feature-row o-feature-row-edit');
    } else {
        _row.setAttribute('class','o-feature-row o-feature-published');
    }




    //_row.appendChild(_cell);
    _previous_row = _row;

    for (var cellCount = 0; cellCount < data.contents.length; cellCount++) {
        var _cell = '';
        _cell = document.createElement('article');
        if (options.editMode) {

            _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');
            _cell.innerHTML = Hogan.compile(templateEditCell).render(data.contents[cellCount]);
        } else if(options.applications) {
            // _cell = document.createElement('article');
            _cell.setAttribute('class','o-feature-cell o-feature-cell-apps');
            _cell.innerHTML = Hogan.compile(template).render(data.contents[cellCount]);
            /*var apps = _cell.querySelectorAll("article.o-feature-cell");
            for(var i=0;i<apps.length;i++){
                apps[i].className += " o-feature-cell-app";
            }*/
            var imgs = _cell.querySelectorAll("img.o-feature-img");
            for(var i=0;i<imgs.length;i++){
                imgs[i].className += " o-feature-img-app";
            }
        }else{
            _cell.setAttribute('class','o-feature-cell');
            _cell.innerHTML = Hogan.compile(template).render(data.contents[cellCount]);
        }

        _row.appendChild(_cell);
        _previous_row = _row;

        if (cellCount == data.contents.length - 1) {
            _output.appendChild(_previous_row);
        }
    }


    return _output;
};

var defaults = {
    editMode: false
};

FeatureComponent.prototype.triggerAddNew = function () {
    var element = document.getElementById(this.element);
    var cellArray = element.getElementsByClassName('o-feature-cell');
    for (var i = cellArray.length - 1; i >= 0; i--) {
        var childNode = cellArray[i];
        FeatureComponent.prototype._insertAddNew(childNode);

    };
};

FeatureComponent.prototype._insertAddNew = function (childNode) {
    var clearfixElement = document.createElement('div');
    clearfixElement.setAttribute('class', 'o-feature-clearfix');

    var addNewElement = document.createElement('div');
    addNewElement.setAttribute('class', 'o-feature-add-new-container');
    addNewElement.innerHTML = '<a class=\'o-feature-add-new-button\'> Add New + </a>';
    addNewElement.addEventListener('click', function () {
        var _cell = document.createElement('article');
        _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');

        _cell.innerHTML = Hogan.compile(templateEditCell).render(FeatureComponent.prototype.constants.newItem);
        this.parentNode.insertBefore(_cell,this.nextSibling);
        FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);

    });

    childNode.parentNode.insertBefore(addNewElement,childNode.nextSibling);
    childNode.parentNode.insertBefore(clearfixElement,childNode.nextSibling);
};

FeatureComponent.prototype.cancelMobileItem = function (item,event) {
    var node = event.target.parentNode.parentNode.parentNode.parentNode;

    if (node.classList.contains('o-feature-editable-content')) {
        node.classList.remove('o-feature-editable-content');
        node.getElementsByClassName('o-feature-mobile-img')[0].className = node.getElementsByClassName('o-feature-mobile-img')[0].className.replace('o-feature-img-border-edit', '');
        node.getElementsByClassName('o-feature-app-store')[0].className = node.getElementsByClassName('o-feature-app-store')[0].className.replace('o-feature-img-border-edit', '');
        node.getElementsByClassName('o-feature-google-play')[0].className = node.getElementsByClassName('o-feature-google-play')[0].className.replace('o-feature-img-border-edit', '');
    }
    for(var i = 0; i < window.$featureData.contents.length ; i++) {
        if(window.$featureData.contents[i].contentId ===item){
            node.getElementsByClassName('o-feature-brand')[0].textContent = window.$featureData.contents[i].primaryTitle;
            node.getElementsByClassName('o-feature-title')[0].textContent = window.$featureData.contents[i].secondaryTitle;
            node.getElementsByClassName('o-feature-description-inst')[0].textContent = window.$featureData.contents[i].instructorDescription;
            node.getElementsByClassName('o-feature-description-stud')[0].textContent = window.$featureData.contents[i].studentDescription;
            node.getElementsByClassName('o-itunes-download-url')[0].textContent = window.$featureData.contents[i].iTunesDownloadUrl;
            node.getElementsByClassName('o-android-download-url')[0].textContent = window.$featureData.contents[i].androidDownloadUrl;
        }
    }

    //document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
    window.$featureData.featureEdited = false; // Enable edit to other feature components
    window.$featureBeingEdited = null;
};


FeatureComponent.prototype.imageEditMode = function (args, item) {
    var linkId = args.target.id;
    if (args.target.innerHTML == 'Change Image') {
        document.getElementById(linkId).innerHTML = 'Done';
        if (item.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
            item.parentNode.className += ' ' + 'o-feature-img-border-edit';
        }
    }else if (args.target.innerHTML == 'Done') {
        document.getElementById(linkId).innerHTML = 'Change Image';
        var perentNode = document.getElementById(linkId).parentNode;
        var newUrl = perentNode.getElementsByTagName('textarea')[0].value;
        perentNode.getElementsByTagName('img')[0].src = newUrl;
        if (item.parentNode.className.indexOf('o-feature-img-border-edit') > -1) {
            item.parentNode.classList.remove("o-feature-img-border-edit");
        }
    }
};

module.exports = FeatureComponent;
