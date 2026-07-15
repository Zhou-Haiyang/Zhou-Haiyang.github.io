(function () {
  var tags = { en: 'en', zh: 'zh-CN', ja: 'ja', de: 'de', fr: 'fr' };
  var t = {
    en: {
      language: 'Language', about: 'About', publications: 'Publications',
      footer: '© 2026 Haiyang Zhou · Academic website hosted with GitHub Pages', visitors: 'Visitors:', views: 'Views:',
      homeTitle: 'Haiyang Zhou | Academic Website', homeDesc: 'Academic website of Haiyang Zhou at Xihua University.',
      pubTitle: 'Publications | Haiyang Zhou', pubDesc: 'Publications by Haiyang Zhou.',
      name: 'Haiyang Zhou <span lang="zh-CN">周海洋</span>', profile: 'Academic profile',
      lead: 'Lecturer, School of Materials Science and Engineering, Xihua University',
      focus: 'Research focuses on mechanisms of metal plastic forming, ultrasonic metal welding, and ultrasonic metal solid-state additive manufacturing.',
      viewPubs: 'View publications', email: 'Email', scholar: 'Google Scholar', interests: 'Research interests',
      int1: 'Mechanisms of metal plastic forming', int2: 'Ultrasonic metal welding', int3: 'Ultrasonic metal solid-state additive manufacturing',
      selected: 'Latest publication', details: 'Article details', aam: 'AAM PDF', publisher: 'Publisher version',
      graphicalAbstract: 'Graphical abstract.', graphicalAbstractCaption: 'The study frames the welding dilemma, introduces preset-gap scheduling, and identifies a robust joint window.',
      latestVisualAlt: 'Graphical abstract showing the welding dilemma, preset-gap scheduling procedure, and robust joint window for ultrasonic welding of Invar 36',
      researchVisuals: 'Research at a glance', paperFigure: 'Figure from the article.', authorGraphicalAbstract: 'Author graphical abstract.',
      pubEye: 'Research output', pubHeading: 'Publications', pubIntro: 'Peer-reviewed publications. Open-access files are hosted only where redistribution rights are clear.',
      detailsAbstract: 'Details and abstract', downloadAam: 'Download AAM', openAccessPdf: 'Open-access PDF',
      articleEyeJournal: 'Journal article', articleEyeOpenAccess: 'Open-access journal article', downloadOpenAccessPdf: 'Download open-access PDF',
      versionTextCcBy: 'Open-access Version of Record (CC BY 4.0)', versionTextCcByNcNd: 'Open-access Version of Record (CC BY-NC-ND 4.0)',
      versionNoticeCcBy: '<strong>Version notice.</strong> This unchanged Version of Record is redistributed under the <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> license.',
      versionNoticeCcByNcNd: '<strong>Version notice.</strong> This unchanged Version of Record is redistributed for non-commercial use under the <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> license.',
      articleEye: 'Author Accepted Manuscript', affiliations: 'Affiliations', journal: 'Journal:', publication: 'Publication:', version: 'Version:',
      versionText: 'Author Accepted Manuscript (peer reviewed and accepted before publisher copy-editing and typesetting)',
      downloadPdf: 'Download AAM PDF', publisherRecord: 'Publisher Version of Record',
      versionNotice: '<strong>Version notice.</strong> This is the author-accepted version of the article. The formal Version of Record is available through the DOI above. This manuscript version is made available under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> license.',
      abstract: 'Abstract', keywords: 'Keywords', broader: 'Broader relevance to ultrasonic welding of high-strength sheet metals', citation: 'Recommended citation',
      broader1: 'Although demonstrated on Invar 36 sheets, this work addresses a broader challenge in ultrasonic welding of high-strength sheet metals: achieving sufficient early-stage interfacial activation while avoiding late-stage indentation, overheating, and re-shearing damage. This challenge is relevant to ultrasonic welding of steels, stainless steels, titanium alloys, nickel alloys, and other difficult-to-deform metallic sheets.',
      broader2: 'The main contribution is a displacement-centered loading-path design strategy, not a material-specific parameter set. By introducing the preset horn-anvil gap as a position-triggered constraint and a fourth control variable beyond pressure, amplitude, and time, this study links bond formation, weld-seam microstructure, fracture mode, and in-process monitoring signals. The framework may help guide process-window design, weld quality monitoring, and data-informed quality screening in ultrasonic metal welding of high-strength sheet alloys.'
    },
    zh: {
      language: '语言', about: '关于', publications: '论文',
      footer: '© 2026 周海洋 · 学术主页托管于 GitHub Pages', visitors: '访客：', views: '浏览：',
      homeTitle: '周海洋 | 个人学术主页', homeDesc: '西华大学周海洋的个人学术主页。',
      pubTitle: '论文 | 周海洋', pubDesc: '周海洋的学术论文。',
      name: '周海洋 <span lang="en">Haiyang Zhou</span>', profile: '学术简介',
      lead: '西华大学材料科学与工程学院讲师',
      focus: '研究方向聚焦于金属塑性成形机理、超声金属焊接以及超声金属固态增材制造。',
      viewPubs: '查看论文', email: '电子邮件', scholar: 'Google Scholar', interests: '研究方向',
      int1: '金属塑性成形机理', int2: '超声金属焊接', int3: '超声金属固态增材制造',
      selected: '最新论文', details: '论文详情', aam: '作者接受稿 PDF', publisher: '出版社版本',
      graphicalAbstract: '图形摘要。', graphicalAbstractCaption: '该研究阐明焊接困境，提出预设间隙调控方法，并识别出稳健接头窗口。',
      latestVisualAlt: '展示 Invar 36 超声焊接困境、预设间隙调控流程和稳健接头窗口的图形摘要',
      researchVisuals: '研究一览', paperFigure: '论文原图。', authorGraphicalAbstract: '作者图形摘要。',
      pubEye: '科研成果', pubHeading: '论文', pubIntro: '同行评议论文。仅在再发布权利明确时提供开放获取文件。',
      detailsAbstract: '详情与摘要', downloadAam: '下载作者接受稿', openAccessPdf: '开放获取 PDF',
      articleEyeJournal: '期刊论文', articleEyeOpenAccess: '开放获取期刊论文', downloadOpenAccessPdf: '下载开放获取 PDF',
      versionTextCcBy: '开放获取正式出版版本（CC BY 4.0）', versionTextCcByNcNd: '开放获取正式出版版本（CC BY-NC-ND 4.0）',
      versionNoticeCcBy: '<strong>版本说明。</strong>此处按 <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> 许可原样转载正式出版版本。',
      versionNoticeCcByNcNd: '<strong>版本说明。</strong>此处按 <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> 许可原样、非商业转载正式出版版本。',
      articleEye: '作者接受稿', affiliations: '作者单位', journal: '期刊：', publication: '出版信息：', version: '版本：',
      versionText: '作者接受稿（已经同行评议并接受，尚未经过出版社复制编辑和排版）',
      downloadPdf: '下载作者接受稿 PDF', publisherRecord: '出版社正式版本',
      versionNotice: '<strong>版本说明。</strong>这是该论文的作者接受稿。正式出版版本可通过上方 DOI 获取。本稿件版本依据 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> 许可公开。',
      abstract: '摘要', keywords: '关键词', broader: '与高强度薄板金属超声焊的更广泛相关性', citation: '推荐引用',
      broader1: '尽管本研究以 Invar 36 薄板为对象，但它面向的是高强度薄板金属超声焊中的共性挑战：在早期实现充分界面活化，同时避免后期压痕、过热和再剪切损伤。这一挑战同样适用于钢、不锈钢、钛合金、镍合金以及其他难变形金属薄板的超声焊。',
      broader2: '本文的主要贡献是一种以位移为中心的加载路径设计策略，而不是某一材料专属的参数组合。通过将预设焊头-砧座间隙引入为位置触发约束，并作为压力、振幅和时间之外的第四控制变量，本研究关联了结合形成、焊缝微观结构、断裂模式和过程监测信号。该框架可为高强度薄板合金超声金属焊的工艺窗口设计、焊接质量监测和数据驱动质量筛选提供参考。'
    },
    ja: {
      language: '言語', about: '概要', publications: '研究業績',
      footer: '© 2026 Haiyang Zhou · GitHub Pages で公開している学術サイト', visitors: '訪問者:', views: '閲覧:',
      homeTitle: 'Haiyang Zhou | 学術ウェブサイト', homeDesc: '西華大学の Haiyang Zhou の学術ウェブサイト。',
      pubTitle: '研究業績 | Haiyang Zhou', pubDesc: 'Haiyang Zhou の研究業績。',
      name: 'Haiyang Zhou <span lang="zh-CN">周海洋</span>', profile: '研究者プロフィール',
      lead: '西華大学 材料科学工学学院 講師',
      focus: '研究対象は、金属塑性加工のメカニズム、超音波金属溶接、超音波金属固相積層造形です。',
      viewPubs: '研究業績を見る', email: 'メール', scholar: 'Google Scholar', interests: '研究分野',
      int1: '金属塑性加工のメカニズム', int2: '超音波金属溶接', int3: '超音波金属固相積層造形',
      selected: '最新論文', details: '論文詳細', aam: '著者受理稿 PDF', publisher: '出版社版',
      graphicalAbstract: 'グラフィカルアブストラクト。', graphicalAbstractCaption: '本研究は溶接のジレンマを整理し、プリセット間隙制御を導入して、安定した接合ウィンドウを示します。',
      latestVisualAlt: 'Invar 36 の超音波溶接における課題、プリセット間隙制御の手順、安定した接合ウィンドウを示す図',
      researchVisuals: '研究概要', paperFigure: '論文掲載図。', authorGraphicalAbstract: '著者作成のグラフィカルアブストラクト。',
      pubEye: '研究成果', pubHeading: '研究業績', pubIntro: '査読済み論文。再配布権が明確な場合にのみオープンアクセスファイルを掲載しています。',
      detailsAbstract: '詳細と要旨', downloadAam: '著者受理稿をダウンロード', openAccessPdf: 'オープンアクセス PDF',
      articleEyeJournal: '学術誌論文', articleEyeOpenAccess: 'オープンアクセス論文', downloadOpenAccessPdf: 'オープンアクセス PDF をダウンロード',
      versionTextCcBy: 'オープンアクセス正式出版版（CC BY 4.0）', versionTextCcByNcNd: 'オープンアクセス正式出版版（CC BY-NC-ND 4.0）',
      versionNoticeCcBy: '<strong>版に関する注記。</strong>変更を加えていない正式出版版を <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> ライセンスに基づき再配布しています。',
      versionNoticeCcByNcNd: '<strong>版に関する注記。</strong>変更を加えていない正式出版版を、非営利目的で <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> ライセンスに基づき再配布しています。',
      articleEye: '著者受理稿', affiliations: '所属', journal: '掲載誌:', publication: '出版情報:', version: '版:',
      versionText: '著者受理稿（査読・受理後、出版社によるコピー編集と組版前の原稿）',
      downloadPdf: '著者受理稿 PDF をダウンロード', publisherRecord: '正式出版版',
      versionNotice: '<strong>版に関する注記。</strong>これは論文の著者受理稿です。正式な出版版は上記 DOI から入手できます。この原稿版は <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> ライセンスで公開されています。',
      abstract: '要旨', keywords: 'キーワード', broader: '高強度薄板金属の超音波溶接への広い関連性', citation: '推奨引用',
      broader1: '本研究は Invar 36 薄板で実証されたが、高強度薄板金属の超音波溶接に共通する課題、すなわち初期の界面活性化を十分に確保しながら、後期の押込み、過熱、再せん断損傷を避けるという課題を扱っている。この課題は、鋼、ステンレス鋼、チタン合金、ニッケル合金、その他の難加工金属薄板の超音波溶接にも関連する。',
      broader2: '主な貢献は、材料固有のパラメータセットではなく、変位を中心とした荷重経路設計戦略である。プリセットホーン-アンビル間隙を位置トリガー型拘束として導入し、圧力、振幅、時間に続く第四の制御変数とすることで、本研究は接合形成、溶接部組織、破断様式、プロセス中モニタリング信号を関連付けた。この枠組みは、高強度薄板合金の超音波金属溶接におけるプロセスウィンドウ設計、溶接品質モニタリング、データに基づく品質スクリーニングに役立つ可能性がある。'
    },
    de: {
      language: 'Sprache', about: 'Profil', publications: 'Publikationen',
      footer: '© 2026 Haiyang Zhou · Akademische Website, gehostet mit GitHub Pages', visitors: 'Besucher:', views: 'Aufrufe:',
      homeTitle: 'Haiyang Zhou | Akademische Website', homeDesc: 'Akademische Website von Haiyang Zhou an der Xihua University.',
      pubTitle: 'Publikationen | Haiyang Zhou', pubDesc: 'Publikationen von Haiyang Zhou.',
      name: 'Haiyang Zhou <span lang="zh-CN">周海洋</span>', profile: 'Akademisches Profil',
      lead: 'Lecturer, School of Materials Science and Engineering, Xihua University',
      focus: 'Die Forschung konzentriert sich auf Mechanismen der plastischen Metallumformung, das Ultraschall-Metallschweißen und die ultraschallgestützte metallische Festkörper-Additivfertigung.',
      viewPubs: 'Publikationen ansehen', email: 'E-Mail', scholar: 'Google Scholar', interests: 'Forschungsinteressen',
      int1: 'Mechanismen der plastischen Metallumformung', int2: 'Ultraschall-Metallschweißen', int3: 'Ultraschallgestützte metallische Festkörper-Additivfertigung',
      selected: 'Neueste Publikation', details: 'Artikeldetails', aam: 'AAM-PDF', publisher: 'Verlagsversion',
      graphicalAbstract: 'Grafische Zusammenfassung.', graphicalAbstractCaption: 'Die Studie beschreibt das Schweißdilemma, führt die Preset-Spaltsteuerung ein und identifiziert ein robustes Verbindungsfenster.',
      latestVisualAlt: 'Grafische Zusammenfassung des Schweißdilemmas, der Preset-Spaltsteuerung und des robusten Verbindungsfensters beim Ultraschallschweißen von Invar 36',
      researchVisuals: 'Forschung auf einen Blick', paperFigure: 'Abbildung aus dem Artikel.', authorGraphicalAbstract: 'Grafische Zusammenfassung der Autoren.',
      pubEye: 'Forschungsergebnisse', pubHeading: 'Publikationen', pubIntro: 'Begutachtete Publikationen. Open-Access-Dateien werden nur bei eindeutigem Weiterverbreitungsrecht bereitgestellt.',
      detailsAbstract: 'Details und Abstract', downloadAam: 'AAM herunterladen', openAccessPdf: 'Open-Access-PDF',
      articleEyeJournal: 'Zeitschriftenartikel', articleEyeOpenAccess: 'Open-Access-Zeitschriftenartikel', downloadOpenAccessPdf: 'Open-Access-PDF herunterladen',
      versionTextCcBy: 'Open-Access-Verlagsfassung (CC BY 4.0)', versionTextCcByNcNd: 'Open-Access-Verlagsfassung (CC BY-NC-ND 4.0)',
      versionNoticeCcBy: '<strong>Versionshinweis.</strong> Die unveränderte Verlagsfassung wird unter der Lizenz <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> weiterverbreitet.',
      versionNoticeCcByNcNd: '<strong>Versionshinweis.</strong> Die unveränderte Verlagsfassung wird für nichtkommerzielle Zwecke unter der Lizenz <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> weiterverbreitet.',
      articleEye: 'Author Accepted Manuscript', affiliations: 'Affiliationen', journal: 'Zeitschrift:', publication: 'Publikation:', version: 'Version:',
      versionText: 'Author Accepted Manuscript (begutachtet und akzeptiert, vor Copyediting und Satz durch den Verlag)',
      downloadPdf: 'AAM-PDF herunterladen', publisherRecord: 'Offizielle Verlagsversion',
      versionNotice: '<strong>Versionshinweis.</strong> Dies ist die akzeptierte Autorenfassung des Artikels. Die formale Version of Record ist über den DOI oben verfügbar. Diese Manuskriptversion wird unter der Lizenz <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> bereitgestellt.',
      abstract: 'Abstract', keywords: 'Schlüsselwörter', broader: 'Breitere Relevanz für das Ultraschallschweißen hochfester Blechmetalle', citation: 'Empfohlene Zitierweise',
      broader1: 'Obwohl die Arbeit an Invar-36-Blechen demonstriert wurde, behandelt sie eine allgemeinere Herausforderung beim Ultraschallschweißen hochfester Blechmetalle: eine ausreichende frühe Grenzflächenaktivierung zu erreichen und gleichzeitig spätes Eindrücken, Überhitzung und Nachscher-Schädigung zu vermeiden. Diese Herausforderung ist für das Ultraschallschweißen von Stählen, nichtrostenden Stählen, Titanlegierungen, Nickellegierungen und anderen schwer umformbaren metallischen Blechen relevant.',
      broader2: 'Der Hauptbeitrag ist eine verschiebungszentrierte Strategie zur Lastpfadgestaltung und kein materialspezifischer Parametersatz. Durch die Einführung des voreingestellten Horn-Amboss-Spalts als positionsausgelöste Begrenzung und als vierte Stellgröße neben Druck, Amplitude und Zeit verknüpft diese Studie Bindungsbildung, Mikrostruktur der Schweißnaht, Bruchmodus und Prozessüberwachungssignale. Der Rahmen kann die Auslegung von Prozessfenstern, die Überwachung der Schweißqualität und ein dateninformiertes Qualitätsscreening beim Ultraschall-Metallschweißen hochfester Blechlegierungen unterstützen.'
    },
    fr: {
      language: 'Langue', about: 'Profil', publications: 'Publications',
      footer: '© 2026 Haiyang Zhou · Site académique hébergé avec GitHub Pages', visitors: 'Visiteurs :', views: 'Vues :',
      homeTitle: 'Haiyang Zhou | Site académique', homeDesc: 'Site académique de Haiyang Zhou à l’université Xihua.',
      pubTitle: 'Publications | Haiyang Zhou', pubDesc: 'Publications de Haiyang Zhou.',
      name: 'Haiyang Zhou <span lang="zh-CN">周海洋</span>', profile: 'Profil académique',
      lead: 'Maître de conférences, School of Materials Science and Engineering, Xihua University',
      focus: 'Ses recherches portent sur les mécanismes de formage plastique des métaux, le soudage ultrasonore des métaux et la fabrication additive métallique à l’état solide assistée par ultrasons.',
      viewPubs: 'Voir les publications', email: 'E-mail', scholar: 'Google Scholar', interests: 'Axes de recherche',
      int1: 'Mécanismes de formage plastique des métaux', int2: 'Soudage ultrasonore des métaux', int3: 'Fabrication additive métallique à l’état solide assistée par ultrasons',
      selected: 'Publication la plus récente', details: 'Détails de l’article', aam: 'PDF AAM', publisher: 'Version éditeur',
      graphicalAbstract: 'Résumé graphique.', graphicalAbstractCaption: 'L’étude présente le dilemme du soudage, introduit le pilotage par écart prédéfini et identifie une fenêtre d’assemblage robuste.',
      latestVisualAlt: 'Résumé graphique du dilemme du soudage, de la procédure de pilotage par écart prédéfini et de la fenêtre d’assemblage robuste pour le soudage ultrasonore de l’Invar 36',
      researchVisuals: 'La recherche en un coup d’œil', paperFigure: 'Figure extraite de l’article.', authorGraphicalAbstract: 'Résumé graphique des auteurs.',
      pubEye: 'Production scientifique', pubHeading: 'Publications', pubIntro: 'Publications évaluées par les pairs. Les fichiers en libre accès ne sont hébergés que lorsque les droits de redistribution sont clairement établis.',
      detailsAbstract: 'Détails et résumé', downloadAam: 'Télécharger l’AAM', openAccessPdf: 'PDF en libre accès',
      articleEyeJournal: 'Article de revue', articleEyeOpenAccess: 'Article de revue en libre accès', downloadOpenAccessPdf: 'Télécharger le PDF en libre accès',
      versionTextCcBy: 'Version officielle en libre accès (CC BY 4.0)', versionTextCcByNcNd: 'Version officielle en libre accès (CC BY-NC-ND 4.0)',
      versionNoticeCcBy: '<strong>Note sur la version.</strong> Cette version officielle inchangée est redistribuée sous licence <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.',
      versionNoticeCcByNcNd: '<strong>Note sur la version.</strong> Cette version officielle inchangée est redistribuée à des fins non commerciales sous licence <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.',
      articleEye: 'Manuscrit accepté par l’auteur', affiliations: 'Affiliations', journal: 'Revue :', publication: 'Publication :', version: 'Version :',
      versionText: 'Manuscrit accepté par l’auteur (évalué par les pairs et accepté avant la révision éditoriale et la mise en page par l’éditeur)',
      downloadPdf: 'Télécharger le PDF AAM', publisherRecord: 'Version officielle de l’éditeur',
      versionNotice: '<strong>Note sur la version.</strong> Il s’agit de la version acceptée par l’auteur de l’article. La version officielle publiée est disponible via le DOI ci-dessus. Cette version du manuscrit est mise à disposition sous licence <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.',
      abstract: 'Résumé', keywords: 'Mots-clés', broader: 'Pertinence élargie pour le soudage ultrasonore des tôles métalliques à haute résistance', citation: 'Citation recommandée',
      broader1: 'Bien que démontré sur des tôles d’Invar 36, ce travail traite un défi plus général du soudage ultrasonore des tôles métalliques à haute résistance : obtenir une activation interfaciale suffisante au début du procédé tout en évitant l’indentation tardive, la surchauffe et les dommages dus au re-cisaillement. Ce défi concerne également le soudage ultrasonore des aciers, des aciers inoxydables, des alliages de titane, des alliages de nickel et d’autres tôles métalliques difficiles à déformer.',
      broader2: 'La contribution principale est une stratégie de conception du chemin de chargement centrée sur le déplacement, et non un jeu de paramètres propre à un matériau. En introduisant l’écart prédéfini entre la sonotrode et l’enclume comme contrainte déclenchée par la position, et comme quatrième variable de contrôle au-delà de la pression, de l’amplitude et du temps, cette étude relie la formation de la liaison, la microstructure du cordon, le mode de rupture et les signaux de surveillance en cours de procédé. Ce cadre peut guider la conception des fenêtres de procédé, le suivi de la qualité des soudures et le criblage qualité fondé sur les données dans le soudage ultrasonore des alliages en tôle à haute résistance.'
    }
  };

  function page() {
    var path = location.pathname.replace(/\/index\.html$/, '/');
    if (path === '/') return 'home';
    if (path === '/publications/') return 'pub';
    if (path === '/publications/preset-gap-umw/') return 'preset';
    if (/^\/publications\/[^/]+\/$/.test(path)) return 'article';
    return 'home';
  }
  function get(lang, key) { return (t[lang] && t[lang][key]) || t.en[key] || ''; }
  function q(selector, fn) { document.querySelectorAll(selector).forEach(fn); }
  function text(selector, lang, key) { q(selector, function (el) { el.textContent = get(lang, key); }); }
  function html(selector, lang, key) { q(selector, function (el) { el.innerHTML = get(lang, key); }); }
  function list(selector, lang, keys) {
    var nodes = document.querySelectorAll(selector);
    keys.forEach(function (key, index) { if (nodes[index]) nodes[index].textContent = get(lang, key); });
  }
  function translateData(lang) {
    q('[data-i18n]', function (el) { el.textContent = get(lang, el.getAttribute('data-i18n')); });
    q('[data-i18n-html]', function (el) { el.innerHTML = get(lang, el.getAttribute('data-i18n-html')); });
    q('[data-i18n-alt]', function (el) { el.setAttribute('alt', get(lang, el.getAttribute('data-i18n-alt'))); });
  }
  function counter(containerSelector, valueSelector, lang, key) {
    var container = document.querySelector(containerSelector);
    if (!container) return;
    var oldValue = document.querySelector(valueSelector);
    var span = document.createElement('span');
    span.id = valueSelector.slice(1);
    span.textContent = oldValue ? oldValue.textContent : '--';
    container.textContent = get(lang, key) + ' ';
    container.appendChild(span);
  }
  function setMeta(lang, currentPage) {
    if (currentPage === 'home') {
      document.title = get(lang, 'homeTitle');
      var homeDesc = document.querySelector('meta[name="description"]');
      if (homeDesc) homeDesc.setAttribute('content', get(lang, 'homeDesc'));
    }
    if (currentPage === 'pub') {
      document.title = get(lang, 'pubTitle');
      var pubDesc = document.querySelector('meta[name="description"]');
      if (pubDesc) pubDesc.setAttribute('content', get(lang, 'pubDesc'));
    }
  }
  function shared(lang) {
    document.documentElement.lang = tags[lang] || 'en';
    text('nav a[href="/"]', lang, 'about');
    text('nav a[href="/publications/"]', lang, 'publications');
    text('[data-language-label]', lang, 'language');
    text('.footer-wrap > span:first-child', lang, 'footer');
    counter('#busuanzi_container_site_uv', '#busuanzi_value_site_uv', lang, 'visitors');
    counter('#busuanzi_container_site_pv', '#busuanzi_value_site_pv', lang, 'views');
    var select = document.querySelector('[data-language-select]');
    if (select) { select.value = lang; select.setAttribute('aria-label', get(lang, 'language')); }
  }
  function home(lang) {
    html('.hero h1', lang, 'name');
    text('.hero .eyebrow', lang, 'profile');
    text('.hero .lead', lang, 'lead');
    text('.hero .lead + p', lang, 'focus');
    text('.hero .actions a[href="/publications/"]', lang, 'viewPubs');
    text('.hero .actions a[href^="mailto:"]', lang, 'email');
    text('.hero .actions a[href*="scholar.google.com"]', lang, 'scholar');
    text('.research-interests h2', lang, 'interests');
    list('.research-interests .tag-list li', lang, ['int1', 'int2', 'int3']);
    text('#latest-publication-heading', lang, 'selected');
    text('.inline-links a[href="/publications/preset-gap-umw/"]', lang, 'details');
    text('.inline-links a[href="/publications/preset-gap-umw/aam.pdf"]', lang, 'aam');
    text('.inline-links a[href^="https://doi.org/"]', lang, 'publisher');
  }
  function publications(lang) {
    text('.page-heading .eyebrow', lang, 'pubEye');
    text('.page-heading h1', lang, 'pubHeading');
    text('.page-heading .page-intro', lang, 'pubIntro');
    text('.inline-links a[href="/publications/preset-gap-umw/"]', lang, 'detailsAbstract');
    text('.inline-links a[href="/publications/preset-gap-umw/aam.pdf"]', lang, 'downloadAam');
  }
  function article(lang) {
    text('.article-page > .eyebrow', lang, 'articleEye');
    text('#affiliations-heading', lang, 'affiliations');
    var meta = document.querySelectorAll('.article-meta p');
    if (meta[0]) meta[0].innerHTML = '<strong>' + get(lang, 'journal') + '</strong> Journal of Materials Processing Technology';
    if (meta[1]) meta[1].innerHTML = '<strong>' + get(lang, 'publication') + '</strong> Volume 354 (2026), Article 119366';
    if (meta[2]) meta[2].innerHTML = '<strong>DOI:</strong> <a href="https://doi.org/10.1016/j.jmatprotec.2026.119366">10.1016/j.jmatprotec.2026.119366</a>';
    if (meta[3]) meta[3].innerHTML = '<strong>' + get(lang, 'version') + '</strong> ' + get(lang, 'versionText');
    text('.prominent-actions a[href="aam.pdf"]', lang, 'downloadPdf');
    text('.prominent-actions a[href^="https://doi.org/"]', lang, 'publisherRecord');
    html('.version-note', lang, 'versionNotice');
  }
  function apply(lang) {
    var currentPage = page();
    shared(lang); translateData(lang); setMeta(lang, currentPage);
    if (currentPage === 'home') home(lang);
    if (currentPage === 'pub') publications(lang);
    if (currentPage === 'preset') article(lang);
    try { localStorage.setItem('siteLanguage', lang); } catch (error) {}
  }
  function preferred() {
    var requested = new URLSearchParams(location.search).get('lang');
    if (tags[requested]) return requested;
    try { var stored = localStorage.getItem('siteLanguage'); if (tags[stored]) return stored; } catch (error) {}
    var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return tags[browser] ? browser : 'en';
  }
  var selector = document.querySelector('[data-language-select]');
  if (selector) selector.addEventListener('change', function (event) { apply(event.target.value); });
  apply(preferred());
}());
