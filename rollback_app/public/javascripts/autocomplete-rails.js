!function(t){t.fn.railsAutocomplete=function(){var e=function(){this.railsAutoCompleter||(this.railsAutoCompleter=new t.railsAutocomplete(this))};return void 0!==t.fn.on?t(document).on("focus",this.selector,e):this.live("focus",e)},t.railsAutocomplete=function(t){var e=t;this.init(e)},t.railsAutocomplete.fn=t.railsAutocomplete.prototype={railsAutocomplete:"0.0.1"},t.railsAutocomplete.fn.extend=t.railsAutocomplete.extend=t.extend,t.railsAutocomplete.fn.extend({init:function(e){function a(t){return t.split(e.delimiter)}function i(t){return a(t).pop().replace(/^\s+/,"")}e.delimiter=t(e).attr("data-delimiter")||null,e.min_length=t(e).attr("min-length")||2,e.append_to=t(e).attr("data-append-to")||null,e.autoFocus=t(e).attr("data-auto-focus")||!1,t(e).autocomplete({appendTo:e.append_to,autoFocus:e.autoFocus,delay:t(e).attr("delay")||0,source:function(a,n){var r=this.element[0],o={term:i(a.term)};t(e).attr("data-autocomplete-fields")&&t.each(t.parseJSON(t(e).attr("data-autocomplete-fields")),function(e,a){o[e]=t(a).val()}),t.getJSON(t(e).attr("data-autocomplete"),o,function(){0===arguments[0].length&&(arguments[0]=[],arguments[0][0]={id:"",label:"no existing match"}),t(arguments[0]).each(function(a,i){var n={};n[i.id]=i,t(e).data(n)}),n.apply(null,arguments),t(r).trigger("railsAutocomplete.source",arguments)})},change:function(e,a){if(t(this).is("[data-id-element]")&&""!==t(t(this).attr("data-id-element")).val()&&(t(t(this).attr("data-id-element")).val(a.item?a.item.id:""),t(this).attr("data-update-elements"))){var i=t.parseJSON(t(this).attr("data-update-elements")),n=a.item?t(this).data(a.item.id.toString()):{};if(i&&""===t(i.id).val())return;for(var r in i){var o=t(i[r]);o.is(":checkbox")?null!=n[r]&&o.prop("checked",n[r]):o.val(a.item?n[r]:"")}}},search:function(){var t=i(this.value);return t.length<e.min_length?!1:void 0},focus:function(){return!1},select:function(i,n){if(-1!=n.item.value.toLowerCase().indexOf("no match")||-1!=n.item.value.toLowerCase().indexOf("too many results"))return t(this).trigger("railsAutocomplete.noMatch",n),!1;var r=a(this.value);if(r.pop(),r.push(n.item.value),null!=e.delimiter)r.push(""),this.value=r.join(e.delimiter);else if(this.value=r.join(""),t(this).attr("data-id-element")&&t(t(this).attr("data-id-element")).val(n.item.id),t(this).attr("data-update-elements")){var o=n.item,l=-1!=n.item.value.indexOf("Create New")?!0:!1,u=t.parseJSON(t(this).attr("data-update-elements"));for(var s in u)"checkbox"===t(u[s]).attr("type")?o[s]===!0||1===o[s]?t(u[s]).attr("checked","checked"):t(u[s]).removeAttr("checked"):t(u[s]).val(l&&o[s]&&-1==o[s].indexOf("Create New")||!l?o[s]:"")}var c=this.value;return t(this).bind("keyup.clearId",function(){t.trim(t(this).val())!=t.trim(c)&&(t(t(this).attr("data-id-element")).val(""),t(this).unbind("keyup.clearId"))}),t(e).trigger("railsAutocomplete.select",n),!1}})}}),t(document).ready(function(){t("input[data-autocomplete]").railsAutocomplete()})}(jQuery);