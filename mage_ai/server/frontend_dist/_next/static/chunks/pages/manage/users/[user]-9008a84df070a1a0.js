(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4496],{84392:function(e,r,n){"use strict";n.d(r,{HF:function(){return s},L6:function(){return t}});var t,o=n(81132),u=n(10503),i=n(9736);function s(e,r){var n=e.owner,s=e.roles,c=[{Icon:u.Vz,id:t.WORKSPACES,isSelected:function(){return t.WORKSPACES===r},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}];return(n||s===o.No.ADMIN)&&c.push({Icon:u.NO,id:t.USERS,isSelected:function(){return t.USERS===r},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),(!(0,i.YB)()||s<=o.No.EDITOR)&&c.push({Icon:u.Zr,id:t.SETTINGS,isSelected:function(){return t.SETTINGS===r},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),c}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(t||(t={}))},3849:function(e,r,n){"use strict";n(82684);var t=n(1210),o=n(49125),u=n(84392),i=n(9736),s=n(28598);r.Z=function(e){var r=e.before,n=e.breadcrumbs,c=void 0===n?[]:n,a=e.children,l=e.pageName,d=e.subheaderChildren,v=(0,i.PR)()||{};return(0,s.jsx)(t.Z,{before:r,beforeWidth:r?50*o.iI:0,breadcrumbs:c,navigationItems:(0,u.HF)(v,l),subheaderChildren:d,title:"Workspaces",uuid:"workspaces/index",children:a})}},82702:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x}});var t=n(77837),o=n(38860),u=n.n(o),i=n(82684),s=n(34376),c=n(41788),a=n(86673),l=n(20582),d=n(75582),v=n(21831),f=n(82394),p=n(21764),m=n(83455),h=n(60328),b=n(55378),O=n(58180),S=n(19711),g=n(82531),w=n(24224),P=n(96510),_=n(28598);function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){(0,f.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var y=function(e){var r=e.fetchUser,n=e.user,t=e.workspaces,o=(0,i.useState)(),u=o[0],s=o[1];(0,i.useEffect)((function(){n&&s(n)}),[n]);var c=null===t||void 0===t?void 0:t.map((function(e){return e.repo_path})),l=g.ZP.roles.list({entity:"project",entity_ids:c},{},{}),j=l.data,y=(l.mutate,(0,i.useMemo)((function(){var e=(null===j||void 0===j?void 0:j.roles)||[];return null===e||void 0===e?void 0:e.reduce((function(e,r){var n=r.permissions[0].entity_id,t=e[n]||[];return k(k({},e),{},(0,f.Z)({},n,[].concat((0,v.Z)(t),[r])))}),{})}),[j])),Z=(0,i.useMemo)((function(){var e=u||n,r=null===e||void 0===e?void 0:e.roles_new;return null===r||void 0===r?void 0:r.reduce((function(e,r){var n,t,o=null===r||void 0===r||null===(n=r.permissions)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.entity_id;return k(k({},e),{},(0,f.Z)({},o,r))}),{})}),[u,n]),E=(0,m.Db)(g.ZP.users.useUpdate(null===n||void 0===n?void 0:n.id),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.user;p.Am.success("User roles successfully updated.",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),r()},onErrorCallback:function(e){var r=e.error,n=r.errors,t=r.exception,o=r.message,u=r.type;p.Am.error((null===n||void 0===n?void 0:n.error)||t||o,{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:u})}})}}),I=(0,d.Z)(E,2),N=I[0],T=I[1].isLoading;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(O.Z,{columnFlex:[1,1],columns:[{uuid:"Workspace"},{uuid:"Role"}],rows:null===t||void 0===t?void 0:t.map((function(e){var r=e.name,n=e.repo_path,t=(null===y||void 0===y?void 0:y[n])||[],o=null===Z||void 0===Z?void 0:Z[n];return[(0,_.jsx)(S.ZP,{bold:!0,children:r},"name"),(0,_.jsx)(b.Z,{onChange:function(e){var r=(0,w.sE)(t,(function(r){return r.id==e.target.value}));r&&s((function(e){var n,t=(null===e||void 0===e||null===(n=e.roles_new)||void 0===n?void 0:n.filter((function(e){return e.id!=(null===r||void 0===r?void 0:r.id)})))||[];console.log("prev roles:",t);var o={roles_new:[].concat((0,v.Z)(t),[r])};return k(k({},e),o)}))},placeholder:"No access",primary:!0,setContentOnMount:!0,value:null===o||void 0===o?void 0:o.id,children:t.map((function(e){var r=e.id,n=e.name;return(0,_.jsx)("option",{value:r,children:n},n)}))},"project_role")]}))}),(0,_.jsx)(a.Z,{p:2,children:(0,_.jsx)(h.Z,{loading:T,onClick:function(){var e,r=k(k({},u),{},{roles_new:null===u||void 0===u||null===(e=u.roles_new)||void 0===e?void 0:e.map((function(e){return e.id}))});N({user:r})},primary:!0,children:"Update roles"})})]})},Z=n(3849),E=n(49125),I=n(63153),N=n(84392);function T(e){var r=e.user,n=(0,s.useRouter)(),t=null===r||void 0===r?void 0:r.id,o=g.ZP.users.detail(t),u=o.data,c=o.mutate,d=(0,i.useMemo)((function(){return null===u||void 0===u?void 0:u.user}),[u]),v=g.ZP.workspaces.list({user_id:t},{refreshInterval:5e3,revalidateOnFocus:!0}),f=v.data,p=(v.mutate,(0,i.useMemo)((function(){return null===f||void 0===f?void 0:f.workspaces}),[f]));return(0,_.jsx)(Z.Z,{before:(0,_.jsx)(a.Z,{p:E.cd,children:(0,_.jsx)(l.Z,{entity:"global",entityID:null,hideFields:[I.s7],onDeleteSuccess:function(){return n.push("/manage/users")},onSaveSuccess:function(){c()},showDelete:!0,title:"Edit user",user:d})}),breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return(null===d||void 0===d?void 0:d.username)||"User"}}],pageName:N.L6.USERS,children:(0,_.jsx)(y,{fetchUser:c,user:d,workspaces:p})})}T.getInitialProps=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.query.user,e.abrupt("return",{user:{id:n}});case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var x=(0,c.Z)(T)},11976:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/[user]",function(){return n(82702)}])}},function(e){e.O(0,[844,7607,1424,1005,8180,3883,9774,2888,179],(function(){return r=11976,e(e.s=r);var r}));var r=e.O();_N_E=r}]);