if(typeof QUESTIONS==='undefined'||!QUESTIONS)QUESTIONS=[];
let kichThuocGoi=25;
let chiSoPhamVi=0;
let tronCauHoi=false;
let tronDapAn=false;
let cheDoNgauNhien=false;
let danhSachCauHoiThi=[];
let cauHienTai=0;
let daTraLoi=false;
let soCauDung=0;
let soCauSai=0;
let lichSuLamBai=[];
function tim(id){return document.getElementById(id);}
function tronMang(mang){
    mang=[...mang];
    for(let i=mang.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [mang[i],mang[j]]=[mang[j],mang[i]];
    }
    return mang;
}
function layCacPhamVi(ktGoi){
    if(QUESTIONS.length===0)return[{start:0,end:0,label:'Không có dữ liệu câu hỏi'}];
    if(ktGoi>=QUESTIONS.length)return[{start:0,end:0,label:`Tất cả — Câu 1 → ${QUESTIONS[QUESTIONS.length-1].num} (${QUESTIONS.length} câu)`}];
    let mangPhamVi=[];
    for(let i=0;i<QUESTIONS.length;i+=ktGoi){
        let ketThuc=Math.min(i+ktGoi,QUESTIONS.length);
        mangPhamVi.push({start:i,end:ketThuc,label:`Câu ${QUESTIONS[i].num} → ${QUESTIONS[ketThuc-1].num} (${ketThuc-i} câu)`});
    }
    return mangPhamVi;
}
function hienManHinh(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    tim(id).classList.add('active');
    tim('theme-toggle').style.display=id==='home'?'':'none';
    window.scrollTo(0,0);
}
function capNhatAnHienPhamVi(){
    tim('range-row').style.display=(cheDoNgauNhien||kichThuocGoi>=QUESTIONS.length)?'none':'block';
}
function taoCacPhamVi(){
    let theChon=tim('range-sel');
    let cacPhamVi=layCacPhamVi(kichThuocGoi);
    theChon.innerHTML=cacPhamVi.map((r,i)=>`<option value="${i}">${r.label}</option>`).join('');
    chiSoPhamVi=0;
    capNhatAnHienPhamVi();
}
taoCacPhamVi();
document.querySelectorAll('.mode-tab').forEach(theTab=>{
    theTab.addEventListener('click',()=>{
        document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
        theTab.classList.add('active');
        cheDoNgauNhien=theTab.dataset.mode==='rand';
        if(cheDoNgauNhien){
            tronCauHoi=true;
            tronDapAn=true;
            tim('shuf-q').checked=true;
            tim('shuf-a').checked=true;
            capNhatAnHienPhamVi();
        }else{
            tronCauHoi=false;
            tronDapAn=false;
            tim('shuf-q').checked=false;
            tim('shuf-a').checked=false;
            taoCacPhamVi();
        }
    });
});
document.querySelectorAll('.count-btn').forEach(nutBam=>{
    nutBam.addEventListener('click',()=>{
        document.querySelectorAll('.count-btn').forEach(b=>b.classList.remove('active'));
        nutBam.classList.add('active');
        kichThuocGoi=parseInt(nutBam.dataset.count);
        if(cheDoNgauNhien)capNhatAnHienPhamVi();
        else taoCacPhamVi();
    });
});
tim('range-sel').addEventListener('change',e=>{chiSoPhamVi=parseInt(e.target.value);});
tim('shuf-q').addEventListener('change',e=>{tronCauHoi=e.target.checked;});
tim('shuf-a').addEventListener('change',e=>{tronDapAn=e.target.checked;});
function batDauLamBai(){
    let goiCauHoi;
    if(cheDoNgauNhien)goiCauHoi=tronMang(QUESTIONS).slice(0,kichThuocGoi);
    else{
        chiSoPhamVi=parseInt(tim('range-sel').value||0);
        let cacPhamVi=layCacPhamVi(kichThuocGoi);
        let phamVi=cacPhamVi[Math.min(chiSoPhamVi,cacPhamVi.length-1)];
        goiCauHoi=QUESTIONS.slice(phamVi.start,phamVi.end);
        if(tronCauHoi)goiCauHoi=tronMang(goiCauHoi);
    }
    danhSachCauHoiThi=goiCauHoi.map(q=>{
        let cacLuaChon=[{key:'a',text:q.a},{key:'b',text:q.b},{key:'c',text:q.c},{key:'d',text:q.d}];
        if(tronDapAn)cacLuaChon=tronMang(cacLuaChon);
        return{num:q.num,question:q.q,opts:cacLuaChon,ans:q.ans};
    });
    cauHienTai=0;
    soCauDung=0;
    soCauSai=0;
    daTraLoi=false;
    lichSuLamBai=[];
    hienManHinh('quiz');
    hienThiCauHoi();
}
tim('btn-start').addEventListener('click',batDauLamBai);
tim('btn-back').addEventListener('click',()=>hienManHinh('home'));
tim('btn-home2').addEventListener('click',()=>hienManHinh('home'));
tim('btn-retry').addEventListener('click',batDauLamBai);
function hienThiCauHoi(){
    let ch=danhSachCauHoiThi[cauHienTai];
    let tongSo=danhSachCauHoiThi.length;
    let viTri=cauHienTai+1;
    tim('qc-cur').textContent=viTri;
    tim('qc-tot').textContent=tongSo;
    tim('sc-ok').textContent=soCauDung;
    tim('sc-bad').textContent=soCauSai;
    tim('pbar').style.width=((viTri-1)/tongSo*100)+'%';
    tim('q-text').textContent=ch.question;
    let nhanViTri=['A','B','C','D'];
    let theChua=tim('options');
    theChua.innerHTML='';
    ch.opts.forEach((opt,i)=>{
        let btn=document.createElement('button');
        btn.className='opt-btn';
        btn.dataset.key=opt.key;
        btn.style.animationDelay=(i*0.06)+'s';
        btn.innerHTML=`<span class="opt-key">${nhanViTri[i]}</span><span class="opt-text">${opt.text}</span>`;
        btn.addEventListener('click',()=>xuLyTraLoi(opt.key,ch));
        theChua.appendChild(btn);
    });
    tim('btn-next').className='next-btn';
    tim('btn-next').textContent='Câu tiếp theo →';
    daTraLoi=false;
}
function xuLyTraLoi(daChon,ch){
    if(daTraLoi)return;
    daTraLoi=true;
    let dung=daChon===ch.ans;
    if(dung)soCauDung++;else soCauSai++;
    tim('sc-ok').textContent=soCauDung;
    tim('sc-bad').textContent=soCauSai;
    let luaChonDaChon=ch.opts.find(o=>o.key===daChon);
    let luaChonDung=ch.opts.find(o=>o.key===ch.ans);
    lichSuLamBai.push({
        num:ch.num,
        question:ch.question,
        selectedKey:daChon,
        selectedText:luaChonDaChon?luaChonDaChon.text:'',
        correctKey:ch.ans,
        correctText:luaChonDung?luaChonDung.text:'',
        isOk:dung
    });
    tim('options').querySelectorAll('.opt-btn').forEach(btn=>{
        btn.disabled=true;
        let keyEl=btn.querySelector('.opt-key');
        let key=btn.dataset.key;
        if(key===ch.ans){
            btn.classList.add('state-correct');
            keyEl.textContent='✓';
        }else if(key===daChon&&!dung){
            btn.classList.add('state-wrong');
            keyEl.textContent='✗';
        }
    });
    let nutTiepTheo=tim('btn-next');
    nutTiepTheo.classList.add('show');
    if(cauHienTai===danhSachCauHoiThi.length-1)nutTiepTheo.textContent='Xem kết quả →';
}
tim('btn-next').addEventListener('click',()=>{
    if(cauHienTai<danhSachCauHoiThi.length-1){
        cauHienTai++;
        hienThiCauHoi();
        window.scrollTo({top:0,behavior:'smooth'});
    }else hienThiKetQua();
});
let boLocHienTai='all';
function chuyenDoiHtml(s){
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function taoDanhSachXemLai(loaiBoLoc){
    boLocHienTai=loaiBoLoc;
    document.querySelectorAll('.f-tab').forEach(t=>t.classList.toggle('active',t.dataset.filter===loaiBoLoc));
    let cacMuc=loaiBoLoc==='all'?lichSuLamBai:loaiBoLoc==='ok'?lichSuLamBai.filter(h=>h.isOk):lichSuLamBai.filter(h=>!h.isOk);
    let theChua=tim('review-list');
    theChua.innerHTML='';
    if(cacMuc.length===0){
        theChua.innerHTML=`<div style="text-align:center;color:var(--text-muted);padding:40px 0;font-size:14px">Không có câu nào</div>`;
        return;
    }
    cacMuc.forEach((item,idx)=>{
        let theDiv=document.createElement('div');
        theDiv.className='rev-item '+(item.isOk?'item-ok':'item-bad');
        theDiv.style.animationDelay=(idx*0.03)+'s';
        theDiv.style.animation='fadeUp .25s ease both';
        let chuoiHtmlDapAn=`<div class="rev-ans-row ${item.isOk?'row-ok':'row-bad'}"><span class="rev-text">${chuyenDoiHtml(item.selectedText)}</span><span class="rev-icon">${item.isOk?'✓':'✗'}</span></div>`;
        if(!item.isOk)chuoiHtmlDapAn+=`<div class="rev-ans-row row-ok"><span class="rev-text">${chuyenDoiHtml(item.correctText)}</span><span class="rev-icon">✓</span></div>`;
        theDiv.innerHTML=`<div class="rev-top"><span class="rev-num">Câu ${item.num}</span><span class="rev-status ${item.isOk?'sok':'sbad'}">${item.isOk?'✓ Đúng':'✗ Sai'}</span></div><div class="rev-q">${chuyenDoiHtml(item.question)}</div><div class="rev-answers">${chuoiHtmlDapAn}</div>`;
        theChua.appendChild(theDiv);
    });
}
document.querySelectorAll('.f-tab').forEach(tab=>{
    tab.addEventListener('click',()=>taoDanhSachXemLai(tab.dataset.filter));
});
(function(){
    let theHtml=document.documentElement;
    let theMeDaLuu=localStorage.getItem('theme');
    function apDungGiaoDien(giaoDien){
        if(giaoDien==='light')theHtml.setAttribute('data-theme','light');
        else theHtml.removeAttribute('data-theme');
    }
    apDungGiaoDien(theMeDaLuu||'dark');
    tim('theme-toggle').addEventListener('click',()=>{
        let laSang=theHtml.getAttribute('data-theme')==='light';
        let giaoDienTiep=laSang?'dark':'light';
        localStorage.setItem('theme',giaoDienTiep);
        apDungGiaoDien(giaoDienTiep);
    });
})();
function hienThiKetQua(){
    let tongSo=danhSachCauHoiThi.length;
    let tiLeDung=Math.round(soCauDung/tongSo*100);
    let bieuTuong=tiLeDung>=90?'🏆':tiLeDung>=75?'🎯':tiLeDung>=60?'📖':tiLeDung>=40?'💪':'🔄';
    let tieuDe=tiLeDung>=90?'Xuất sắc!':tiLeDung>=75?'Hoàn thành tốt!':tiLeDung>=60?'Khá tốt!':tiLeDung>=40?'Cần cố gắng thêm!':'Tiếp tục ôn luyện!';
    tim('res-emoji').textContent=bieuTuong;
    tim('res-title').textContent=tieuDe;
    tim('res-desc').textContent=`Hoàn thành ${tongSo} câu · ${soCauDung} đúng, ${soCauSai} sai`;
    tim('res-ok').textContent=soCauDung;
    tim('res-bad').textContent=soCauSai;
    tim('res-pct').textContent=tiLeDung+'%';
    let soCauBiSai=lichSuLamBai.filter(h=>!h.isOk).length;
    tim('rh-counts').textContent=`${tongSo} câu · ${soCauBiSai} câu sai`;
    taoDanhSachXemLai('all');
    hienManHinh('result');
}