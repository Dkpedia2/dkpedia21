Home » Blogging » Tutorial » Cara Membuat Blog Safelink Converter Work 100%

Cara Membuat Blog Safelink Converter Work 100%

￼Dedi Islafuddin 
Maret 18, 2017

SHORT URL

https://goo.gl/oJ5Az8

SHARE

Assalamualaikum...

KENEONO - Dikesempatan kali ini saya akan share Cara Membuat Blog Safelink Converter Work 100%. Apa blog safelink converter itu ?? Yaitu blog untuk mengkonversi atau membuat encypted link untuk semua link dari sebuah blog agar link-link tersebut menjadi aman dengan dikonversi menjadi base64. Dan jika ada pengunjung yang meng-klik link tersebut maka pengunjung akan dibawa ke halaman redirect safelink converter untuk mendapatkan link aslinya. Bagi sobat yang mempunyai blog download sobat bisa membuat blog safelink ini untuk mendapatkan penghasilan tambahan dari iklan yang sobat pasang, seperti yang ada diblog ini.


￼

￼

DEMO 


Berikut Cara Membuat Blog Safelink Converter Work 100%, simak baik" dengan teliti dibawah ini :


- Pertama silakan buat blog baru dan ganti template Kompiajaib Safelink Converter download Disini. (Jika sobat menggunakan domain TLD silakan hapus script dibawah ini yang ada di template)


var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr); };

- Jika sobat menggunkan domain blogspot.com maka link url blog yang sobat tulis di htmledit dan di script lainnya gunakan https:// jangan http:// begitu juga dibagian Setelan > Dasar > Pengahilan HTTPS hidupkan.

￼


- Selanjutnya buatlah Laman statis dengan judul Generate dan masukkan script dibawah ini degan mode HTML. setelah itu Publikasikan.


<div class="text-center margin-bottom-20">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>

<div class="row margin-bottom-20">
<div class="col-md-6">
<div class="panel panel-primary">
<div class="panel-heading text-center"><h2><i class="fa fa-shield"></i> Safe Link Converter <i class="fa fa-shield"></i></h2></div>
<div class="panel-body text-center">
<p class="text-primary margin-bottom-20">Encrypting your link and protect the link from viruses, malware, thief, etc!<br/>Made your link safe to visit.</p>

<div class="progress" id="daplong">
<div class="progress-bar progress-bar-striped active six-sec-ease-in-out" role="progressbar" data-transitiongoal="100"></div>
</div>
<button id="download2" class="alert alert-dismissible alert-success btn-lg" style='display:none'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <strong>Well done!</strong> you have successfully gained access to Decrypted Link. <i class="fa fa-hand-o-down slideInDownThumb" aria-hidden="true"></i></button>

</div>
</div>
</div>
<div class="col-md-6 text-left">
<div class="panel panel-info">
<!-- Default panel contents -->
<div class="panel-heading"><h2><i class="fa fa-question-circle-o" aria-hidden="true"></i> How to use our tool:</h2></div>
<div class="panel-body">
<ol>
<li>Click on <strong>How To Use</strong> menu above.</li>
<li>Click on the code and <kbd><kbd>CTRL</kbd> + <kbd>C</kbd></kbd> on your keyboard.</li>
<li>Paste the code in your HTML blog theme before the <mark>&lt;/body&gt;</mark>.</li>
<li>Save your HTML blog theme. you are done!</li>
<li>Now, your blog's outbound links was encrypted!</li>
</ol>
</div>
</div>
</div><div class="clear"></div>
</div>

<div class="row margin-bottom-20">
<div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="col-md-4 margin-top-25">
<div class="panel panel-success text-center">
<div class="panel-heading">
<h3 class="panel-title">
<b>Your link show here</b> <i aria-hidden="true" class="fa fa-hand-o-down"></i></h3>
</div>
<div class="panel-body">
<script src="https://cdn.rawgit.com/dedi96/safelink/813ce72f/safelinkga.js" type="text/javascript"></script>
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("http://www.safelink.ga/p/generate.html?url=", "");
document.write('<button type="button" id="download" class="Visit_Link btn btn-success" onclick="changeLink();" style="display: none;"><strong>Visit Link</strong> <i class="fa fa-external-link" aria-hidden="true"></i></button>')
</script>
</div>
</div>
</div>
<div class="col-md-4 text-center">
<h3>Advertise</h3>
KODE IKLAN DISINI
</div>
<div class="clear"></div>
</div>

<div class="container">
<div class="text-left">

</div>
</div>

- Kemudian buatlah file js silakan copy script dibawah ini ke notepad dan simpan dengan tipe safelink.js (dan jangan lupa ganti url http://www.safelink.ga/p/generate.htmldengan url Laman statis yang sudah kita buat tadi ).


var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="https://mysafelinkui.blogspot.com/p/generate.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;}