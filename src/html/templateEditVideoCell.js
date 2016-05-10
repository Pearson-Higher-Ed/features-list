
var templateEditVideoCell = "";
templateEditVideoCell += "<div class=\"o-feature-cell-container video-wrapper\">";

templateEditVideoCell += "          <div class=\"o-feature-content-video\">";
templateEditVideoCell += "             <div class=\"o-feature-video\">";
templateEditVideoCell += "                   <iframe id=\"videoIframe\" width=\"560\" height=\"315\" src=\"{{disciplineVideoUrl}}\" frameborder=\"0\" allowfullscreen><\/iframe>";
templateEditVideoCell += "                 <input type=\"text\" id=\"videoLinkBox\" size=\"100\" class=\"o-feature-videoLink\" contenteditable>{{videoLink}}<\/input>";
templateEditVideoCell += "                    <div class=\"o-feature-img-border\">";
templateEditVideoCell += "                           <button id=\"videoCheckButton\" class=\"o-feature-check\" onclick=\"javascript:window.$featureComponent.prototype.CheckVideoUrl()\">Check<\/button>";
templateEditVideoCell += "                           <button id=\"videoSaveButton\" class=\"o-feature-save\" onclick=\"javascript:window.$featureComponent.prototype.SaveVideoUrl()\">Save video URL<\/button>";
templateEditVideoCell += "                           <button id=\"videoCancelButton\" class=\"o-feature-cancel\" onclick=\"javascript:window.$featureComponent.prototype.CancelVideoUrl()\">Cancel<\/button>";
templateEditVideoCell += "                     <\/div>";
templateEditVideoCell += "             <div class=\"o-feature-clearfix\"><\/div>";
templateEditVideoCell += "          <\/div>";
templateEditVideoCell += "          <div class=\"o-feature-clearfix\"><\/div>";
templateEditVideoCell += "          <div class=\"o-feature-button\">";
//templateEditVideoCell += "          <div class=\"o-feature-remove-button\" ><a class=\"o-feature-remove\" href=\"javascript:void(0);\"  onclick=\"javascript:window.$featureComponent.prototype.removeItem(\'{{contentId}}\',event)\">Remove<\/a><\/div>";
//templateEditVideoCell += "             <div class=\"o-feature-button-group\"> ";
//templateEditVideoCell += "                <button class=\"o-feature-cancel\" onclick=\"javascript:window.$featureComponent.prototype.CancelVideoItem(\'{{contentId}}\',event)\">Cancel<\/button>";
//templateEditVideoCell += "                <button class=\"o-feature-save\" onclick=\"javascript:window.$featureComponent.prototype.SaveVideoItem(\'{{contentId}}\',event)\">Save<\/button>";
//templateEditVideoCell += "          <\/div>";
templateEditVideoCell += "          <div class=\"o-feature-clearfix\"><\/div>";
templateEditVideoCell += "       <\/div>";

module.exports = templateEditVideoCell;