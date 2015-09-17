

_.extend(UniUtils, {
    /**
     * Gets instance parent of current template it works everywhere where Template.instance() works
     * @param {string} templateName Name of template
     * @param {object=TemplateInstance} templateName Name of template
     */
    getParentTemplateInstance: function (templateName, currentTemplateInstance) {
        if (!/Template\..*/i.test(templateName)) {
            templateName = 'Template.' + templateName;
        }
        if (!currentTemplateInstance) {
            currentTemplateInstance = Template.instance();
        }
        if(!currentTemplateInstance){
            console.error('Missing current instance of template!');
            return;
        }
        var view = currentTemplateInstance.view;
        while (view && view.name !== templateName) {
            view = view.parentView;
        }
        return view && view.templateInstance();
    },

    /**
     * Gets instance of template by DOM element
     * useful when you need a template instance which is not your parent template
     * @param domElem DOM element
     */
    getTemplateInstanceByDOM: function (domElem) {
        if(_.isObject(domElem) && domElem instanceof jQuery){
            if(!domElem.length){
                return;
            }
            domElem = domElem[0];
        }
        if (domElem) {
            var view = Blaze.getView(domElem);
            var template = view && view.templateInstance && view.templateInstance();
            if(!template && view){
                while (view && !view.templateInstance) {
                    view = view.parentView;
                }
                template = view && view.templateInstance && view.templateInstance();
            }
            return template;
        }
    },
    /**
     * Clearing additional last object added by spacebars in template
     * @param param{*}
     * @returns {*}
     */
    clearSpacebarsKwObject: function(param){
        if(Match.test(param, Spacebars.kw)){
            return;
        }
        return param;
    }
});
