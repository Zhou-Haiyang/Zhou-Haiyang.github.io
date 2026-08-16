(function () {
  var tags = { en: 'en', zh: 'zh-CN', ja: 'ja', de: 'de', fr: 'fr' };
  var t = {
    en: {
      matrixHeading: 'Cross-material applicability matrix',
      matrixIntro: 'The table distinguishes the transferable loading-path and monitoring concepts from parameters that require material- and machine-specific recalibration.',
      matrixCaption: 'Potential transfer of the Invar 36 loading-path framework across selected material and joint systems.',
      matrixCol1: 'Material or application system',
      matrixCol2: 'Shared process challenge',
      matrixCol3: 'Relevance of the Invar 36 study',
      matrixCol4: 'Main recalibration requirement',
      matrixR1C1: 'High-strength, low-ductility metallic sheets',
      matrixR1C2: 'Strong early activation followed by controlled late-stage loading to limit thinning, overheating, localisation, and damage',
      matrixR1C3: 'Provides a position-triggered framework for separating bonding-dominant and damage-dominant stages',
      matrixR1C4: 'Re-establish the collapse window, trigger position, force history, and acceptable failure modes',
      matrixR2C1: 'Ti/Ti and titanium-alloy joints',
      matrixR2C2: 'Narrow process window with risks of insufficient activation, excessive thinning, and cracking',
      matrixR2C3: 'Suggests using collapse, normal-force dwell, and late-stage shear response to schedule load relaxation',
      matrixR2C4: 'Validate the dominant damage mechanism and determine a titanium-specific trigger position',
      matrixR3C1: 'Stainless steel and high-strength steel',
      matrixR3C2: 'Passive films, high deformation resistance, work hardening, and over-indentation sensitivity',
      matrixR3C3: 'Offers a route to coordinate film disruption and seam formation with late-stage pressure regulation',
      matrixR3C4: 'Recalibrate for grade, phase constitution, surface condition, thickness, and hardening behaviour',
      matrixR4C1: 'Stainless-steel/Ti and other hard/hard dissimilar joints',
      matrixR4C2: 'Asymmetric deformation, unequal acoustic response, and localised load partitioning',
      matrixR4C3: 'Provides a framework for separating collapse from normal-load dwell and monitoring off-axis or tangential reactions',
      matrixR4C4: 'Include interfacial chemistry, reaction-layer development, and deformation asymmetry',
      matrixR5C1: 'Nickel and nickel-based alloy joints',
      matrixR5C2: 'High flow resistance and limited accommodation can intensify localisation after seam formation',
      matrixR5C3: 'Supports displacement-centred regulation of late-stage force and shear',
      matrixR5C4: 'Establish alloy-specific thermal, acoustic, plastic, and surface-film responses',
      matrixR6C1: 'Cu–Al tab-to-busbar and battery joints',
      matrixR6C2: 'Asymmetric indentation, oxide disruption, compaction, thickness loss, heating, and electrical-performance variability',
      matrixR6C3: 'Treats collapse as a state/control variable and supports displacement–force–power fusion',
      matrixR6C4: 'Validate electrical resistance, remaining thickness, interfacial reactions, and service failure',
      matrixR7C1: 'Multilayer tabs, foil stacks, and multi-wire joints',
      matrixR7C2: 'Layer compaction, interlayer slip, root-gap closure, tooling sensitivity, and drift',
      matrixR7C3: 'Position constraints may limit unnecessary stack compaction and late-stage tool penetration',
      matrixR7C4: 'Recalibrate for layer count, foil thickness, stack architecture, current path, and local slip',
      matrixScope: 'Scope note. The robust interval of Δh = 0.5–0.7 mm applies only to the reported Invar 36 configuration. The matrix identifies transferable research questions and monitoring logic; it does not provide validated process parameters for other material systems.',
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
      abstract: 'Abstract', keywords: 'Keywords', broader: 'Broader relevance to ultrasonic metal welding: loading-path control, weld collapse, and process monitoring', citation: 'Recommended citation',
      broader1: 'This study uses 0.53 mm Invar 36 as a stringent model system for a broader challenge in ultrasonic metal welding: achieving sufficient early-stage interfacial activation while limiting late-stage thinning, overheating, re-shearing, and damage accumulation. The preset horn–anvil gap addresses this transition through a calibrated lower dead point. Once the horn reaches that position, ultrasonic vibration continues, downward travel is constrained, and the static normal load relaxes through machine compliance. This position-triggered boundary-condition change reshapes the late-stage loading path under fixed vibration amplitude, normal load, and welding time.',
      broader2: 'The framework complements conventional process descriptions based on amplitude, force, time, and energy. Weld collapse, force retention, late-stage tangential response, generator power, and temperature indicate the state produced by those settings. The Invar results show that similar final collapse can arise from different force histories and lead to different seam architectures and failure behaviour. These signals support process-window design, in-process monitoring, and condition-specific quality screening.',
      broader3: 'The same activation–damage competition is relevant to titanium alloys, high-strength steels, stainless steels, nickel alloys, and hard/hard dissimilar joints, where high flow resistance, stable surface films, or limited local plastic accommodation can narrow the operating window. Cu–Al and battery-tab welding involve different material physics, yet they share challenges associated with asymmetric collapse, foil-stack compaction, horn penetration, remaining thickness, heat generation, and process variability. Collapse may serve as an evolving state variable and control trigger, supported by force and power measurements.',
      broader4: 'The robust interval of Δh = 0.5–0.7 mm applies only to the Invar 36 sheet thickness, tooling, machine compliance, amplitude, load, and welding time. Other materials and equipment require recalibration. The transferable contribution is the loading-path framework: identify sufficient activation, locate diminishing returns, reshape the late-stage boundary condition, and validate the outcome through coupled process signals, seam architecture, and failure mode.'
    },
    zh: {
      matrixHeading: '跨材料适用性矩阵',
      matrixIntro: '本表将可迁移的加载路径与监测理念，同需要针对材料和设备重新标定的参数加以区分。',
      matrixCaption: 'Invar 36加载路径框架向所选材料与接头体系推广的潜力。',
      matrixCol1: '材料或应用体系',
      matrixCol2: '共同的工艺挑战',
      matrixCol3: 'Invar 36研究的借鉴意义',
      matrixCol4: '主要重新标定要求',
      matrixR1C1: '高强度、低延性金属薄板',
      matrixR1C2: '早期充分活化，随后实施受控的后期加载，以限制减薄、过热、局部化和损伤',
      matrixR1C3: '提供一种位置触发框架，用于区分结合主导阶段与损伤主导阶段',
      matrixR1C4: '重新确定塌陷量窗口、触发位置、载荷历程及可接受的失效模式',
      matrixR2C1: 'Ti/Ti及钛合金接头',
      matrixR2C2: '工艺窗口狭窄，存在活化不足、过度减薄和开裂风险',
      matrixR2C3: '提示可利用塌陷量、法向载荷保持和后期剪切响应来确定载荷松弛时机',
      matrixR2C4: '验证主导损伤机制，并确定适用于钛材料的触发位置',
      matrixR3C1: '不锈钢及高强钢',
      matrixR3C2: '钝化膜、高变形抗力、加工硬化以及对过度压痕的敏感性',
      matrixR3C3: '为协调膜层破除、焊缝形成与后期压力调控提供一种途径',
      matrixR3C4: '根据牌号、相组成、表面状态、厚度和硬化行为重新标定',
      matrixR4C1: '不锈钢/Ti及其他硬质/硬质异种材料接头',
      matrixR4C2: '非对称变形、不均衡的声学响应以及局部载荷分配',
      matrixR4C3: '提供一种将塌陷量与法向载荷保持相分离，并监测偏轴或切向反力的框架',
      matrixR4C4: '将界面化学、反应层演化和变形不对称性纳入考量',
      matrixR5C1: '镍及镍基合金接头',
      matrixR5C2: '高塑性流动阻力与有限的变形协调能力可能加剧焊缝形成后的局部化',
      matrixR5C3: '支持以位移为核心对后期载荷和剪切进行调控',
      matrixR5C4: '确定特定合金的热学、声学、塑性和表面膜响应',
      matrixR6C1: 'Cu–Al极耳–汇流排及电池接头',
      matrixR6C2: '非对称压痕、氧化膜破除、压实、厚度损失、发热以及电性能波动',
      matrixR6C3: '将塌陷量视为状态/控制变量，并支持位移–载荷–功率融合',
      matrixR6C4: '验证电阻、剩余厚度、界面反应和服役失效',
      matrixR7C1: '多层极耳、箔材堆叠体及多线接头',
      matrixR7C2: '叠层压实、层间滑移、根部间隙闭合、工装敏感性和漂移',
      matrixR7C3: '位置约束可限制不必要的堆叠体压实和后期焊具压入',
      matrixR7C4: '根据层数、箔材厚度、叠层结构、电流路径和局部滑移重新标定',
      matrixScope: '范围说明。Δh = 0.5–0.7 mm的稳健区间仅适用于所报道的Invar 36试验配置。本矩阵指出可迁移的研究问题和监测逻辑；并未为其他材料体系提供经验证的工艺参数。',
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
      abstract: '摘要', keywords: '关键词', broader: '超声金属焊接的更广泛意义：加载路径控制、焊接塌陷量与过程监测', citation: '推荐引用',
      broader1: '本研究采用厚度为0.53 mm的Invar 36作为一种严苛的模型体系，用以研究超声波金属焊接中一项更具普遍性的挑战：在实现早期界面充分活化的同时，限制后期减薄、过热、再剪切与损伤累积。预设焊头–砧座间隙通过经标定的下止点来调控这一转变。当焊头到达该位置后，超声振动仍继续，而其向下行程受到约束，静态法向载荷则通过设备柔度得以松弛。这种由位置触发的边界条件变化，在振动振幅、法向载荷和焊接时间的设定保持不变的条件下，重塑了后期加载路径。',
      broader2: '这一框架对基于振幅、力、时间和能量的传统工艺描述构成补充。焊接塌陷量、载荷保持率、后期切向响应、发生器功率和温度表征了由这些设定所形成的状态。Invar试验结果表明，相近的最终塌陷量可能源于不同的载荷历程，并导致不同的焊缝构型和失效行为。这些信号可为工艺窗口设计、过程内监测以及针对特定工况的质量筛查提供支持。',
      broader3: '同样的活化–损伤竞争也适用于钛合金、高强钢、不锈钢、镍合金以及硬质/硬质异种材料接头；在这些材料体系中，高塑性流动阻力、稳定的表面膜或有限的局部塑性协调能力均可能使工艺窗口变窄。Cu–Al接头和电池极耳焊接所涉及的材料物理机制有所不同，但同样面临不对称塌陷、箔材堆叠体压实、焊头压入、剩余厚度、热量产生和工艺波动等挑战。在力和功率测量的辅助下，塌陷量可作为随过程演变的状态变量和控制触发量。',
      broader4: 'Δh = 0.5–0.7 mm的稳健区间仅适用于本研究所采用的Invar 36板材厚度、工装、设备柔度、振幅、载荷和焊接时间。其他材料和设备均需重新标定。具有可推广性的贡献在于这一加载路径框架：确定充分活化所需的条件，识别效益开始递减的位置，重塑后期边界条件，并通过相互耦合的工艺信号、焊缝构型和失效模式验证结果。'
    },
    ja: {
      matrixHeading: '材料横断的な適用可能性マトリクス',
      matrixIntro: '本表は、他材料系へ展開可能な荷重経路およびモニタリングの概念と、材料および装置ごとに再校正を要するパラメータとを区別する。',
      matrixCaption: '選定した材料・継手系に対する Invar 36 の荷重経路の枠組みの展開可能性。',
      matrixCol1: '材料または適用系',
      matrixCol2: '共通するプロセス上の課題',
      matrixCol3: 'Invar 36研究から得られる示唆',
      matrixCol4: '主な再校正要件',
      matrixR1C1: '高強度・低延性金属薄板',
      matrixR1C2: '初期に十分な活性化を実現した後、後期段階の荷重を制御し、板厚減少、過熱、局在化および損傷を抑制する',
      matrixR1C3: '接合支配段階と損傷支配段階を区分する位置トリガー型の枠組みを提示する',
      matrixR1C4: '圧潰量のウィンドウ、トリガー位置、荷重履歴および許容可能な破壊モードを改めて設定する',
      matrixR2C1: 'Ti/Tiおよびチタン合金継手',
      matrixR2C2: '活性化不足、過度の板厚減少、およびき裂発生のリスクを伴う狭いプロセスウィンドウ',
      matrixR2C3: '圧潰量、法線荷重保持、および後期段階のせん断応答を用いて荷重緩和のタイミングを設定することを示唆する',
      matrixR2C4: '支配的な損傷機構を検証し、チタン系材料に固有のトリガー位置を決定する',
      matrixR3C1: 'ステンレス鋼および高強度鋼',
      matrixR3C2: '不動態皮膜、高い変形抵抗、加工硬化、および過度の圧痕に対する感受性',
      matrixR3C3: '皮膜破壊および接合部形成と、後期段階の加圧制御とを協調させる手法を提示する',
      matrixR3C4: '鋼種、相構成、表面状態、板厚および硬化挙動に応じて再校正する',
      matrixR4C1: 'ステンレス鋼/Tiおよびその他の硬質材/硬質材異材継手',
      matrixR4C2: '非対称変形、不均衡な音響応答、および局所的な荷重分配',
      matrixR4C3: '圧潰量と法線荷重保持とを分離し、軸外方向または接線方向の反力を監視するための枠組みを提示する',
      matrixR4C4: '界面化学、反応層の発達、および変形非対称性を考慮する',
      matrixR5C1: 'ニッケルおよびニッケル基合金継手',
      matrixR5C2: '高い塑性流動抵抗と限られた変形追従性により、接合部形成後の局在化が強まる可能性がある',
      matrixR5C3: '変位を中心とした後期段階の荷重およびせん断の制御を支援する',
      matrixR5C4: '合金固有の熱的、音響的、塑性的および表面皮膜の応答を明らかにする',
      matrixR6C1: 'Cu–Alタブ–バスバーおよび電池接合部',
      matrixR6C2: '非対称な圧痕形成、酸化皮膜の破壊、圧密、板厚減少、発熱、および電気的性能のばらつき',
      matrixR6C3: '圧潰量を状態変数/制御変数として扱い、変位–荷重–電力の統合を支援する',
      matrixR6C4: '電気抵抗、残存板厚、界面反応、および供用時破壊を検証する',
      matrixR7C1: '多層タブ、箔積層体、および複数ワイヤ継手',
      matrixR7C2: '積層体の圧密、層間すべり、ルートギャップの閉鎖、ツーリング感受性、およびドリフト',
      matrixR7C3: '位置拘束により、不必要な積層体の圧密と後期段階のツール押込みを抑制できる可能性がある',
      matrixR7C4: '層数、箔厚、積層構成、電流経路、および局所すべりに応じて再校正する',
      matrixScope: '適用範囲に関する注記。Δh = 0.5–0.7 mm のロバスト区間は、本研究で報告した Invar 36 の実験構成にのみ適用される。本マトリクスは、他材料系へ展開可能な研究課題およびモニタリングの論理を示すものであり、他の材料系に対して検証済みのプロセスパラメータを提示するものではない。',
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
      abstract: '要旨', keywords: 'キーワード', broader: '超音波金属溶接への幅広い意義：荷重経路制御、溶接圧潰量、およびプロセスモニタリング', citation: '推奨引用',
      broader1: '本研究では、厚さ0.53 mmのInvar 36を厳しいモデル系として用い、超音波金属溶接におけるより広範な課題、すなわち、初期段階で十分な界面活性化を達成しつつ、後期段階における板厚減少、過熱、再せん断、および損傷蓄積を抑制するという課題を検討した。あらかじめ設定したホーン–アンビル間隙は、校正された下死点を介してこの移行に対処する。ホーンがその位置に到達すると、超音波振動は継続する一方で下向き移動が拘束され、静的法線荷重は装置コンプライアンスによって緩和される。この位置をトリガーとする境界条件の変化は、振動振幅、法線荷重、および溶接時間の設定を一定に保ったまま、後期段階の荷重経路を再構成する。',
      broader2: 'この枠組みは、振幅、力、時間、およびエネルギーに基づく従来のプロセス記述を補完する。溶接圧潰量、荷重保持率、後期段階の接線方向応答、発振器出力、および温度は、これらの設定によって生じる状態を示す。Invarの結果は、同程度の最終圧潰量であっても、異なる荷重履歴から生じ、異なる接合部構造および破壊挙動につながり得ることを示している。これらの信号は、プロセスウィンドウの設計、インプロセスモニタリング、および条件別の品質スクリーニングを支援する。',
      broader3: '同様の活性化–損傷競合は、チタン合金、高強度鋼、ステンレス鋼、ニッケル合金、および硬質材/硬質材の異材接合にも関係する。これらの材料系では、高い塑性流動抵抗、安定した表面皮膜、または局所的な塑性変形能の制約によって、プロセスウィンドウが狭くなり得る。Cu–Al接合およびバッテリータブ溶接では材料物理が異なるものの、非対称な圧潰、箔積層体の圧密、ホーンの押込み、残存板厚、発熱、およびプロセス変動に伴う課題を共有している。圧潰量は、荷重および電力の測定と併用することで、プロセスの進行とともに変化する状態変数および制御トリガーとして機能し得る。',
      broader4: 'Δh = 0.5–0.7 mmのロバスト区間は、本研究で用いたInvar 36板材の厚さ、ツーリング、装置コンプライアンス、振幅、荷重、および溶接時間にのみ適用される。他の材料や装置については再校正が必要である。他条件へ展開可能な貢献は、この荷重経路の枠組みにある。すなわち、十分な活性化を特定し、効果が逓減し始める点を見極め、後期段階の境界条件を再構成し、相互に連成するプロセス信号、接合部構造、および破壊モードを通じて結果を検証することである。'
    },
    de: {
      matrixHeading: 'Werkstoffübergreifende Anwendbarkeitsmatrix',
      matrixIntro: 'Die Tabelle grenzt die übertragbaren Konzepte der Belastungspfadgestaltung und Prozessüberwachung von Parametern ab, die eine werkstoff- und anlagenspezifische Neukalibrierung erfordern.',
      matrixCaption: 'Potenzielle Übertragbarkeit des Invar-36-Belastungspfadkonzepts auf ausgewählte Werkstoff- und Verbindungssysteme.',
      matrixCol1: 'Werkstoff- oder Anwendungssystem',
      matrixCol2: 'Gemeinsame prozesstechnische Herausforderung',
      matrixCol3: 'Relevanz der Invar-36-Studie',
      matrixCol4: 'Wichtigste Anforderung an die Neukalibrierung',
      matrixR1C1: 'Hochfeste Metallbleche mit geringer Duktilität',
      matrixR1C2: 'Ausgeprägte Aktivierung in der Frühphase, gefolgt von einer kontrollierten Belastung in der Spätphase, um Ausdünnung, Überhitzung, Lokalisierung und Schädigung zu begrenzen',
      matrixR1C3: 'Stellt ein positionsausgelöstes Konzept zur Trennung bindungsdominierter und schädigungsdominierter Phasen bereit',
      matrixR1C4: 'Kollapsfenster, Auslöseposition, Kraftverlauf und zulässige Versagensmodi neu bestimmen',
      matrixR2C1: 'Ti/Ti-Verbindungen und Verbindungen aus Titanlegierungen',
      matrixR2C2: 'Enges Prozessfenster mit Risiken unzureichender Aktivierung, übermäßiger Ausdünnung und Rissbildung',
      matrixR2C3: 'Legt nahe, Kollaps, Normalkraft-Haltephase und Scherreaktion in der Spätphase zu nutzen, um den Zeitpunkt des Lastabbaus festzulegen',
      matrixR2C4: 'Dominierenden Schädigungsmechanismus validieren und eine titanspezifische Auslöseposition bestimmen',
      matrixR3C1: 'Nichtrostende und hochfeste Stähle',
      matrixR3C2: 'Passivschichten, hoher Verformungswiderstand, Kaltverfestigung und Empfindlichkeit gegenüber übermäßiger Eindrückung',
      matrixR3C3: 'Bietet einen Ansatz, das Aufbrechen der Passivschichten und die Nahtbildung mit der Druckregelung in der Spätphase abzustimmen',
      matrixR3C4: 'Unter Berücksichtigung von Werkstoffgüte, Phasenzusammensetzung, Oberflächenzustand, Dicke und Verfestigungsverhalten neu kalibrieren',
      matrixR4C1: 'Verbindungen aus nichtrostendem Stahl und Ti sowie andere artungleiche Hart–Hart-Verbindungen',
      matrixR4C2: 'Asymmetrische Verformung, ungleiche akustische Antwort und lokalisierte Lastaufteilung',
      matrixR4C3: 'Stellt ein Konzept zur Entkopplung des Kollapses von der Normalkraft-Haltephase und zur Überwachung außeraxialer oder tangentialer Reaktionskräfte bereit',
      matrixR4C4: 'Grenzflächenchemie, Entwicklung der Reaktionsschicht und Verformungsasymmetrie einbeziehen',
      matrixR5C1: 'Verbindungen aus Nickel und Nickelbasislegierungen',
      matrixR5C2: 'Hoher Fließwiderstand und begrenzte Akkommodationsfähigkeit können die Lokalisierung nach der Nahtbildung verstärken',
      matrixR5C3: 'Unterstützt eine wegorientierte Regelung von Kraft und Scherung in der Spätphase',
      matrixR5C4: 'Das legierungsspezifische thermische, akustische und plastische Verhalten sowie das Verhalten der Oberflächenfilme bestimmen',
      matrixR6C1: 'Cu–Al-Verbindungen von Batterielaschen mit Stromschienen sowie sonstige Batterieverbindungen',
      matrixR6C2: 'Asymmetrische Eindrückung, Aufbrechen der Oxidschichten, Verdichtung, Dickenverlust, Erwärmung und Schwankungen der elektrischen Leistungsfähigkeit',
      matrixR6C3: 'Behandelt den Kollaps als Zustands- und Regelgröße und unterstützt die Fusion von Weg-, Kraft- und Leistungssignalen',
      matrixR6C4: 'Elektrischen Widerstand, Restdicke, Grenzflächenreaktionen und Versagen unter Einsatzbedingungen validieren',
      matrixR7C1: 'Mehrlagige Batterielaschen, Folienstapel und Mehrdrahtverbindungen',
      matrixR7C2: 'Lagenverdichtung, Gleiten zwischen den Lagen, Schließen des Wurzelspalts, Empfindlichkeit gegenüber dem Werkzeugsystem und Prozessdrift',
      matrixR7C3: 'Positionsbegrenzungen können eine unnötige Verdichtung des Stapels und das Eindringen des Werkzeugs in der Spätphase begrenzen',
      matrixR7C4: 'Für Lagenzahl, Foliendicke, Stapelaufbau, Strompfad und lokales Gleiten neu kalibrieren',
      matrixScope: 'Hinweis zum Geltungsbereich. Das robuste Intervall Δh = 0,5–0,7 mm gilt nur für die beschriebene Invar-36-Konfiguration. Die Matrix identifiziert übertragbare Forschungsfragen und eine übertragbare Überwachungslogik; sie stellt keine validierten Prozessparameter für andere Werkstoffsysteme bereit.',
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
      abstract: 'Abstract', keywords: 'Schlüsselwörter', broader: 'Breitere Relevanz für das Ultraschall-Metallschweißen: Steuerung des Belastungspfads, Schweißkollaps und Prozessüberwachung', citation: 'Empfohlene Zitierweise',
      broader1: 'Diese Studie verwendet 0,53 mm dickes Invar 36 als anspruchsvolles Modellsystem für eine übergreifende Herausforderung des Ultraschallmetallschweißens: eine hinreichende Aktivierung der Grenzfläche in der Frühphase zu erreichen und zugleich Ausdünnung, Überhitzung, erneutes Scheren und Schadensakkumulation in der Spätphase zu begrenzen. Der voreingestellte Sonotroden–Amboss-Spalt trägt diesem Übergang durch einen kalibrierten unteren Totpunkt Rechnung. Sobald die Sonotrode diese Position erreicht, wird die Ultraschallschwingung fortgesetzt, während ihr Abwärtshub begrenzt ist und sich die statische Normalkraft aufgrund der Maschinennachgiebigkeit abbaut. Diese positionsausgelöste Änderung der Randbedingungen gestaltet den Belastungspfad in der Spätphase bei gleichbleibenden Einstellungen für Schwingungsamplitude, Normalkraft und Schweißzeit neu.',
      broader2: 'Dieses Konzept ergänzt herkömmliche Prozessbeschreibungen, die auf Amplitude, Kraft, Zeit und Energie beruhen. Schweißkollaps, Krafterhaltung, tangentiale Reaktion in der Spätphase, Generatorleistung und Temperatur kennzeichnen den von diesen Einstellungen erzeugten Zustand. Die Ergebnisse für Invar zeigen, dass ein ähnlicher Endkollaps aus unterschiedlichen Kraftverläufen hervorgehen und zu unterschiedlichen Nahtarchitekturen und unterschiedlichem Versagensverhalten führen kann. Diese Signale unterstützen die Auslegung des Prozessfensters, die prozessbegleitende Überwachung und die bedingungsspezifische Qualitätsprüfung.',
      broader3: 'Derselbe Wettbewerb zwischen Aktivierung und Schädigung ist auch für Titanlegierungen, hochfeste Stähle, nichtrostende Stähle, Nickellegierungen und artungleiche Hart–Hart-Verbindungen relevant, bei denen ein hoher Fließwiderstand, stabile Oberflächenfilme oder eine begrenzte Fähigkeit zur lokalen plastischen Akkommodation das Prozessfenster verengen können. Cu–Al-Verbindungen und das Schweißen von Batterielaschen weisen zwar eine andere Werkstoffphysik auf, stehen jedoch vor ähnlichen Herausforderungen im Zusammenhang mit asymmetrischem Kollaps, der Verdichtung von Folienstapeln, dem Eindringen der Sonotrode, der Restdicke, der Wärmeentwicklung und der Prozessvariabilität. Der Kollaps kann – unterstützt durch Kraft- und Leistungsmessungen – als sich entwickelnde Zustandsvariable und als Auslöser für die Regelung dienen.',
      broader4: 'Das robuste Intervall Δh = 0,5–0,7 mm gilt ausschließlich für die Dicke des Invar-36-Blechs, das Werkzeugsystem, die Maschinennachgiebigkeit, die Schwingungsamplitude, die Normalkraft und die Schweißzeit dieser Untersuchung. Andere Werkstoffe und Anlagen erfordern eine Neukalibrierung. Der übertragbare Beitrag liegt im Belastungspfadkonzept: eine hinreichende Aktivierung bestimmen, den Punkt des abnehmenden Grenznutzens ermitteln, die Randbedingung der Spätphase neu gestalten und das Ergebnis anhand gekoppelter Prozesssignale sowie der Nahtarchitektur und des Versagensmodus validieren.'
    },
    fr: {
      matrixHeading: 'Matrice d’applicabilité à différents matériaux',
      matrixIntro: 'Le tableau distingue, d’une part, les concepts transférables relatifs au chemin de chargement et à la surveillance et, d’autre part, les paramètres qui nécessitent un recalibrage propre au matériau et à la machine.',
      matrixCaption: 'Transfert potentiel du cadre fondé sur le chemin de chargement établi pour l’Invar 36 à une sélection de systèmes de matériaux et d’assemblages.',
      matrixCol1: 'Système de matériaux ou d’application',
      matrixCol2: 'Défi commun lié au procédé',
      matrixCol3: 'Pertinence de l’étude sur l’Invar 36',
      matrixCol4: 'Principale exigence de recalibrage',
      matrixR1C1: 'Tôles métalliques à haute résistance et à faible ductilité',
      matrixR1C2: 'Forte activation au stade initial, suivie d’un chargement contrôlé au stade tardif afin de limiter l’amincissement, la surchauffe, la localisation des déformations et l’endommagement',
      matrixR1C3: 'Propose un cadre déclenché par la position permettant de distinguer les stades dominés par la formation de liaisons de ceux dominés par l’endommagement',
      matrixR1C4: 'Redéfinir la fenêtre d’affaissement, la position de déclenchement, l’historique de force et les modes de rupture admissibles',
      matrixR2C1: 'Assemblages Ti/Ti et en alliages de titane',
      matrixR2C2: 'Fenêtre de procédé étroite, avec des risques d’activation insuffisante, d’amincissement excessif et de fissuration',
      matrixR2C3: 'Suggère d’utiliser l’affaissement, le palier de force normale et la réponse au cisaillement au stade tardif pour déterminer le moment du relâchement de la charge',
      matrixR2C4: 'Valider le mécanisme d’endommagement dominant et déterminer une position de déclenchement propre au titane',
      matrixR3C1: 'Aciers inoxydables et aciers à haute résistance',
      matrixR3C2: 'Films passifs, forte résistance à la déformation, écrouissage et sensibilité à une indentation excessive',
      matrixR3C3: 'Offre une voie pour coordonner la rupture des films et la formation du joint soudé avec la régulation de la pression au stade tardif',
      matrixR3C4: 'Recalibrer en fonction de la nuance, de la constitution des phases, de l’état de surface, de l’épaisseur et du comportement d’écrouissage',
      matrixR4C1: 'Assemblages acier inoxydable/Ti et autres assemblages dissemblables dur–dur',
      matrixR4C2: 'Déformation asymétrique, réponse acoustique inégale et répartition localisée de la charge',
      matrixR4C3: 'Fournit un cadre pour dissocier l’affaissement du palier de charge normale et surveiller les réactions hors axe ou tangentielles',
      matrixR4C4: 'Prendre en compte la chimie interfaciale, le développement de la couche de réaction et l’asymétrie de la déformation',
      matrixR5C1: 'Assemblages en nickel et en alliages à base de nickel',
      matrixR5C2: 'Une résistance élevée à l’écoulement et une capacité d’accommodation limitée peuvent accentuer la localisation après la formation du joint soudé',
      matrixR5C3: 'Favorise une régulation, pilotée par le déplacement, de la force et du cisaillement au stade tardif',
      matrixR5C4: 'Établir les réponses thermiques, acoustiques, plastiques et liées aux films de surface propres à chaque alliage',
      matrixR6C1: 'Assemblages Cu–Al entre languette et barre collectrice, et assemblages de batteries',
      matrixR6C2: 'Indentation asymétrique, rupture des couches d’oxyde, compactage, perte d’épaisseur, échauffement et variabilité des performances électriques',
      matrixR6C3: 'Traite l’affaissement comme une variable d’état et de commande et prend en charge la fusion des signaux de déplacement, de force et de puissance',
      matrixR6C4: 'Valider la résistance électrique, l’épaisseur résiduelle, les réactions interfaciales et les défaillances en service',
      matrixR7C1: 'Languettes multicouches, empilements de feuilles et assemblages multifilaires',
      matrixR7C2: 'Compactage des couches, glissement intercouche, fermeture du jeu à la racine, sensibilité à l’outillage et dérive du procédé',
      matrixR7C3: 'Les contraintes de position peuvent limiter le compactage inutile de l’empilement et la pénétration de l’outil au stade tardif',
      matrixR7C4: 'Recalibrer en fonction du nombre de couches, de l’épaisseur des feuilles, de l’architecture de l’empilement, du trajet du courant et du glissement local',
      matrixScope: 'Note de portée. L’intervalle robuste Δh = 0,5–0,7 mm ne s’applique qu’à la configuration en Invar 36 décrite. La matrice recense les questions de recherche et la logique de surveillance transférables ; elle ne fournit aucun paramètre de procédé validé pour d’autres systèmes de matériaux.',
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
      abstract: 'Résumé', keywords: 'Mots-clés', broader: 'Pertinence élargie pour le soudage ultrasonore des métaux : pilotage du chemin de chargement, affaissement de la soudure et surveillance du procédé', citation: 'Citation recommandée',
      broader1: 'Cette étude utilise l’Invar 36 de 0,53 mm d’épaisseur comme système modèle exigeant pour étudier un défi plus large du soudage ultrasonore des métaux : obtenir une activation interfaciale suffisante au stade initial tout en limitant, au stade tardif, l’amincissement, la surchauffe, le recisaillement et l’accumulation de dommages. L’écartement préréglé entre la sonotrode et l’enclume permet de gérer cette transition grâce à un point mort bas calibré. Lorsque la sonotrode atteint cette position, la vibration ultrasonore se poursuit, sa course descendante est contrainte et la charge normale statique se relâche sous l’effet de la compliance mécanique de la machine. Cette modification des conditions aux limites, déclenchée par la position, reconfigure le chemin de chargement au stade tardif pour des réglages fixes de l’amplitude vibratoire, de la charge normale et du temps de soudage.',
      broader2: 'Ce cadre complète les descriptions conventionnelles du procédé fondées sur l’amplitude, la force, le temps et l’énergie. L’affaissement de la soudure, le maintien de la force, la réponse tangentielle en phase tardive, la puissance du générateur et la température indiquent l’état produit par ces réglages. Les résultats obtenus sur l’Invar montrent qu’un affaissement final similaire peut résulter d’historiques de force différents et conduire à des architectures de joints soudés et à des comportements à la rupture différents. Ces signaux étayent la définition de la fenêtre de procédé, la surveillance en cours de procédé et le contrôle qualité adapté aux conditions.',
      broader3: 'La même compétition entre activation et endommagement concerne les alliages de titane, les aciers à haute résistance, les aciers inoxydables, les alliages de nickel et les assemblages dissemblables dur–dur, pour lesquels une résistance élevée à l’écoulement plastique, des films de surface stables ou une capacité limitée d’accommodation plastique locale peuvent rétrécir la fenêtre de procédé. Les assemblages Cu–Al et le soudage des languettes de batterie font intervenir une physique des matériaux différente, mais partagent des difficultés liées à un affaissement asymétrique, au compactage des empilements de feuilles, à la pénétration de la sonotrode, à l’épaisseur résiduelle, à la génération de chaleur et à la variabilité du procédé. L’affaissement peut servir de variable d’état évolutive et de déclencheur de commande, avec l’appui des mesures de force et de puissance.',
      broader4: 'L’intervalle robuste de Δh = 0,5–0,7 mm ne s’applique qu’à l’épaisseur de la tôle d’Invar 36, à l’outillage, à la compliance mécanique de la machine, à l’amplitude vibratoire, à la charge normale et au temps de soudage étudiés. D’autres matériaux et équipements nécessitent un recalibrage. L’apport transférable réside dans le cadre fondé sur le chemin de chargement : identifier une activation suffisante, repérer l’amorce des rendements décroissants, reconfigurer la condition aux limites au stade tardif et valider le résultat au moyen de signaux de procédé couplés, de l’architecture du joint soudé et du mode de rupture.'
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
