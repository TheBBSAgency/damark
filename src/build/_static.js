/* Build-time static helpers: real-URL nav + anchor "button" that mirrors the DS Button. */
(function(){
  var React = window.React, h = React.createElement;
  window.FORM_ENDPOINT = window.FORM_ENDPOINT || 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';
  window.href = function(r){
    if(!r || r==='home') return '/';
    if(r.indexOf('service:')===0) return '/services/'+r.slice(8)+'/';
    return '/'+r+'/';
  };
  window.LinkButton = function(props){
    var variant=props.variant||'primary', size=props.size||'md';
    var sizes={sm:{fontSize:'var(--text-sm)',padding:'7px 14px',gap:'6px',minHeight:'34px'},
               md:{fontSize:'var(--text-base)',padding:'10px 20px',gap:'8px',minHeight:'44px'},
               lg:{fontSize:'var(--text-md)',padding:'14px 28px',gap:'10px',minHeight:'52px'}};
    var base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:sizes[size].gap,
      fontFamily:'var(--font-display)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.04em',
      fontSize:sizes[size].fontSize,padding:sizes[size].padding,minHeight:sizes[size].minHeight,
      border:'2px solid transparent',borderRadius:'var(--radius-xs)',cursor:'pointer',lineHeight:1,
      whiteSpace:'nowrap',textDecoration:'none',boxSizing:'border-box'};
    var variants={primary:{background:'var(--blue-600)',color:'var(--text-on-brand)',borderColor:'var(--blue-600)'},
      secondary:{background:'transparent',color:'var(--blue-600)',borderColor:'var(--steel-400)'},
      ghost:{background:'transparent',color:'var(--text-brand)',borderColor:'transparent'}};
    var style=Object.assign({},base,variants[variant]||variants.primary,props.style||{});
    return h('a',{href:props.href,style:style,className:'dm-btn dm-btn-'+variant},props.children);
  };
})();
