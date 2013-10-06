define(['underscore', 'backbone', 'jquery',
        'library/CRMConst'], function(_, Backbone, $, CRMConst) {

    var CRMTemplate = Backbone.Model.extend({
        defaults: {
        },
        
        getSearchableMetas: function() {
            var that = this;
            
            var ret = {};
            
            var meta_metas = $.parseJSON(this.get("meta_metas"));
            for(idName in meta_metas) {
                var meta = meta_metas[idName];
                if (meta.type == CRMConst.FIELD_INPUT || meta.type == CRMConst.FIELD_TEXTAREA) {
                    ret[idName] = meta;
                }
            }
            
            return ret;
        }
    });
    
    return CRMTemplate;
});