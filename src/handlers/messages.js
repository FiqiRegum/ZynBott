    /*
PERINGATAN KERAS
SCRIPT JANGAN DI RENAME
@Edogawa Senq
*/
    const fs = require("fs");
          const {
      getContentType,
      generateMessageID,
      jidDecode,
      downloadContentFromMessage,
      generateWAMessageFromContent,
      generateWAMessageContent,
      proto,
    } = require("edogawa-senq");
    const axios = require("axios");
    const baileys = require("edogawa-senq");
    const os = require("os");
    const https = require("https");
    const Jimp = require("jimp");
    const cheerio = require("cheerio");
    const ffmpeg = require("fluent-ffmpeg");
    const webp = require("node-webpmux");
    const magic = require("magic-bytes.js");
    const FormData = require("form-data");
    const { createCanvas, GlobalFonts, loadImage } = require("@napi-rs/canvas");
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const path = require("path");
    const img = new webp.Image();
    const process = require("process");
    const AdmZip = require("adm-zip");
    const { Client } = require("ssh2");
    const bochil = require("@bochilteam/scraper-games");
    const { exec } = require("child_process");
    const { drawBrat, getTimeOn, msToTime, getShop, drawBoardTtc, drawSuit, addWaterMark } = require("../services/function.js");
    const { translate } = require("@vitalets/google-translate-api");
    GlobalFonts.registerFromPath("./assets/fonta/Arial.ttf", "Arial");
    GlobalFonts.registerFromPath("./assets/fonts/Fontspring-DEMO-coupletcf-bold.otf", "CoupletBold");


module.exports = async (store, message, EdogawaSenq, context) => {
  try {
    const pingMs = performance.now();

    // GLOBAL
    require("../config/config.js");
    const lines = botStyle;
    global.socks = EdogawaSenq;

    // START UP
    const {
      enc,
      hdr,
      sendVnThumbnail,
      senCopy,
      apiv1,
      apiv2,
      apiv3,
      apiv4,
      apiv5,
      apiv6,
      apiv7,
      apiv8,
      apiv9,
      apiv10,
      EdogawaSenqMath,
          EdogawaSenqKimia,
          EdogawaSenqBiologi,
          EdogawaSenqFisika,
          EdogawaSenqGeografi,
          EdogawaSenqSejarah,
      fakeDev,
      sendVn,
      drawBoardChess,
        charToX,
        getUnicodePiece,
        isInsideBoard,
        getPieceType,
        getPieceOwner,
        isEnemy,
        getValidMoves,
        drawMaskChess,
        xToChar,
        getAllValidMoves,
        findKingPosition,
        isUnderAttack,
        hasAnyLegalMove,
        smeme,
        getAllLegalEscapeMoves,
        cekPionDiUjung,
        movePiece,
        getAllLegalMoves,
        getMovesForPiece,
        applyMove,
        isKingInCheck,
        copyBoard,
        getCapturedPieces,
      encHard,
      rchApikey,
      sena,
      sen,
      getValidButtonReply,
      getValidButtonList,
      downloadToBuffer,
      sendThumb,
      toAudio,
      getBuffer,
      imageToUrl,
      imageToWebp,
      menuAudio,
      videoToWebp,
      exif,
      example,
      addRewards,
      message,
      metadata,
      db,
      pterodactyl,
      mType,
      body,
      args,
      parts,
      text,
      prefix,
      command,
      bentarYa,
      qmsg,
      qType,
      qBody,
      qSender,
      qId,
      media,
      mime,
      botJid,
      botNumberJid,
      botNumber,
      jid,
      read,
      isBaileys,
      isGroup,
      senderJid,
      sender,
      isBotNumber,
      groups,
      isOwner,
      isPrem,
      isMurbug,
      profil,
      isLimit,
      isAdmin,
      isBotAdmin,
      sleep,
      onlyBotNumber,
      onlyOwner,
      onlyPrem,
      onlyMurbug,
      onlyAdmin,
      onlyBotAdmin,
      onlyGrup,
      needLimit,
      decode,
      add,
      saveDb,
      sendMedia,
      randomName,
      random,
      pickRandom,
      pinterest,
      ephoto,
      mpegToOpus,
      formatRupiah,
      mediafireDl,
      getTimeH,
      getTimeS,
      caseTop,
      addUser,

      caseCekCek,
      caseSound,
      caseSticker,
      caseSticker2,
      caseCvAudio,
      caseAnime,
      caseTranslate,
      caseSad,
      fixNumber,
      movePlayerMc,
      loadWorld,
      buy,
      updateFarmAndKolamLevels,
      updatePet,
      reduceLimit,
      react,
      caseKane,
      folderToZip,
      addFolder,
      toVideo,
      clearFolder,
      imageToVideo,
      posToIndex,
      indexToPos,
      removePlayer,
      addPlayer,
      nextTurn,
      movePlayer,

      hexToRgba,
      parseCell,
      drawBoardUlarTangga,
      getPlayerImage,
      getMetadata,
      mHeader,
      ucapan,
      handleError,
      searchJid,
      qList,
    } = context;
    const m = message.messages[0];
    if (!m || !m.message) return;
    if (senderJid === null) return;

    if (isGroup) {
      if (!db.totalchat?.[jid]) db.totalchat[jid] = {};
      if (!db.totalchat[jid][sender]) {
        db.totalchat[jid][sender] = 1;
      } else {
        db.totalchat[jid][sender] += 1;
      }
      saveDb();
    }

    const apikey = pterodactyl[1].api;
    const capikey = pterodactyl[1].client;
    const domain = pterodactyl[1].domain;

    const apikey2 = pterodactyl[2].api;
    const capikey2 = pterodactyl[2].client;
    const domain2 = pterodactyl[2].domain;

    const apikey3 = pterodactyl[3].api;
    const capikey3 = pterodactyl[3].client;
    const domain3 = pterodactyl[3].domain;

    const apikey4 = pterodactyl[4].api;
    const capikey4 = pterodactyl[4].client;
    const domain4 = pterodactyl[4].domain;

    const apikey5 = pterodactyl[5].api;
    const capikey5 = pterodactyl[5].client;
    const domain5 = pterodactyl[5].domain;

    // all function

    const qFake = typeQuoted === "null" ? null : qList[typeQuoted];

    if (db.autoreadchat && !isGroup) EdogawaSenq.readMessages([m.key]);
    if (db.autoreadgrub && isGroup) EdogawaSenq.readMessages([m.key]);
    if (db.autoreadsw && jid == "status@broadcast") EdogawaSenq.readMessages([m.key]);

    async function caseText(command) {
      if (!text) return example("text");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let link;
      if (/glitchtext/.test(command)) link = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
      if (/writetext/.test(command)) link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
      if (/advancedglow/.test(command)) link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
      if (/typographytext/.test(command)) link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
      if (/pixelglitch/.test(command)) link = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
      if (/neonglitch/.test(command)) link = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
      if (/flagtext/.test(command)) link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
      if (/flag3dtext/.test(command)) link = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
      if (/deletingtext/.test(command)) link = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
      if (/blackpinkstyle/.test(command)) link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
      if (/glowingtext/.test(command)) link = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
      if (/underwatertext/.test(command)) link = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
      if (/logomaker/.test(command)) link = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
      if (/cartoonstyle/.test(command)) link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
      if (/papercutstyle/.test(command)) link = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
      if (/watercolortext/.test(command)) link = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
      if (/effectclouds/.test(command)) link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
      if (/blackpinklogo/.test(command)) link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
      if (/gradienttext/.test(command)) link = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
      if (/summerbeach/.test(command)) link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
      if (/luxurygold/.test(command)) link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
      if (/multicoloredneon/.test(command)) link = "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
      if (/sandsummer/.test(command)) link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
      if (/galaxywallpaper/.test(command)) link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
      if (/1917style/.test(command)) link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
      if (/makingneon/.test(command)) link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
      if (/royaltext/.test(command)) link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
      if (/freecreate/.test(command)) link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
      if (/galaxystyle/.test(command)) link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
      if (/lighteffects/.test(command)) link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
      let result = await getBuffer(await ephoto(link, text));
      await sendMedia(result, `Berhasil style text *${text}* dengan *${command}*`);
      await reduceLimit();
    }

    async function SnackVideo(url) {
      try {
        const response = await axios.get(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          },
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const videoObjectScript = $('script[type="application/ld+json"]').first().html();
        const videoData = JSON.parse(videoObjectScript);

        const nuxtScript = $("script")
          .filter((i, el) => $(el).html()?.includes("window.__NUXT__"))
          .first()
          .html();

        const nuxtMatch = nuxtScript.match(/window\.__NUXT__=\(function\(([^)]+)\)\{return ([^}]+)\}\)/);
        let nuxtData = {};
        if (nuxtMatch) {
          nuxtData = JSON.parse(nuxtMatch[2]);
        }

        const photoList = nuxtData.data?.[0]?.photoList?.[0] || {};

        const result = {
          judul: videoData.description,
          kategori: videoData.genre || [],
          id_video: videoData.url?.split("/").pop() || url.split("/").pop(),
          durasi: videoData.duration?.replace("PT", "").replace("S", "") + " detik",
          upload_date: new Date(videoData.uploadDate).toLocaleDateString("id-ID"),
          dimensi: `${videoData.width}x${videoData.height}`,

          statistik: {
            likes: photoList.like_count || videoData.interactionStatistic?.[1]?.userInteractionCount || "N/A",
            comments: videoData.commentCount,
            shares: photoList.forward_count || videoData.interactionStatistic?.[2]?.userInteractionCount || "N/A",
            views: photoList.view_count || videoData.interactionStatistic?.[0]?.userInteractionCount || "N/A",
          },

          user: {
            username: videoData.creator?.mainEntity?.name,
            user_id: videoData.creator?.mainEntity?.identifier,
            bio: videoData.creator?.mainEntity?.description,
            followers: videoData.creator?.mainEntity?.interactionStatistic?.[1]?.userInteractionCount || "N/A",
            total_likes: videoData.creator?.mainEntity?.interactionStatistic?.[0]?.userInteractionCount || "N/A",
            verified: videoData.creator?.mainEntity?.verifiedNum ? "Ya" : "Tidak",
          },

          media: {
            video_url: videoData.contentUrl,
            thumbnail: videoData.thumbnailUrl?.[0],
            avatar_user: videoData.creator?.mainEntity?.image,
          },
        };

        return result;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    async function cpanel5(command) {
      try {
        if (!isPrem) return onlyPrem();
        if (domain5 === "" || apikey5 === "" || capikey5 === "")
          return sen(`Domain, Plta & Pltc belum di set! ketik .setdom-v5 .setplta-v5 .setpltc-v5 agar panel bisa di buat!`);

        let [user, nomorusr] = text.split(",").map((i) => i.trim());
        if (!nomorusr) nomorusr = sender;
        nomorusr = await decode(nomorusr);
        if (!user || !nomorusr) return example("senq, 6283172458949");

        if (!nomorusr) return sen("tolong masukan nomor yang terdaftar di whatsapp!!");

        let nomor = nomorusr;
        let email = `${user}@senq.xyz`;
        let password = user + random(10, 99);

        const sizeMap = Object.fromEntries(
          Array.from({ length: 10 }, (_, i) => [
            `${i + 1}gb-v5`,
            {
              ram: `${i + 1}125`,
              disk: `${i + 1}125`,
              cpu: `${40 + i * 20}`,
            },
          ])
        );
        const { ram, disk, cpu } = sizeMap[command] || {
          ram: "0",
          disk: "0",
          cpu: "0",
        };

        let f;
        try {
          f = await fetch(`${domain5}/api/application/users`, {
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey5,
            },
            body: JSON.stringify({
              email,
              username: user.clear(),
              first_name: user,
              last_name: name,
              language: "en",
              password,
            }),
          });
        } catch (e) {
          return await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let data = await f?.json();
        let txtEror = data.errors
          ? data.errors[0].detail == "The email has already been taken."
            ? "Ganti namanya anjing itu dah ada monyet"
            : data.errors[0].detail === "The email must be a valid email address."
            ? "Namanya huruf ama angka doang kontol"
            : data.errors[0].detail.match(`The username must start and end with alpha-numeric characters and`)
            ? "Nama apaan anjing 2 huruf, lebihin napa kontol"
            : data.errors[0].detail
          : "";
        if (data.errors) return await sen(txtEror);

        let usr_id = data.attributes.id;
        let startup_cmd = (
          await (
            await fetch(`${domain5}/api/application/nests/${db.nests5}/eggs/${db.egg5}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey5}`,
              },
            })
          ).json()
        ).attributes?.startup;
        if (!startup_cmd)
          return sen(
            "id nests atau id egg bot tidak sesuai silahkan set ulang id nests sama id egg dengan ketik\n\n .setnests id nests dan .seteggs id egg\nuntuk melihat id nests atau id egg buka web panel bagian admin di sidebar kiri ada nests beserta id² nya pilih id nests yang dimana ada egg bot"
          );

        let f2;
        try {
          f2 = await fetch(`${domain5}/api/application/servers`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apikey5}`,
            },
            body: JSON.stringify({
              name: user,
              description: name,
              user: usr_id,
              egg: parseInt(db.egg5),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_22",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(db.loc4)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
        } catch (e) {
          await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let result = await f2.json();
        if (result.errors) return await sen(JSON.stringify(result.errors, null, 2));

        let infoPanel = `${b3}
${topStyle} Info Panel
${leftStyle} Cpu     : ${cpu}
${leftStyle} Ram     : ${ram}
${leftStyle} Disk    : ${disk}
${leftStyle} Email   : ${email}
${leftStyle} Srv Id  : ${result.attributes.id}
${leftStyle} Usr Id  : ${usr_id}
${botStyle}
${b3}`;

        await sen(infoPanel);

        let dataPanel = `${b3}
${topStyle} Data Panel
${leftStyle} Username   : ${data.attributes.username}
${leftStyle} Password   : ${password}
${leftStyle} Link Login : ${domain5}
${botStyle}
${b3}`;

        await sen(dataPanel, searchJid(nomor));
      } catch (e) {
        sena(e.message);
      }
    }
    async function cpanel4(command) {
      try {
        if (!isPrem) return onlyPrem();
        if (domain4 === "" || apikey4 === "" || capikey4 === "")
          return sen(`Domain, Plta & Pltc belum di set! ketik .setdom-v4 .setplta-v4 .setpltc-v4 agar panel bisa di buat!`);

        let [user, nomorusr] = text.split(",").map((i) => i.trim());
        if (!nomorusr) nomorusr = sender;
        nomorusr = await decode(nomorusr);
        if (!user || !nomorusr) return example("senq, 6283172458949");

        if (!nomorusr) return sen("tolong masukan nomor yang terdaftar di whatsapp!!");

        let nomor = nomorusr;
        let email = `${user}@senq.xyz`;
        let password = user + random(10, 99);

        const sizeMap = Object.fromEntries(
          Array.from({ length: 10 }, (_, i) => [
            `${i + 1}gb-v4`,
            {
              ram: `${i + 1}125`,
              disk: `${i + 1}125`,
              cpu: `${40 + i * 20}`,
            },
          ])
        );
        const { ram, disk, cpu } = sizeMap[command] || {
          ram: "0",
          disk: "0",
          cpu: "0",
        };

        let f;
        try {
          f = await fetch(`${domain4}/api/application/users`, {
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey4,
            },
            body: JSON.stringify({
              email,
              username: user.clear(),
              first_name: user,
              last_name: name,
              language: "en",
              password,
            }),
          });
        } catch (e) {
          return await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let data = await f?.json();
        let txtEror = data.errors
          ? data.errors[0].detail == "The email has already been taken."
            ? "Ganti namanya anjing itu dah ada monyet"
            : data.errors[0].detail === "The email must be a valid email address."
            ? "Namanya huruf ama angka doang kontol"
            : data.errors[0].detail.match(`The username must start and end with alpha-numeric characters and`)
            ? "Nama apaan anjing 2 huruf, lebihin napa kontol"
            : data.errors[0].detail
          : "";
        if (data.errors) return await sen(txtEror);

        let usr_id = data.attributes.id;
        let startup_cmd = (
          await (
            await fetch(`${domain4}/api/application/nests/${db.nests4}/eggs/${db.egg4}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey4}`,
              },
            })
          ).json()
        ).attributes?.startup;
        if (!startup_cmd)
          return sen(
            "id nests atau id egg bot tidak sesuai silahkan set ulang id nests sama id egg dengan ketik\n\n .setnests id nests dan .seteggs id egg\nuntuk melihat id nests atau id egg buka web panel bagian admin di sidebar kiri ada nests beserta id² nya pilih id nests yang dimana ada egg bot"
          );

        let f2;
        try {
          f2 = await fetch(`${domain4}/api/application/servers`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apikey4}`,
            },
            body: JSON.stringify({
              name: user,
              description: name,
              user: usr_id,
              egg: parseInt(db.egg4),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_22",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(db.loc4)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
        } catch (e) {
          await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let result = await f2.json();
        if (result.errors) return await sen(JSON.stringify(result.errors, null, 2));

        let infoPanel = `${b3}
${topStyle} Info Panel
${leftStyle} Cpu     : ${cpu}
${leftStyle} Ram     : ${ram}
${leftStyle} Disk    : ${disk}
${leftStyle} Email   : ${email}
${leftStyle} Srv Id  : ${result.attributes.id}
${leftStyle} Usr Id  : ${usr_id}
${botStyle}
${b3}`;

        await sen(infoPanel);

        let dataPanel = `${b3}
${topStyle} Data Panel
${leftStyle} Username   : ${data.attributes.username}
${leftStyle} Password   : ${password}
${leftStyle} Link Login : ${domain4}
${botStyle}
${b3}`;

        await sen(dataPanel, searchJid(nomor));
      } catch (e) {
        sena(e.message);
      }
    }
    async function cpanel3(command) {
      try {
        if (!isPrem) return onlyPrem();
        if (domain3 === "" || apikey3 === "" || capikey3 === "")
          return sen(`Domain, Plta & Pltc belum di set! ketik .setdom-v3 .setplta-v3 .setpltc-v3 agar panel bisa di buat!`);

        let [user, nomorusr] = text.split(",").map((i) => i.trim());
        if (!nomorusr) nomorusr = sender;
        nomorusr = await decode(nomorusr);
        if (!user || !nomorusr) return example("senq, 6283172458949");

        if (!nomorusr) return sen("tolong masukan nomor yang terdaftar di whatsapp!!");

        let nomor = nomorusr;
        let email = `${user}@senq.xyz`;
        let password = user + random(10, 99);

        const sizeMap = Object.fromEntries(
          Array.from({ length: 10 }, (_, i) => [
            `${i + 1}gb-v3`,
            {
              ram: `${i + 1}125`,
              disk: `${i + 1}125`,
              cpu: `${40 + i * 20}`,
            },
          ])
        );
        const { ram, disk, cpu } = sizeMap[command] || {
          ram: "0",
          disk: "0",
          cpu: "0",
        };

        let f;
        try {
          f = await fetch(`${domain3}/api/application/users`, {
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey3,
            },
            body: JSON.stringify({
              email,
              username: user.clear(),
              first_name: user,
              last_name: name,
              language: "en",
              password,
            }),
          });
        } catch (e) {
          return await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let data = await f?.json();
        let txtEror = data.errors
          ? data.errors[0].detail == "The email has already been taken."
            ? "Ganti namanya anjing itu dah ada monyet"
            : data.errors[0].detail === "The email must be a valid email address."
            ? "Namanya huruf ama angka doang kontol"
            : data.errors[0].detail.match(`The username must start and end with alpha-numeric characters and`)
            ? "Nama apaan anjing 2 huruf, lebihin napa kontol"
            : data.errors[0].detail
          : "";
        if (data.errors) return await sen(txtEror);

        let usr_id = data.attributes.id;
        let startup_cmd = (
          await (
            await fetch(`${domain3}/api/application/nests/${db.nests3}/eggs/${db.egg3}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey3}`,
              },
            })
          ).json()
        ).attributes?.startup;
        if (!startup_cmd)
          return sen(
            "id nests atau id egg bot tidak sesuai silahkan set ulang id nests sama id egg dengan ketik\n\n .setnests id nests dan .seteggs id egg\nuntuk melihat id nests atau id egg buka web panel bagian admin di sidebar kiri ada nests beserta id² nya pilih id nests yang dimana ada egg bot"
          );

        let f2;
        try {
          f2 = await fetch(`${domain3}/api/application/servers`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apikey3}`,
            },
            body: JSON.stringify({
              name: user,
              description: name,
              user: usr_id,
              egg: parseInt(db.egg3),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_22",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(db.loc3)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
        } catch (e) {
          await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let result = await f2.json();
        if (result.errors) return await sen(JSON.stringify(result.errors, null, 2));

        let infoPanel = `${b3}
${topStyle} Info Panel
${leftStyle} Cpu     : ${cpu}
${leftStyle} Ram     : ${ram}
${leftStyle} Disk    : ${disk}
${leftStyle} Email   : ${email}
${leftStyle} Srv Id  : ${result.attributes.id}
${leftStyle} Usr Id  : ${usr_id}
${botStyle}
${b3}`;

        await sen(infoPanel);

        let dataPanel = `${b3}
${topStyle} Data Panel
${leftStyle} Username   : ${data.attributes.username}
${leftStyle} Password   : ${password}
${leftStyle} Link Login : ${domain3}
${botStyle}
${b3}`;

        await sen(dataPanel, searchJid(nomor));
      } catch (e) {
        sena(e.message);
      }
    }
    async function cpanel2(command) {
      try {
        if (!isPrem) return onlyPrem();
        if (domain2 === "" || apikey2 === "" || capikey2 === "")
          return sen(`Domain, Plta & Pltc belum di set! ketik .setdom-v2 .setplta-v2 .setpltc-v2 agar panel bisa di buat!`);

        let [user, nomorusr] = text.split(",").map((i) => i.trim());
        if (!nomorusr) nomorusr = sender;
        nomorusr = await decode(nomorusr);
        if (!user || !nomorusr) return example("senq, 6283172458949");

        if (!nomorusr) return sen("tolong masukan nomor yang terdaftar di whatsapp!!");

        let nomor = nomorusr;
        let email = `${user}@senq.xyz`;
        let password = user + random(10, 99);

        const sizeMap = Object.fromEntries(
          Array.from({ length: 10 }, (_, i) => [
            `${i + 1}gb-v2`,
            {
              ram: `${i + 1}125`,
              disk: `${i + 1}125`,
              cpu: `${40 + i * 20}`,
            },
          ])
        );
        const { ram, disk, cpu } = sizeMap[command] || {
          ram: "0",
          disk: "0",
          cpu: "0",
        };

        let f;
        try {
          f = await fetch(`${domain2}/api/application/users`, {
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey2,
            },
            body: JSON.stringify({
              email,
              username: user.clear(),
              first_name: user,
              last_name: name,
              language: "en",
              password,
            }),
          });
        } catch (e) {
          return await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let data = await f?.json();
        let txtEror = data.errors
          ? data.errors[0].detail == "The email has already been taken."
            ? "Ganti namanya anjing itu dah ada monyet"
            : data.errors[0].detail === "The email must be a valid email address."
            ? "Namanya huruf ama angka doang kontol"
            : data.errors[0].detail.match(`The username must start and end with alpha-numeric characters and`)
            ? "Nama apaan anjing 2 huruf, lebihin napa kontol"
            : data.errors[0].detail
          : "";
        if (data.errors) return await sen(txtEror);

        let usr_id = data.attributes.id;
        let startup_cmd = (
          await (
            await fetch(`${domain2}/api/application/nests/${db.nests2}/eggs/${db.egg2}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey2}`,
              },
            })
          ).json()
        ).attributes?.startup;
        if (!startup_cmd)
          return sen(
            "id nests atau id egg bot tidak sesuai silahkan set ulang id nests sama id egg dengan ketik\n\n .setnests id nests dan .seteggs id egg\nuntuk melihat id nests atau id egg buka web panel bagian admin di sidebar kiri ada nests beserta id² nya pilih id nests yang dimana ada egg bot"
          );

        let f2;
        try {
          f2 = await fetch(`${domain2}/api/application/servers`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apikey2}`,
            },
            body: JSON.stringify({
              name: user,
              description: name,
              user: usr_id,
              egg: parseInt(db.egg2),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_22",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(db.loc2)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
        } catch (e) {
          await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let result = await f2.json();
        if (result.errors) return await sen(JSON.stringify(result.errors, null, 2));

        let infoPanel = `${b3}
${topStyle} Info Panel
${leftStyle} Cpu     : ${cpu}
${leftStyle} Ram     : ${ram}
${leftStyle} Disk    : ${disk}
${leftStyle} Email   : ${email}
${leftStyle} Srv Id  : ${result.attributes.id}
${leftStyle} Usr Id  : ${usr_id}
${botStyle}
${b3}`;

        await sen(infoPanel);

        let dataPanel = `${b3}
${topStyle} Data Panel
${leftStyle} Username   : ${data.attributes.username}
${leftStyle} Password   : ${password}
${leftStyle} Link Login : ${domain2}
${botStyle}
${b3}`;

        await sen(dataPanel, searchJid(nomor));
      } catch (e) {
        sena(e.message);
      }
    }
    async function cpanel(command) {
      try {
        if (!isPrem) return onlyPrem();
        if (domain === "" || apikey === "" || capikey === "")
          return sen(`Domain, Plta & Pltc belum di set! ketik .setdom .setplta .setpltc agar panel bisa di buat!`);
        let [user, nomorusr] = text.split(",").map((i) => i.trim());
        if (!nomorusr) nomorusr = sender;
        nomorusr = await decode(nomorusr);
        if (!user || !nomorusr) return example("senq, 6283172458949");

        if (!nomorusr) return sen("tolong masukan nomor yang terdaftar di whatsapp!!");

        let nomor = nomorusr;
        let email = `${user}@senq.xyz`;
        let password = user + random(10, 99);

        const sizeMap = Object.fromEntries(
          Array.from({ length: 10 }, (_, i) => [
            `${i + 1}gb`,
            {
              ram: `${i + 1}125`,
              disk: `${i + 1}125`,
              cpu: `${40 + i * 20}`,
            },
          ])
        );
        const { ram, disk, cpu } = sizeMap[command] || {
          ram: "0",
          disk: "0",
          cpu: "0",
        };

        let f;
        try {
          f = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apikey,
            },
            body: JSON.stringify({
              email,
              username: user.clear(),
              first_name: user,
              last_name: name,
              language: "en",
              password,
            }),
          });
        } catch (e) {
          return await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let data = await f?.json();
        let txtEror = data.errors
          ? data.errors[0].detail == "The email has already been taken."
            ? "Ganti namanya anjing itu dah ada monyet"
            : data.errors[0].detail === "The email must be a valid email address."
            ? "Namanya huruf ama angka doang kontol"
            : data.errors[0].detail.match(`The username must start and end with alpha-numeric characters and`)
            ? "Nama apaan anjing 2 huruf, lebihin napa kontol"
            : data.errors[0].detail
          : "";
        if (data.errors) return await sen(txtEror);

        let usr_id = data.attributes.id;
        let startup_cmd = (
          await (
            await fetch(`${domain}/api/application/nests/${db.nests}/eggs/${db.egg}`, {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`,
              },
            })
          ).json()
        ).attributes?.startup;
        if (!startup_cmd)
          return sen(
            "id nests atau id egg bot tidak sesuai silahkan set ulang id nests sama id egg dengan ketik\n\n .setnests id nests dan .seteggs id egg\nuntuk melihat id nests atau id egg buka web panel bagian admin di sidebar kiri ada nests beserta id² nya pilih id nests yang dimana ada egg bot"
          );

        let f2;
        try {
          f2 = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${apikey}`,
            },
            body: JSON.stringify({
              name: user,
              description: name,
              user: usr_id,
              egg: parseInt(db.egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_22",
              startup: startup_cmd,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start",
              },
              limits: {
                memory: ram,
                swap: 0,
                disk,
                io: 500,
                cpu,
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5,
              },
              deploy: {
                locations: [parseInt(db.loc)],
                dedicated_ip: false,
                port_range: [],
              },
            }),
          });
        } catch (e) {
          await sen(`Domain Panel eror / server panel delay, coba lagi nanti`);
        }
        let result = await f2.json();
        if (result.errors) return await sen(JSON.stringify(result.errors, null, 2));

        let infoPanel = `${b3}
${topStyle} Info Panel
${leftStyle} Cpu     : ${cpu}
${leftStyle} Ram     : ${ram}
${leftStyle} Disk    : ${disk}
${leftStyle} Email   : ${email}
${leftStyle} Srv Id  : ${result.attributes.id}
${leftStyle} Usr Id  : ${usr_id}
${botStyle}
${b3}`;

        await sen(infoPanel);

        let dataPanel = `${b3}
${topStyle} Data Panel
${leftStyle} Username   : ${data.attributes.username}
${leftStyle} Password   : ${password}
${leftStyle} Link Login : ${domain}
${botStyle}
${b3}`;

        await sen(dataPanel, searchJid(nomor));
      } catch (e) {
        sena(e.message);
      }
    }

    async function uploadUguu(buffer) {
      const form = new FormData();
      form.append("files[]", buffer, `${Date.now()}.jpg`);
      const res = await fetch("https://uguu.se/upload.php", {
        method: "POST",
        body: form,
      });
      const json = await res.json();
      if (!json.success) throw new Error("Unggahan gagal");
      return json.files[0].url;
    }

    function formatBytes(bytes) {
      if (bytes === 0) return "0 Bytes";
      let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      let i = Math.floor(Math.log(bytes) / Math.log(1024));
      let result = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
      return `${result} ${sizes[i]}`;
    }

    async function onlyImage() {
      await sen("Gunakan command tersebut sambil kirim foto atau bales pesan foto nya");
    }

    async function onlyVideo() {
      await sen("Gunakan command tersebut sambil kirim video atau bales pesan video nya");
    }

    async function getIdCh(link) {
      let res = link.replace("https://whatsapp.com/channel/", "");
      let data = await EdogawaSenq.newsletterMetadata("invite", res);
      return data.id;
    }
    function getLocalTimeString() {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
    }

    // OBJECT GAMES

    Object.entries(db.sewa).forEach(async ([a, b]) => {
      let dated = new Date();
      let now = dated.setHours(dated.getHours() + 0);

      if (now > b.format) {
        let txt = `Waktu sewa nomor bot telah berakhir!, bot akan keluar dari grub!`;
        await sen(txt, false, a);
        await sleep(2000);
        await EdogawaSenq.groupLeave(a);
      }
    });

    if (isGroup) {
      if (db.user?.[sender]) {
        if (profil.afk?.status && profil.afk?.jid === jid) {
          let oldD = new Date(profil.afk.time);
          let newD = new Date(getTimeOn(0));
          let gap = (newD - oldD) / 1000;
          let time = msToTime(Math.floor(gap * 1000));
          let txt = `${b3}
${mHeader("AFK")}
${leftStyle} User      : @${sender.getNumber()}
${leftStyle} From Time : ${profil.afk.from}
${leftStyle} On Time   : ${getLocalTimeString()}
${leftStyle} Duration  : ${time}
${lines}
${b3}
${b3}
${mHeader("Alasan")}
${profil.afk.alasan}
${lines}
${b3}`;
          profil.afk.status = false;
          profil.afk.jid = "";
          profil.afk.time = "";
          profil.afk.alasan = "";
          if (Math.floor(gap * 1000) > profil.topAfk) profil.topAfk = Math.floor(gap * 1000);
          saveDb();
          await sen(txt);
        }
      }
    }

    const userTag = qSender || m.message?.[mType]?.contextInfo?.mentionedJid;

    if (db.user?.[userTag]) {
      if (db.user?.[userTag].afk.status) {
        if (db.user?.[userTag].afk.jid === jid) {
          if (!isBaileys) {
            let txt = `${b3}
${mHeader("AFK")}
${leftStyle} User : ${db.user?.[userTag].name}
${leftStyle} From : ${db.user?.[userTag].afk.from}
${lines}
${b3}
${b3}
${mHeader("Alasan")}
${db.user?.[userTag].afk.alasan}
${lines}
${b3}`;
            await sen(txt);
          }
        }
      }
    }

    EdogawaSenq.ularTangga = EdogawaSenq.ularTangga ? EdogawaSenq.ularTangga : JSON.parse(fs.readFileSync("./src/database/ular_tangga.json"));
    fs.writeFileSync("./src/database/ular_tangga.json", JSON.stringify(EdogawaSenq.ularTangga, null, 2));

    EdogawaSenq.tictactoe = EdogawaSenq.tictactoe ? EdogawaSenq.tictactoe : {};

    EdogawaSenq.suit = EdogawaSenq.suit ? EdogawaSenq.suit : {};
    EdogawaSenq.tebaklove = EdogawaSenq.tebaklove ? EdogawaSenq.tebaklove : {};
    if (jid in EdogawaSenq.tebaklove) {
      let json = EdogawaSenq.tebaklove[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Love
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Love
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebaklove[jid][3]);
        delete EdogawaSenq.tebaklove[jid];
      }
    }

    EdogawaSenq.tebakmobil = EdogawaSenq.tebakmobil ? EdogawaSenq.tebakmobil : {};
    if (jid in EdogawaSenq.tebakmobil) {
      let json = EdogawaSenq.tebakmobil[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Mobil
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Mobil
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakmobil[jid][3]);
        delete EdogawaSenq.tebakmobil[jid];
      }
    }

    EdogawaSenq.tebakwaktu = EdogawaSenq.tebakwaktu ? EdogawaSenq.tebakwaktu : {};
    if (jid in EdogawaSenq.tebakwaktu) {
      let json = EdogawaSenq.tebakwaktu[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Waktu
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Jam
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakwaktu[jid][3]);
        delete EdogawaSenq.tebakwaktu[jid];
      }
    }

    EdogawaSenq.tebakarah = EdogawaSenq.tebakarah ? EdogawaSenq.tebakarah : {};
    if (jid in EdogawaSenq.tebakarah) {
      let json = EdogawaSenq.tebakarah[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Arah
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Arah
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakarah[jid][3]);
        delete EdogawaSenq.tebakarah[jid];
      }
    }

    EdogawaSenq.tebakwarna = EdogawaSenq.tebakwarna ? EdogawaSenq.tebakwarna : {};
    if (jid in EdogawaSenq.tebakwarna) {
      let json = EdogawaSenq.tebakwarna[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Warna
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Warna
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakwarna[jid][3]);
        delete EdogawaSenq.tebakwarna[jid];
      }
    }

    EdogawaSenq.tebakbola = EdogawaSenq.tebakbola ? EdogawaSenq.tebakbola : {};
    if (jid in EdogawaSenq.tebakbola) {
      let json = EdogawaSenq.tebakbola[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Bola
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Bola
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakbola[jid][3]);
        delete EdogawaSenq.tebakbola[jid];
      }
    }

    EdogawaSenq.tebakprestasi = EdogawaSenq.tebakprestasi ? EdogawaSenq.tebakprestasi : {};
    if (jid in EdogawaSenq.tebakprestasi) {
      let json = EdogawaSenq.tebakprestasi[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Prestasi
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Prestasi
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakprestasi[jid][3]);
        delete EdogawaSenq.tebakprestasi[jid];
      }
    }

    EdogawaSenq.tebakbuku = EdogawaSenq.tebakbuku ? EdogawaSenq.tebakbuku : {};
    if (jid in EdogawaSenq.tebakbuku) {
      let json = EdogawaSenq.tebakbuku[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Buku
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Buku
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakbuku[jid][3]);
        delete EdogawaSenq.tebakbuku[jid];
      }
    }

    EdogawaSenq.tebakbulan = EdogawaSenq.tebakbulan ? EdogawaSenq.tebakbulan : {};
    if (jid in EdogawaSenq.tebakbulan) {
      let json = EdogawaSenq.tebakbulan[jid][1];
      if (body?.clear() == json.jawaban.clear()) {
        var teks = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebak Bulan
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} List Bulan
${json.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +10
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${botStyle}
${b3}`;

        add("limit", 5);
        add("coin", 10);
        add("exp", 5);

        sen(teks, jid, false);
        clearTimeout(EdogawaSenq.tebakbulan[jid][3]);
        delete EdogawaSenq.tebakbulan[jid];
      }
    }
    
    if (!EdogawaSenq.susunkata) EdogawaSenq.susunkata = {}
    if (jid in EdogawaSenq.susunkata){
      const result = EdogawaSenq.susunkata[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebakkata
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.susunkata[jid][2]);
          delete EdogawaSenq.susunkata[jid];
        } 
    }
  
    if (!EdogawaSenq.math) EdogawaSenq.math = {}
    if (jid in EdogawaSenq.math){
      const result = EdogawaSenq.math[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Matematika
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.math[jid][2]);
          delete EdogawaSenq.math[jid];
          delete EdogawaSenq.math[jid];
        } 
    }
    
        if (!EdogawaSenq.biologi) EdogawaSenq.biologi = {}
    if (jid in EdogawaSenq.biologi){
      const result = EdogawaSenq.biologi[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Biologi
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.biologi[jid][2]);
          delete EdogawaSenq.biologi[jid];
          delete EdogawaSenq.biologi[jid];
        } 
    }
  
      if (!EdogawaSenq.sejarah) EdogawaSenq.sejarah = {}
    if (jid in EdogawaSenq.sejarah){
      const result = EdogawaSenq.sejarah[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : sejarah
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.sejarah[jid][2]);
          delete EdogawaSenq.sejarah[jid];
          delete EdogawaSenq.sejarah[jid];
        } 
    }
  
      if (!EdogawaSenq.fisika) EdogawaSenq.fisika = {}
    if (jid in EdogawaSenq.fisika){
      const result = EdogawaSenq.fisika[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : fisika
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.fisika[jid][2]);
          delete EdogawaSenq.fisika[jid];
          delete EdogawaSenq.fisika[jid];
        } 
    }
  
      if (!EdogawaSenq.geografi) EdogawaSenq.geografi = {}
    if (jid in EdogawaSenq.geografi){
      const result = EdogawaSenq.geografi[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : geografi
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.geografi[jid][2]);
          delete EdogawaSenq.geografi[jid];
          delete EdogawaSenq.geografi[jid];
        } 
    }
  
      if (!EdogawaSenq.kimia) EdogawaSenq.kimia = {}
    if (jid in EdogawaSenq.kimia){
      const result = EdogawaSenq.kimia[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : kimia
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.kimia[jid][2]);
          delete EdogawaSenq.kimia[jid];
          delete EdogawaSenq.kimia[jid];
        } 
    }
  
  
    if (!EdogawaSenq.tebakkata) EdogawaSenq.tebakkata = {}
    if (jid in EdogawaSenq.tebakkata){
      const result = EdogawaSenq.tebakkata[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : Tebakkata
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Soal
${result.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            text: txt
          }, {quoted: qFake});
          
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq.tebakkata[jid][2]);
          delete EdogawaSenq.tebakkata[jid];
        } 
    }

    for (const game of ["tebakff", "tebakgambar", "tebakaplikasi", "tebakbendera", "tebakhero", "tebaklogo", "tebakhewan"]) {
      if (!EdogawaSenq[game]) EdogawaSenq[game] = {};
      if (!EdogawaSenq[game]) EdogawaSenq[game] = {};

      if (jid in EdogawaSenq[game]) {
        const result = EdogawaSenq[game]?.[jid][1];
        const user = db.user[sender];

        if (body?.clear() == result.jawaban.clear()) {
          const txt = `${b3}
${topStyle} Selamat kamu benar
${leftStyle} Games   : ${game}
${leftStyle} User    : @${sender?.getNumber()}
${leftStyle} Jawaban : ${body?.clear()}
${botStyle}
${b3}
${b3}
${topStyle} Deskirpsi
${result.deskirpsi}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Limit : ${formatRupiah(profil.limit)} +2
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +5
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +7
${botStyle}
${b3}`;

          await EdogawaSenq.sendMessage(jid, {
            image: { url: result.img },
            caption: txt,
          });
          add("limit", 2);
          add("coin", 5);
          add("exp", 7);
          saveDb();
          clearTimeout(EdogawaSenq[game][jid][2]);
          delete EdogawaSenq[game][jid];
          break;
        } 
      }
    }

    if (Object.keys(db.respon).includes(body?.clear())) {
      await EdogawaSenq.sendMessage(jid, { text: db.respon[body?.clear()] }, { quoted: m });
    }

    if (db.pengingatsholat) {
      let jadwalSholat = {
        shubuh: "04:39",
        terbit: "05:44",
        dhuha: "06:02",
        dzuhur: "12:02",
        ashar: "15:15",
        magrib: "17:52",
        isya: "19:01",
      };
      const datek = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
      const hours = datek.getHours();
      const minutes = datek.getMinutes();
      const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
      for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
          await EdogawaSenq.sendMessage(
            m.chat,
            {
              audio: {
                url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ",
              },
              mimetype: "audio/mp4",
              ptt: true,
            },
            {
              quoted: m,
            }
          );
          db.pengingatsholat = false;
          saveDb();
          setTimeout(() => {
            db.pengingatsholat = true;
            saveDb();
          }, 60000);
        }
      }
    }

    if (body?.startsWith(prefix)) {
      let txtDebug = `

${mHeader("New Messages")}
${leftStyle} Sender : ${sender}
${leftStyle} SenderJid : ${senderJid}
${leftStyle} BotNumber : ${botNumber}
${leftStyle} BotNumberJid : ${botNumberJid}
${botStyle}

${mHeader("Info Message")}
${leftStyle} Command : ${command}
${leftStyle} Text    : ${text}
${leftStyle} Body    : ${body}
${botStyle}

`;
      console.log(txtDebug);

      if (db.autoban) {
        if (!EdogawaSenq?.cekban)
          EdogawaSenq.cekban = EdogawaSenq.cekban[sender] = {
            time: getTimeS(5),
            step: 1,
          };

        if (EdogawaSenq.cekban[sender] < getTimeS(0)) {
          EdogawaSenq.cekban[sender].step += 1;
          if (EdogawaSenq.cekban[sender].step == 5) {
            db.blacklist.push(sender);
            saveDb();
            await sen(`@${sender.getNumber()} Kamu telah di ban di karnakan spam saat menggunakan bot!`);
          }
        }
      }

      if (!db.user?.[sender]) addUser(sender);
      saveDb();
      if (db.mode === "self" && !isBotNumber) return console.log(`Bot Di Self!`);
      if (db.mute.includes(jid) && !isBotNumber) return console.log(`Grub ${metadata?.[jid]?.subject} Di Mute!`);

      switch (command) {
        case "ceksocks":
          {
            EdogawaSenq.sendMessage(jid, {
              text: `${Object.keys(socks).join(",")}`,
            });
          }
          break;
        case "xnxx":
          {
          }
          break;
        // add

case "absen":
    {
      if (!isGroup) return onlyGrup()
      if (text.clear() == "list") {
        if (!db.absen?.[jid]) return sen("Tidak ada user yang absen");
        let txt = `${b3}\n${mHeader("List Absen")}\n`;
        db.absen[jid].forEach((v, i) => {
          txt += `${leftStyle} ${i + 1} ${v.name}\n`;
        });

        txt += `${botStyle}\n${b3}`;
        sen(txt);
        return;
      }
      if (!text) return example("Nama");
      if (!db.absen?.[jid]) db.absen[jid] = [];
      db.absen[jid].push({
        name: text,
        nomor: sender,
      });
      saveDb();
      sen(`Halo ${text} kamu telah absen, ketik .absen list, untuk melihay siapa aja yang sudah absen`);
    }
    break;

case "ttstalk":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return await example("@username");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/stalker/tiktok?username=${text}`);
        if (!data.status) return await sen(`Hasil pencarian "${text}" tidak di temukan!,`);

        let txt = `${b3} 
${mHeader("Tiktok Stalk")}
${leftStyle} Username : ${data.result?.username || "-"}
${leftStyle} Nickname : ${data.result?.nickname || "-"}
${leftStyle} Bio User : ${data.result.biography || "-"}
${leftStyle} Bio Link : ${data.result.biolink || "-"}
${botStyle} 
${b3} 
${b3} 
${mHeader("Stats")} 
${leftStyle} Follower     : ${data.result.statistics?.followers || "0"} Foll
${leftStyle} Following    : ${data.result.statistics?.following || "0"} Foll
${leftStyle} Total Like   : ${data.result.statistics?.like || "0"} Like
${leftStyle} Total Video  : ${data.result.statistics?.post || "0"} Vt
${leftStyle} Total Friend : ${data.result.statistics?.friend || "0"} Friend
${lines}
${b3} 
`;
        let res = await getBuffer(data.result.avatar?.medium);

        if (Buffer.isBuffer(res)) {
          await sendMedia(res, txt);
        } else {
          await sen(txt);
        }
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "balas":
    {
      try {
        let confess = Object.entries(db.user).find(([a, b]) => b.confess.to === searchJid(sender));
        if (!confess || confess?.[1]?.from !== sender) return sen(`Silahkan mulai conves dengan mengetik .confess`);
        let toConves = confess[1].to;
        let fromConves = confess[1].from;
        if (!text) return example("pesan nya", "halo");

        if (sender === toConves) {
          db.user[fromConves].isAccept = true;
          await sen(
            `${b3}
${topStyle} Confess
${b3}
${leftStyle} Dari  : @${sender.getNumber()}
${leftStyle} Pesan : ${text}
${botStyle}
${b3}`,

            confess[1].jid,
            false
          );
          await sen(`Berhasil mengirim balasan confess ke ${confess.name} ✅`);
          saveDb();
        } else {
          if (!db.user[fromConves].isAccept) {
            await sen(`Confess kamu ke @${toConves.getNumber()} Belum di balas!`);
          }

          await sen(
            `${b3}
${topStyle} Confess
${b3}
${leftStyle} Dari  : ${confess.name}
${leftStyle} Pesan : ${text}
${botStyle}
${b3}`,

            toConves,
            false
          );

          await sen(`Berhasil mengirim balasan confess ke @${toConves.getNumber()} ✅`);
        }
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "tolak":
    {
      try {
        let [nomorNgarep, obj] = Object.entries(db.user).find(([a, b]) => b.confess.to === searchJid(sender));
        if (!obj) return sen(`Tidak ada orang yang ngeirim confess ke kamu!`);
        db.user[nomorNgarep].confess = {
          status: false,
          to: "",
        };
        saveDb();
        await sen(`@${nomorNgarep.getNumber()} Confess kamu di tolak oleh @${sender.getNumber()}`, obj.jid, false);
        await sen(`Berhasil!, kamu telah menolak confess "${obj.name}" ✅`);
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "confess":
    {
      try {
        let cfs = db.user[sender].confess;
        if (cfs.status) return sen(`Kamu sedang confess ke @${cfs.to.getNumber()} ketik .batal`);
        let [no, nama, pesan] = text.split("|").map((i) => i.trim());
        if (!text || !no || !pesan) return example(`Nomor | nama | pesan`, "6283114824117 | ssna | hlo");
        let target = await decode(text.trim());

        let txt = `${b3}
${topStyle} Confess
${leftStyle} Dari  : ${nama}
${leftStyle} Pesan : ${pesan}
${botStyle}
${b3}


*Info*
ketik .balas pesan nya
untuk membalas confess tersebut

ketik .tolak 
untuk menolak confess tersebut
`;

        let mes = sen(txt, searchJid(target), false);

        db.user[sender].confess = {
          from: searchJid(sender),
          to: searchJid(target),
          name: nama,
          status: true,
          isAccept: false,
          jid,
        };
        saveDb();

        await sen(`Berhasil mengirim confess tunggu dia bales atau ketik .batal untuk membatalkan convess ✅`);
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "neko":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        if (db.antinsfw) return sen("Anti nsfw di nyalakan, fitur ini tidak bisa di gunakan!");

        await sendMedia(`https://api.edogawasenq.store/api/v2/rest/try/nsfw/${command}`, `Berhasil mengambil foto ${command} dari rest API ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "trap":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        if (db.antinsfw) return sen("Anti nsfw di nyalakan, fitur ini tidak bisa di gunakan!");

        await sendMedia(`https://api.edogawasenq.store/api/v2/rest/try/nsfw/${command}`, `Berhasil mengambil foto ${command} dari rest API ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "waifuu":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        if (db.antinsfw) return sen("Anti nsfw di nyalakan, fitur ini tidak bisa di gunakan!");

        await sendMedia(`https://api.edogawasenq.store/api/v2/rest/try/nsfw/${command}`, `Berhasil mengambil foto ${command} dari rest API ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "blowjob":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        if (db.antinsfw) return sen("Anti nsfw di nyalakan, fitur ini tidak bisa di gunakan!");

        await sendMedia(`https://api.edogawasenq.store/api/v2/rest/try/nsfw/${command}`, `Berhasil mengambil foto ${command} dari rest API ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-china":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-japan":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-korea":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-vietnam":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-thailand":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "girl-indonesia":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/rnd/${command.split("-")[0]}/${command.split("-")[1]}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "cat":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "loli":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "pic-re":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "rule34":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "cosplay":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "yande-re":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "blue-archive":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        await sendMedia(`${apiv4}/random/${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "encarab":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encjawa":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encjapan":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "enckorea":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encrusia":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encindia":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encchina":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "enccombine":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "encthailand":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const type = command.replace("enc", "");

      const language = {
        china: ["一", "丁", "七", "丈", "三", "上", "下", "不", "与", "丑", "专", "且", "世", "丘", "丙", "业", "东", "丝", "丢", "两", "严", "个", "中", "为", "主", "义", "之", "乌", "乎", "乏", "乐", "乒", "乓", "乔", "乘", "九", "习", "乡", "书", "买", "乱", "乳", "乾", "亀", "仏", "价", "传", "伤", "伦", "伟"],

        japan: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "ア", "イ", "ウ", "エ"],

        thailand: ["ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ", "ม", "ย", "ร", "ฤ", "ล", "ฦ", "ว", "ศ", "ษ", "ส", "ห", "ฬ", "อ", "ฮ", "ๆ", "ฯ", "ะ", "า"],

        arab: ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ء", "ؤ", "ئ", "ى", "ة", "آ", "إ", "أ", "ٱ", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠", "ﷲ", "۞", "۩"],

        korea: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하", "거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허", "고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호", "기", "니", "디", "리", "미", "비", "시", "이"],

        rusia: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п"],

        india: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "१", "२", "३"],

        jawa: ["ꦲ", "ꦤ", "ꦕ", "ꦫ", "ꦏ", "ꦢ", "ꦠ", "ꦱ", "ꦮ", "ꦭ", "ꦩ", "ꦒ", "ꦧ", "ꦛ", "ꦚ", "ꦦ", "ꦪ", "ꦝ", "ꦛ", "ꦔ"],

        combine: ["ꦄ", "ꦅ", "ꦆ", "ꦇ", "ꦈ", "ᮃ", "ᮄ", "ᮅ", "ᮆ", "ᮇ", "ᬅ", "ᬆ", "ᬇ", "ᬈ", "ᬉ", "ᯀ", "ᯁ", "ᯂ", "ᯃ", "ᯄ", "ᨀ", "ᨁ", "ᨂ", "ᨃ", "ᨄ", "ก", "ข", "ฃ", "ค", "ฅ", "あ", "い", "う", "え", "お", "我", "你", "他", "她", "它", "ا", "ب", "ت", "ث", "ج"],
      };

      const data = await enc(text, language[type]);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "ero":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ass":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "milf":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "oral":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "maid":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "waifu":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "oppai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ecchi":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "hentai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "uniform":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "selfies":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "paizuri":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!isPrem) return onlyPrem();
        await sendMedia(`${apiv4}/rnd/waifuim?type=${command}`, `Berhasil mengambil foto ${command} dari endpoint url ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "pin":
    {
      if (!text) return example("query");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(text)}`);
      if (!data || data.result.search_data.length === 0) return await sen(`Hasil pencarian ${text} tidak di temukan!`);

      await sendMedia(pickRandom(data.result.search_data), `Hasil pencarian "${text}" di pinterest`);
      reduceLimit();
    }
    break;

case "ggls":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const g = {
        helper: {
          log: function (message) {
            console.log("[google search ai] " + message);
          },
          formatError: function (string) {
            const MAX_LENGTH = 200;
            const type = typeof string;
            if (type !== "string") return "(gak bisa nampilin teks karena type yg di kasih adalah " + type + ")";
            if (!string) return "(empty message)";
            let message = string;
            try {
              message = JSON.stringify(JSON.parse(string), null, 2);
            } catch (_) {}
            if (message.length > MAX_LENGTH) {
              message = message.substring(0, MAX_LENGTH) + "... (trimmed " + (string.length - MAX_LENGTH) + " characters)";
            }
            return message;
          },
        },

        getCookie: async function () {
          this.helper.log("coba ambil kuki");
          const r = await fetch("https://play.google.com/log?format=json&hasfast=true&authuser=0", {
            headers: {
              "accept-encoding": "gzip, deflate, br, zsdch, zstd",
            },
            body: "[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,'en-ID',null,null,null,[[['Chromium','142'],['Not_A Brand','99'],['Google Chrome','142']],0,'Windows','15.0.0','x86','','142.0.7444.163'],[4,0]]],596,[['1763639555843',null,null,null,null,null,null,\"[null,[\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"],null,null,null,null,null,null,null,[50]]\",null,null,null,null,null,null,-28800,null,null,null,null,null,1,null,null,\"[[[1763639555842000,0,0],4],null,null,[null,null,3,null,null,null,null,null,null,null,\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"]]\"]],\"1763639555843\",null,null,null,null,null,null,null,null,null,null,null,null,null,[[null,[null,null,null,null,null,null,null,null,null,null,null,null,89978449]],9]]",
            method: "POST",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi getCookie\n" + this.helper.formatError(await r.text()));
          const rawCookie = r.headers.get("set-cookie");
          if (!rawCookie) throw Error("gagal ambil set-cookie");
          const cookie = rawCookie.split(";")[0].trim();
          return { cookie };
        },

        apiSearch: async function (query, cookie) {
          this.helper.log("hit api search");
          const pertanyaan = query;
          const url = "https://www.google.com/async/folif?ei=8wAfaa3bDfWW4-EP6s3W2Ag&yv=3&aep=22&sca_esv=100be553d7950a9c&source=hp&udm=50&stkp=0&cs=1&csuir=0&elrc=CmowYTcxa0tLT3NsZGQyUzhwaGEwQzU1dG10bzRtU09nYzNlZmFPM2dmbDZQWjl1ZnV5S2Q4c1NVUVZXamUwdzRGVzRXdmE3aHBvYlNDWjFpTTVHamhsMTNuXy05MlB5TkFFUm5IRjlTdURREhc4d0FmYWEzYkRmV1c0LUVQNnMzVzJBZxoLUVl3ZG90SUpKTE0&mstk=AUtExfBYZSu-e78DR2kr63-4EO-x1ELfy76o7hjhOVOVzwTATs7ru9uQwfg3SE2TItnNfDWulluSvCH6lvcPL2qBrwsjF2lnO-Drb0_tGndJYTALKwofwExTre-6MDCI_geuLCpH_gcNMJJ7go39xzqNKZqPHmVr1dGHlQg&csui=3&q=" + encodeURIComponent(pertanyaan) + "&ved=1t%3A244952&async=_fmt:adl,_snbasecss:https%3A%2F%2Fwww.gstatic.com%2F_%2Fmss%2Fsearch-next%2F_%2Fss%2Fk%3Dsearch-next.aim.OB36VA5Djzs.L.B1.O%2Fam%3DAAAAAAAAAAAAAAAACAgZAAAAAAQAAAAAIAAAACAAAACAEADAhQgCCEAEEgAAABAAAAAAAAAAgAAAoAAAAABAAAAAAAAAAAAAAABgFgQgCABIAYE3AAMAgEABgAI%2Fd%3D1%2Fexcm%3DASY0Wd%2CAiz46d%2CAo6dnf%2CAzSnD%2CD1nDFc%2CE1OJWe%2CEj7pAc%2CEsqXXd%2CFF5Y8b%2CFWrJQc%2CFckSrf%2CFyH0nb%2CGnLh6e%2CHoxWed%2CIyd0xc%2CKGeR3c%2CRviR3d%2CStgeed%2CTdu1Vc%2CUhtX3d%2CVnu7zd%2CW8NV9d%2CWOOgyb%2CWr4gwf%2CX3KV0%2CXmAqMd%2CZ7MAyf%2Ca419X%2CayDvec%2Cb%2Cb4fE6b%2Cb7b88%2CbT5qhd%2CbTGTre%2CbYAJce%2CblIcIb%2CcuZPYc%2Ce70zne%2CeBhDS%2CfZp0ed%2Cg0BaKe%2CgKbrsf%2Ch5g25d%2CjLZYRc%2CjrKk6c%2CkGVn2c%2CrRecze%2CrXUgd%2CrZPHBe%2CsecKrf%2Ct8ZFHb%2CtXNq8b%2CtxW4Ec%2CuAuYHe%2Cvu0Pcd%2Cw0tqF%2CxBG21%2Cy4TDlb%2CyxVckb%2CzLVn4b%2Fed%3D1%2Fdg%3D2%2Fujg%3D1%2Frs%3DAE5fCmQG1Fy5I8n_8YcfBeoPxr_aKOtqXQ";
          const r = await fetch(url, {
            headers: {
              cookie: cookie,
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
            },
            method: "GET",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi search\n" + this.helper.formatError(await r.text()));
          const html = await r.text();
          return { html };
        },

        parseHtml: function (html) {
          const $ = cheerio.load(html);
          $("script, style, noscript").remove();
          $('[style*="display:none"]').remove();
          $("[hidden]").remove();
          $('[aria-hidden="true"]').remove();
          $("[data-ved]").remove();
          $("svg, path").remove();
          $.root()
            .contents()
            .each(function () {
              if (this.type === "comment") $(this).remove();
            });
          const text = $("div[data-target-container-id='5']")
            .map((i, el) => $(el).text().replace(/\s+/g, " ").trim())
            .get()
            .filter(Boolean);
          text.pop();
          return { result: text.join("\n") };
        },

        search: async function (query) {
          if (!query) throw Error("param query gak boleh kosong");
          const { cookie } = await this.getCookie();
          const { html } = await this.apiSearch(query, cookie);
          const { result } = this.parseHtml(html);
          this.helper.log("done");
          return result;
        },
      };

      try {
        if (!text) return example("pertanyaan");

        const result = await g.search(text);

        if (!result) return sen("Hasil tidak di temukan!");

        await sena(result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "market":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        let res = await fetch("${apiv3}/live/market");

        let json = await res.json();
        if (!json.status || !Array.isArray(json.data)) return sen("Hasil tidak di temukan");

        let txt = `${b3}
${mHeader("Market Crypto")}
${leftStyle} Total Market : ${json.total}
${lines}
${b3}
`;

        let data;

        if (!text) {
          data = json.data.slice(0, 10);
        } else {
          let rank = parseInt(text);
          if (isNaN(rank) || rank < 1) return sen("Eror invalid rank!");

          data = json.data.filter((v) => v.market_cap_rank === rank);
          if (!data.length) return sen(`Market rank ${rank} tidak di temukan !`);
        }

        for (let c of data) {
          let trend = c.price_change_percentage_24h > 0 ? "🟢" : c.price_change_percentage_24h < 0 ? "🔴" : "⚪";

          txt += `${b3}
${mHeader(`${c.market_cap_rank} ${c.name} (${c.symbol})`)}
${leftStyle} Harga      : ${c.current_price}
${leftStyle} ${trend} 24 Jam   : ${c.price_change_percentage_24h.toFixed(2)}%
${leftStyle} Market Cap : ${c.market_cap.toLocaleString()}
${leftStyle} Volume     : ${c.total_volume.toLocaleString()}
${leftStyle} Supply     : ${c.circulating_supply.toLocaleString()}
${lines}
${b3}`;
        }

        txt += `\nLast update : ${new Date(json.data[0].last_updated).toLocaleString()}`;

        await sen(txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "tiktoks":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("@senq_dev");
        const { data } = await axios.get(`${apiv5}/api/v1/search/tiktok?query=${encodeURIComponent(text.trim())}`);

        if (!data?.status) return sen("Hasil tidak di temukan!");

        let res = pickRandom(data.result.search_data);

        let txt = `${b3}
${mHeader("Author")}
${leftStyle} Id       : ${res.author.id}
${leftStyle} Name     : ${res.author.fullname}
${leftStyle} Name Id  : ${res.author.nickname}
${lines}
${mHeader("Stats")}
${leftStyle} Like     : ${res.stats.likes}
${leftStyle} Comment  : ${res.stats.comment}
${leftStyle} Share    : ${res.stats.share}
${leftStyle} Views    : ${res.stats.views}
${leftStyle} Download : ${res.stats.download}
${lines}
${b3}`;

        let buff = await getBuffer(res.data[0].url);
        await sendMedia(buff, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "webtoon":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        async function WebtoonsDetail(url) {
          try {
            const response = await axios.get(url);
            const html = response.data;

            const $ = cheerio.load(html);

            const result = {
              title: $(".detail_header .subj").text().trim(),
              genre: $(".detail_header .genre").text().trim(),
              authors: [],
              description: $(".summary").text().trim(),
              thumbnail: $(".detail_header .thmb img").attr("src"),
              backgroundImage: $(".detail_bg").attr("style")?.replace("background:url('", "").replace("') repeat-x", ""),
              stats: {
                views: $(".grade_area li:first-child .cnt").text().trim(),
                subscribers: $(".grade_area li:last-child .cnt").text().trim(),
              },
              updateSchedule: $(".day_info").text().trim().replace("Baca Tiap ", ""),
              ageRating: $(".age_text").text().trim(),
              episodes: [],
              recommendations: [],
            };

            const writer = $(".ly_creator_in .title").first().text().trim();
            const illustrator = $(".ly_creator_in .title").last().text().trim();
            if (writer && illustrator) {
              result.authors = [writer, illustrator];
            }

            $("#_listUl ._episodeItem").each((index, element) => {
              const $episode = $(element);

              const episodeData = {
                episodeNo: $episode.attr("id")?.replace("episode_", ""),
                title: $episode.find(".subj span").text().trim(),
                date: $episode.find(".date").text().trim(),
                likes: $episode.find(".like_area").text().trim().replace("like", ""),
                thumbnail: $episode.find(".thmb img").attr("src"),
                link: $episode.find("a").attr("href"),
                episodeNumber: $episode.find(".tx").text().trim(),
              };

              result.episodes.push(episodeData);
            });

            $(".detail_other .lst_type1 li").each((index, element) => {
              const $rec = $(element);

              const recommendation = {
                title: $rec.find(".subj").text().trim(),
                author: $rec.find(".author").text().trim(),
                views: $rec.find(".grade_num").text().trim(),
                thumbnail: $rec.find(".pic_area img").attr("src"),
                link: $rec.find("a").attr("href"),
              };

              result.recommendations.push(recommendation);
            });

            return result;
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        }

        if (!text) return example("link webtoon");
        let res = await WebtoonsDetail(text.trim());
        if (!res?.title || !res) return sen("Hasil tidak di temukan!");

        let txt = `${b3}
${mHeader("Webtoon")}
${leftStyle} Title     : ${res.title}
${leftStyle} Genre     : ${res.genre}
${leftStyle} View      : ${res.stats.views}
${leftStyle} Subscribe : ${res.stats.subscribers}
${lines}
${b3}`;

        await sendMedia(res.thumbnail, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "donghua":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const scrapeDonghuaSchedule = async () => {
        try {
          const url = "https://donghub.vip/schedule/";

          const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://donghub.vip/",
          };

          const { data } = await axios.get(url, { headers, timeout: 10000 });
          const $ = cheerio.load(data);
          const results = {};
          const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

          days.forEach((day) => {
            results[day] = [];

            $(`.sch_${day} .bsx`).each((_, el) => {
              const title = $(el).find(".tt").text().trim();
              const link = $(el).find("a").attr("href");
              const episode = $(el).find(".sb.Sub").text().trim();
              const status = $(el).find(".epx").text().trim();
              const img = $(el).find("img").attr("src");

              let countdown = null;
              const countdownElem = $(el).find(".epx.cndwn");
              if (countdownElem.length) {
                const cndwnData = countdownElem.attr("data-cndwn");
                if (cndwnData) {
                  countdown = formatCountdown(parseInt(cndwnData));
                }
              }

              results[day].push({
                title: title || "No Title",
                link: link || null,
                episode: episode || "Unknown",
                status: status || "Unknown",
                countdown: countdown,
                img: img || null,
              });
            });
          });

          const totalDonghua = Object.values(results).reduce((total, dayDonghua) => total + dayDonghua.length, 0);

          const dayNames = {
            "sunday": "Sunday",
            "monday": "Monday",
            "tuesday": "Tuesday",
            "wednesday": "Wednesday",
            "thursday": "Thursday",
            "friday": "Friday",
            "saturday": "Saturday",
          };

          return {
            totalDonghua: totalDonghua,
            scrapedAt: new Date().toLocaleString("id-ID"),
            days: dayNames,
            results: results,
          };
        } catch (err) {
          console.error("Scraping error:", err.message);
          throw err;
        }
      };

      function formatCountdown(seconds) {
        if (!seconds || seconds < 0) return null;

        const days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        const minutes = Math.floor(seconds / 60);

        let result = "";
        if (days > 0) result += `${days}d `;
        if (hours > 0) result += `${hours}h `;
        if (minutes > 0) result += `${minutes}m`;

        return result.trim() || "Soon";
      }

      function formatScheduleMessage(data) {
        let txt = `${b3}
${mHeader("Donghu Schedule")}
${leftStyle} Total : ${data.totalDonghua}
${leftStyle} Scrape : ${data.scrapedAt}
${lines}
${b3}`;

        Object.entries(data.results).forEach(([day, donghuas]) => {
          if (donghuas.length > 0) {
            txt += `
${b3}
${mHeader(data.days[day].toUpperCase())}
${lines}
${b3}`;

            donghuas.slice(0, 5).forEach((donghua, index) => {
              const statusIcon = donghua.status === "released" ? "✅" : "⏳";
              const countdownInfo = donghua.countdown ? ` (${donghua.countdown})` : "";

              txt += `
${b3}
${mHeader(donghua.title)}
${leftStyle} Index   : ${index + 1}
${leftStyle} Episode : ${donghua.episode}
${leftStyle} Link    : ${donghua.link}`;

              if (donghua.countdown) {
                txt += `\n${leftStyle} Waktu   : ${donghua.countdown}`;
              }

              txt += `
${lines}
${b3}`;
            });
          }
        });

        return txt;
      }

      try {
        const schedule = await scrapeDonghuaSchedule();

        if (!schedule || !schedule.results || schedule.results.length === 0) await sen("No donghua schedule found");

        const message = formatScheduleMessage(schedule);

        await EdogawaSenq.sendMessage(
          jid,
          {
            text: message,
          },
          {
            quoted: qFake,
          }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "gsearch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const g = {
        helper: {
          log: function (message) {
            console.log("[google search ai] " + message);
          },
          formatError: function (string) {
            const MAX_LENGTH = 200;
            const type = typeof string;
            if (type !== "string") return "(gak bisa nampilin teks karena type yg di kasih adalah " + type + ")";
            if (!string) return "(empty message)";
            let message = string;
            try {
              message = JSON.stringify(JSON.parse(string), null, 2);
            } catch (_) {}
            if (message.length > MAX_LENGTH) {
              message = message.substring(0, MAX_LENGTH) + "... (trimmed " + (string.length - MAX_LENGTH) + " characters)";
            }
            return message;
          },
        },

        getCookie: async function () {
          this.helper.log("coba ambil kuki");
          const r = await fetch("https://play.google.com/log?format=json&hasfast=true&authuser=0", {
            headers: {
              "accept-encoding": "gzip, deflate, br, zsdch, zstd",
            },
            body: "[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,'en-ID',null,null,null,[[['Chromium','142'],['Not_A Brand','99'],['Google Chrome','142']],0,'Windows','15.0.0','x86','','142.0.7444.163'],[4,0]]],596,[['1763639555843',null,null,null,null,null,null,\"[null,[\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"],null,null,null,null,null,null,null,[50]]\",null,null,null,null,null,null,-28800,null,null,null,null,null,1,null,null,\"[[[1763639555842000,0,0],4],null,null,[null,null,3,null,null,null,null,null,null,null,\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"]]\"]],\"1763639555843\",null,null,null,null,null,null,null,null,null,null,null,null,null,[[null,[null,null,null,null,null,null,null,null,null,null,null,null,89978449]],9]]",
            method: "POST",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi getCookie\n" + this.helper.formatError(await r.text()));
          const rawCookie = r.headers.get("set-cookie");
          if (!rawCookie) throw Error("gagal ambil set-cookie");
          const cookie = rawCookie.split(";")[0].trim();
          return { cookie };
        },

        apiSearch: async function (query, cookie) {
          this.helper.log("hit api search");
          const pertanyaan = query;
          const url = "https://www.google.com/async/folif?ei=8wAfaa3bDfWW4-EP6s3W2Ag&yv=3&aep=22&sca_esv=100be553d7950a9c&source=hp&udm=50&stkp=0&cs=1&csuir=0&elrc=CmowYTcxa0tLT3NsZGQyUzhwaGEwQzU1dG10bzRtU09nYzNlZmFPM2dmbDZQWjl1ZnV5S2Q4c1NVUVZXamUwdzRGVzRXdmE3aHBvYlNDWjFpTTVHamhsMTNuXy05MlB5TkFFUm5IRjlTdURREhc4d0FmYWEzYkRmV1c0LUVQNnMzVzJBZxoLUVl3ZG90SUpKTE0&mstk=AUtExfBYZSu-e78DR2kr63-4EO-x1ELfy76o7hjhOVOVzwTATs7ru9uQwfg3SE2TItnNfDWulluSvCH6lvcPL2qBrwsjF2lnO-Drb0_tGndJYTALKwofwExTre-6MDCI_geuLCpH_gcNMJJ7go39xzqNKZqPHmVr1dGHlQg&csui=3&q=" + encodeURIComponent(pertanyaan) + "&ved=1t%3A244952&async=_fmt:adl,_snbasecss:https%3A%2F%2Fwww.gstatic.com%2F_%2Fmss%2Fsearch-next%2F_%2Fss%2Fk%3Dsearch-next.aim.OB36VA5Djzs.L.B1.O%2Fam%3DAAAAAAAAAAAAAAAACAgZAAAAAAQAAAAAIAAAACAAAACAEADAhQgCCEAEEgAAABAAAAAAAAAAgAAAoAAAAABAAAAAAAAAAAAAAABgFgQgCABIAYE3AAMAgEABgAI%2Fd%3D1%2Fexcm%3DASY0Wd%2CAiz46d%2CAo6dnf%2CAzSnD%2CD1nDFc%2CE1OJWe%2CEj7pAc%2CEsqXXd%2CFF5Y8b%2CFWrJQc%2CFckSrf%2CFyH0nb%2CGnLh6e%2CHoxWed%2CIyd0xc%2CKGeR3c%2CRviR3d%2CStgeed%2CTdu1Vc%2CUhtX3d%2CVnu7zd%2CW8NV9d%2CWOOgyb%2CWr4gwf%2CX3KV0%2CXmAqMd%2CZ7MAyf%2Ca419X%2CayDvec%2Cb%2Cb4fE6b%2Cb7b88%2CbT5qhd%2CbTGTre%2CbYAJce%2CblIcIb%2CcuZPYc%2Ce70zne%2CeBhDS%2CfZp0ed%2Cg0BaKe%2CgKbrsf%2Ch5g25d%2CjLZYRc%2CjrKk6c%2CkGVn2c%2CrRecze%2CrXUgd%2CrZPHBe%2CsecKrf%2Ct8ZFHb%2CtXNq8b%2CtxW4Ec%2CuAuYHe%2Cvu0Pcd%2Cw0tqF%2CxBG21%2Cy4TDlb%2CyxVckb%2CzLVn4b%2Fed%3D1%2Fdg%3D2%2Fujg%3D1%2Frs%3DAE5fCmQG1Fy5I8n_8YcfBeoPxr_aKOtqXQ";
          const r = await fetch(url, {
            headers: {
              cookie: cookie,
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
            },
            method: "GET",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi search\n" + this.helper.formatError(await r.text()));
          const html = await r.text();
          return { html };
        },

        parseHtml: function (html) {
          const $ = cheerio.load(html);
          $("script, style, noscript").remove();
          $('[style*="display:none"]').remove();
          $("[hidden]").remove();
          $('[aria-hidden="true"]').remove();
          $("[data-ved]").remove();
          $("svg, path").remove();
          $.root()
            .contents()
            .each(function () {
              if (this.type === "comment") $(this).remove();
            });
          const text = $("div[data-target-container-id='5']")
            .map((i, el) => $(el).text().replace(/\s+/g, " ").trim())
            .get()
            .filter(Boolean);
          text.pop();
          return { result: text.join("\n") };
        },

        search: async function (query) {
          if (!query) throw Error("param query gak boleh kosong");
          const { cookie } = await this.getCookie();
          const { html } = await this.apiSearch(query, cookie);
          const { result } = this.parseHtml(html);
          this.helper.log("done");
          return result;
        },
      };

      try {
        if (!text) return example("pertanyaan");

        const result = await g.search(text);

        if (!result) return sen("Hasil tidak di temukan!");

        await sena(result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ttsearch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("@senq_dev");
        const { data } = await axios.get(`${apiv5}/api/v1/search/tiktok?query=${encodeURIComponent(text.trim())}`);

        if (!data?.status) return sen("Hasil tidak di temukan!");

        let res = pickRandom(data.result.search_data);

        let txt = `${b3}
${mHeader("Author")}
${leftStyle} Id       : ${res.author.id}
${leftStyle} Name     : ${res.author.fullname}
${leftStyle} Name Id  : ${res.author.nickname}
${lines}
${mHeader("Stats")}
${leftStyle} Like     : ${res.stats.likes}
${leftStyle} Comment  : ${res.stats.comment}
${leftStyle} Share    : ${res.stats.share}
${leftStyle} Views    : ${res.stats.views}
${leftStyle} Download : ${res.stats.download}
${lines}
${b3}`;

        let buff = await getBuffer(res.data[0].url);
        await sendMedia(buff, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "kuranime":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        async function kuranimeSearch(query) {
          try {
            const response = await axios.get(`https://v8.kuramanime.tel/anime?order_by=ascending&search=${query}`, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              },
            });
            const html = response.data;

            const $ = cheerio.load(html);

            const result = [];

            $(".product__item").each((index, element) => {
              const $anime = $(element);

              const animeData = {
                title: $anime.find(".product__item__text h5 a").text().trim(),
                url: $anime.find(".product__item__text h5 a").attr("href"),
                image: $anime.find(".product__item__pic").attr("data-setbg"),
              };

              result.push(animeData);
            });

            return result;
          } catch (error) {
            console.error("Error fetching data:", error.message);
            return [];
          }
        }

        if (!text) return example("query");

        let res = await kuranimeSearch(text.trim());
        if (!res?.title) return sen("Hasil tidak di temukan");
        let txt = `${b3}
${mHeader("Kuranime")}
${leftStyle} Title : ${res.title}
${leftStyle} Url   : ${res.url}
${lines}
${b3}`;
        reduceLimit();
        await sendMedia(res.image, txt);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "tiktoksearch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("@senq_dev");
        const { data } = await axios.get(`${apiv5}/api/v1/search/tiktok?query=${encodeURIComponent(text.trim())}`);

        if (!data?.status) return sen("Hasil tidak di temukan!");

        let res = pickRandom(data.result.search_data);

        let txt = `${b3}
${mHeader("Author")}
${leftStyle} Id       : ${res.author.id}
${leftStyle} Name     : ${res.author.fullname}
${leftStyle} Name Id  : ${res.author.nickname}
${lines}
${mHeader("Stats")}
${leftStyle} Like     : ${res.stats.likes}
${leftStyle} Comment  : ${res.stats.comment}
${leftStyle} Share    : ${res.stats.share}
${leftStyle} Views    : ${res.stats.views}
${leftStyle} Download : ${res.stats.download}
${lines}
${b3}`;

        let buff = await getBuffer(res.data[0].url);
        await sendMedia(buff, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "webtoondetail":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        async function WebtoonsDetail(url) {
          try {
            const response = await axios.get(url);
            const html = response.data;

            const $ = cheerio.load(html);

            const result = {
              title: $(".detail_header .subj").text().trim(),
              genre: $(".detail_header .genre").text().trim(),
              authors: [],
              description: $(".summary").text().trim(),
              thumbnail: $(".detail_header .thmb img").attr("src"),
              backgroundImage: $(".detail_bg").attr("style")?.replace("background:url('", "").replace("') repeat-x", ""),
              stats: {
                views: $(".grade_area li:first-child .cnt").text().trim(),
                subscribers: $(".grade_area li:last-child .cnt").text().trim(),
              },
              updateSchedule: $(".day_info").text().trim().replace("Baca Tiap ", ""),
              ageRating: $(".age_text").text().trim(),
              episodes: [],
              recommendations: [],
            };

            const writer = $(".ly_creator_in .title").first().text().trim();
            const illustrator = $(".ly_creator_in .title").last().text().trim();
            if (writer && illustrator) {
              result.authors = [writer, illustrator];
            }

            $("#_listUl ._episodeItem").each((index, element) => {
              const $episode = $(element);

              const episodeData = {
                episodeNo: $episode.attr("id")?.replace("episode_", ""),
                title: $episode.find(".subj span").text().trim(),
                date: $episode.find(".date").text().trim(),
                likes: $episode.find(".like_area").text().trim().replace("like", ""),
                thumbnail: $episode.find(".thmb img").attr("src"),
                link: $episode.find("a").attr("href"),
                episodeNumber: $episode.find(".tx").text().trim(),
              };

              result.episodes.push(episodeData);
            });

            $(".detail_other .lst_type1 li").each((index, element) => {
              const $rec = $(element);

              const recommendation = {
                title: $rec.find(".subj").text().trim(),
                author: $rec.find(".author").text().trim(),
                views: $rec.find(".grade_num").text().trim(),
                thumbnail: $rec.find(".pic_area img").attr("src"),
                link: $rec.find("a").attr("href"),
              };

              result.recommendations.push(recommendation);
            });

            return result;
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        }

        if (!text) return example("link webtoon");
        let res = await WebtoonsDetail(text.trim());
        if (!res?.title || !res) return sen("Hasil tidak di temukan!");

        let txt = `${b3}
${mHeader("Webtoon")}
${leftStyle} Title     : ${res.title}
${leftStyle} Genre     : ${res.genre}
${leftStyle} View      : ${res.stats.views}
${leftStyle} Subscribe : ${res.stats.subscribers}
${lines}
${b3}`;

        await sendMedia(res.thumbnail, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "kuranimeearch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        async function kuranimeSearch(query) {
          try {
            const response = await axios.get(`https://v8.kuramanime.tel/anime?order_by=ascending&search=${query}`, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              },
            });
            const html = response.data;

            const $ = cheerio.load(html);

            const result = [];

            $(".product__item").each((index, element) => {
              const $anime = $(element);

              const animeData = {
                title: $anime.find(".product__item__text h5 a").text().trim(),
                url: $anime.find(".product__item__text h5 a").attr("href"),
                image: $anime.find(".product__item__pic").attr("data-setbg"),
              };

              result.push(animeData);
            });

            return result;
          } catch (error) {
            console.error("Error fetching data:", error.message);
            return [];
          }
        }

        if (!text) return example("query");

        let res = await kuranimeSearch(text.trim());
        if (!res?.title) return sen("Hasil tidak di temukan");
        let txt = `${b3}
${mHeader("Kuranime")}
${leftStyle} Title : ${res.title}
${leftStyle} Url   : ${res.url}
${lines}
${b3}`;
        reduceLimit();
        await sendMedia(res.image, txt);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "kuranimedetail":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        async function KuranimeDetail(url) {
          try {
            const response = await axios.get(url, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              },
            });
            const $ = cheerio.load(response.data);

            const episodes = [];
            const episodeContent = $("#episodeLists").attr("data-content");

            if (episodeContent) {
              const episodeDoc = cheerio.load(episodeContent);

              episodeDoc('a[href*="/episode/"]').each((index, element) => {
                const episodeUrl = episodeDoc(element).attr("href");
                const episodeText = episodeDoc(element).text().trim();
                const hasFlashIcon = episodeDoc(element).find(".fa-fire").length > 0;

                episodes.push({
                  episode_number: index + 1,
                  episode_text: episodeText,
                  episode_url: episodeUrl,
                  is_new: hasFlashIcon,
                });
              });
            }

            const animeData = {
              title: $(".anime__details__title h3").text().trim(),
              alternative_titles: $(".anime__details__title span").text().trim(),
              synopsis: $("#synopsisField").text().trim(),
              image: $(".anime__details__pic").attr("data-setbg"),
              rating: $(".ep .fa-star").parent().text().trim(),
              quality: $(".ep-v2").text().trim(),
              type: $('li:contains("Tipe:") a').text().trim(),
              total_episodes: $('li:contains("Episode:") a').text().trim(),
              status: $('li:contains("Status:") a').text().trim(),
              airing_period: $('li:contains("Tayang:")').text().replace("Tayang:", "").trim(),
              season: $('li:contains("Musim:") a').text().trim(),
              duration: $('li:contains("Durasi:") a').text().trim(),
              quality_detail: $('li:contains("Kualitas:") a').text().trim(),
              country: $('li:contains("Negara:") a').text().trim(),
              source: $('li:contains("Adaptasi:") a').text().trim(),
              genres: $('li:contains("Genre:") a')
                .map((i, el) => $(el).text().trim())
                .get()
                .join(", "),
              explicit: $('li:contains("Eksplisit:")').text().replace("Eksplisit:", "").trim(),
              demographic: $('li:contains("Demografis:") a').text().trim(),
              themes: $('li:contains("Tema:")').text().replace("Tema:", "").trim(),
              studio: $('li:contains("Studio:") a').text().trim(),
              score: $('li:contains("Skor:") a').text().trim(),
              fans: $('li:contains("Peminat:") a').text().trim(),
              age_rating: $('li:contains("Rating:") a').text().trim(),
              credit: $('li:contains("Kredit:") a').text().trim(),
              follow_button: $("#followButton").text().trim(),
              episodes: episodes,
            };

            return animeData;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null;
          }
        }

        if (!text.includes("https://")) return example("link kuranime");
        let res = await KuranimeDetail(text.trim());
        if (!res.title) return sen("Hasil tidak di temukan");

        let txt = `${b3}
${mHeader("Kuranime")}
${leftStyle} Title : ${res.title}
${leftStyle} Season : ${res.season}
${leftStyle} Synopsis : ${res.synopsis}
${leftStyle} Status : ${res.status}
${leftStyle} Rating : ${res.rating}
${leftStyle} Studio : ${res.studio}
${lines}
${b3}`;

        await sendMedia(res.image, txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "googlesearchai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const g = {
        helper: {
          log: function (message) {
            console.log("[google search ai] " + message);
          },
          formatError: function (string) {
            const MAX_LENGTH = 200;
            const type = typeof string;
            if (type !== "string") return "(gak bisa nampilin teks karena type yg di kasih adalah " + type + ")";
            if (!string) return "(empty message)";
            let message = string;
            try {
              message = JSON.stringify(JSON.parse(string), null, 2);
            } catch (_) {}
            if (message.length > MAX_LENGTH) {
              message = message.substring(0, MAX_LENGTH) + "... (trimmed " + (string.length - MAX_LENGTH) + " characters)";
            }
            return message;
          },
        },

        getCookie: async function () {
          this.helper.log("coba ambil kuki");
          const r = await fetch("https://play.google.com/log?format=json&hasfast=true&authuser=0", {
            headers: {
              "accept-encoding": "gzip, deflate, br, zsdch, zstd",
            },
            body: "[[1,null,null,null,null,null,null,null,null,null,[null,null,null,null,'en-ID',null,null,null,[[['Chromium','142'],['Not_A Brand','99'],['Google Chrome','142']],0,'Windows','15.0.0','x86','','142.0.7444.163'],[4,0]]],596,[['1763639555843',null,null,null,null,null,null,\"[null,[\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"],null,null,null,null,null,null,null,[50]]\",null,null,null,null,null,null,-28800,null,null,null,null,null,1,null,null,\"[[[1763639555842000,0,0],4],null,null,[null,null,3,null,null,null,null,null,null,null,\\\"2ahUKEwjtoP2h1YCRAxV1yzgGHeqmFYsQiJoOegYIAAgAEBM\\\"]]\"]],\"1763639555843\",null,null,null,null,null,null,null,null,null,null,null,null,null,[[null,[null,null,null,null,null,null,null,null,null,null,null,null,89978449]],9]]",
            method: "POST",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi getCookie\n" + this.helper.formatError(await r.text()));
          const rawCookie = r.headers.get("set-cookie");
          if (!rawCookie) throw Error("gagal ambil set-cookie");
          const cookie = rawCookie.split(";")[0].trim();
          return { cookie };
        },

        apiSearch: async function (query, cookie) {
          this.helper.log("hit api search");
          const pertanyaan = query;
          const url = "https://www.google.com/async/folif?ei=8wAfaa3bDfWW4-EP6s3W2Ag&yv=3&aep=22&sca_esv=100be553d7950a9c&source=hp&udm=50&stkp=0&cs=1&csuir=0&elrc=CmowYTcxa0tLT3NsZGQyUzhwaGEwQzU1dG10bzRtU09nYzNlZmFPM2dmbDZQWjl1ZnV5S2Q4c1NVUVZXamUwdzRGVzRXdmE3aHBvYlNDWjFpTTVHamhsMTNuXy05MlB5TkFFUm5IRjlTdURREhc4d0FmYWEzYkRmV1c0LUVQNnMzVzJBZxoLUVl3ZG90SUpKTE0&mstk=AUtExfBYZSu-e78DR2kr63-4EO-x1ELfy76o7hjhOVOVzwTATs7ru9uQwfg3SE2TItnNfDWulluSvCH6lvcPL2qBrwsjF2lnO-Drb0_tGndJYTALKwofwExTre-6MDCI_geuLCpH_gcNMJJ7go39xzqNKZqPHmVr1dGHlQg&csui=3&q=" + encodeURIComponent(pertanyaan) + "&ved=1t%3A244952&async=_fmt:adl,_snbasecss:https%3A%2F%2Fwww.gstatic.com%2F_%2Fmss%2Fsearch-next%2F_%2Fss%2Fk%3Dsearch-next.aim.OB36VA5Djzs.L.B1.O%2Fam%3DAAAAAAAAAAAAAAAACAgZAAAAAAQAAAAAIAAAACAAAACAEADAhQgCCEAEEgAAABAAAAAAAAAAgAAAoAAAAABAAAAAAAAAAAAAAABgFgQgCABIAYE3AAMAgEABgAI%2Fd%3D1%2Fexcm%3DASY0Wd%2CAiz46d%2CAo6dnf%2CAzSnD%2CD1nDFc%2CE1OJWe%2CEj7pAc%2CEsqXXd%2CFF5Y8b%2CFWrJQc%2CFckSrf%2CFyH0nb%2CGnLh6e%2CHoxWed%2CIyd0xc%2CKGeR3c%2CRviR3d%2CStgeed%2CTdu1Vc%2CUhtX3d%2CVnu7zd%2CW8NV9d%2CWOOgyb%2CWr4gwf%2CX3KV0%2CXmAqMd%2CZ7MAyf%2Ca419X%2CayDvec%2Cb%2Cb4fE6b%2Cb7b88%2CbT5qhd%2CbTGTre%2CbYAJce%2CblIcIb%2CcuZPYc%2Ce70zne%2CeBhDS%2CfZp0ed%2Cg0BaKe%2CgKbrsf%2Ch5g25d%2CjLZYRc%2CjrKk6c%2CkGVn2c%2CrRecze%2CrXUgd%2CrZPHBe%2CsecKrf%2Ct8ZFHb%2CtXNq8b%2CtxW4Ec%2CuAuYHe%2Cvu0Pcd%2Cw0tqF%2CxBG21%2Cy4TDlb%2CyxVckb%2CzLVn4b%2Fed%3D1%2Fdg%3D2%2Fujg%3D1%2Frs%3DAE5fCmQG1Fy5I8n_8YcfBeoPxr_aKOtqXQ";
          const r = await fetch(url, {
            headers: {
              cookie: cookie,
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
            },
            method: "GET",
          });
          if (!r.ok) throw Error(r.status + " " + r.statusText + " di fungsi search\n" + this.helper.formatError(await r.text()));
          const html = await r.text();
          return { html };
        },

        parseHtml: function (html) {
          const $ = cheerio.load(html);
          $("script, style, noscript").remove();
          $('[style*="display:none"]').remove();
          $("[hidden]").remove();
          $('[aria-hidden="true"]').remove();
          $("[data-ved]").remove();
          $("svg, path").remove();
          $.root()
            .contents()
            .each(function () {
              if (this.type === "comment") $(this).remove();
            });
          const text = $("div[data-target-container-id='5']")
            .map((i, el) => $(el).text().replace(/\s+/g, " ").trim())
            .get()
            .filter(Boolean);
          text.pop();
          return { result: text.join("\n") };
        },

        search: async function (query) {
          if (!query) throw Error("param query gak boleh kosong");
          const { cookie } = await this.getCookie();
          const { html } = await this.apiSearch(query, cookie);
          const { result } = this.parseHtml(html);
          this.helper.log("done");
          return result;
        },
      };

      try {
        if (!text) return example("pertanyaan");

        const result = await g.search(text);

        if (!result) return sen("Hasil tidak di temukan!");

        await sena(result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "s":
    {
      if (!/image|video/.test(mime)) return await sen(`Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let s = await imageToWebp(await downloadToBuffer(media));
      await EdogawaSenq.sendMessage(jid, { sticker: s }, { quoted: qFake });
      await reduceLimit();
    }
    break;

case "qc":
    {
      if (!text) return example("text");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let pp;
      try {
        pp = await EdogawaSenq.profilePictureUrl(sender, "image");
      } catch (err) {
        pp = "https://i.ibb.co/hJMxj93V/image.jpg";
      }
      const json = {
        type: "quote",
        format: "png",
        backgroundColor: "#ffffff",
        width: 516,
        height: 768,
        scale: 1,
        messages: [
          {
            entities: [],
            avatar: true,
            from: {
              id: 1,
              name: m.pushName,
              photo: {
                url: pp,
              },
            },
            text: text,
            replyMessage: {},
          },
        ],
      };
      const response = axios
        .post("https://bot.lyo.su/quote/generate", json, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(async (res) => {
          const buffer = Buffer.from(res.data.result.image, "base64");
          let p = await imageToWebp(buffer);

          await EdogawaSenq.sendMessage(
            jid,
            {
              sticker: p,
            },
            {
              quoted: qFake,
            }
          );
          reduceLimit();
        })
        .catch(async (e) => {
          console.log(e);
          handleError(command, e);
        });
    }
    break;

case "iqc":
    {
      try {
        if (!text) return example("text", "senq ganteng bet");
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        const time = new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        });

        await bentarYa();
        await sendMedia(`${apiv6}/maker/iqc?text=${encodeURIComponent(text)}&chatTime=${encodeURIComponent(time)}&statusBarTime=${encodeURIComponent(time)}`, `Berhasil membuat fake whatsapp ip chat ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "brat":
    {
      if (!text) return example("text");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let i = await getBuffer(`${apiv6}/maker/brat?text=${encodeURIComponent(text)}`);
      let s = await imageToWebp(i);
      await EdogawaSenq.sendMessage(jid, { sticker: s }, { quoted: qFake });
      await reduceLimit();
    }
    break;

case "gura":
    {
      try {
        if (!media) return onlyImage();
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let url = await imageToUrl(await downloadToBuffer(media));

        await sendMedia(`${apiv4}/canvas/gura?imageUrl=${url}`, `Berhasil membuat "gura maker" ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "meme":
    {
      smeme();
    }
    break;

case "smeme":
    {
      smeme();
    }
    break;

case "stiker":
    {
      if (!/image|video/.test(mime)) return await sen(`Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let s = await imageToWebp(await downloadToBuffer(media));
      await EdogawaSenq.sendMessage(jid, { sticker: s }, { quoted: qFake });
      await reduceLimit();
    }
    break;

case "sticker":
    {
      if (!/image|video/.test(mime)) return await sen(`Maaf command ${prefix}${command} hanya bisa digunakan di caption foto atau video!`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let s = await imageToWebp(await downloadToBuffer(media));
      await EdogawaSenq.sendMessage(jid, { sticker: s }, { quoted: qFake });
      await reduceLimit();
    }
    break;

case "bratvid":
    {
      if (!text) return await example("text", "senq");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        let buffVid = await getBuffer(`${apiv3}/canvas/bratvid?text=${encodeURIComponent(text)}`);

        let toWebp = await videoToWebp(buffVid);
        await EdogawaSenq.sendMessage(jid, { sticker: toWebp }, { quoted: qFake });
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "fakedev":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        let [name, verif, bg] = text.split("|").map((i) => i.trim());
        if (!name || !verif) return await example("Nama | on/off | 1/2/3/4/5");
        if (!media) return sen("Sambil kirim foto profil!");
        if (
          bg !== undefined &&
          !fs
            .readdirSync("./assets/image/fakedev/bg/")
            .map((_, i) => `${i + 1}`)
            .find((i) => i === bg)
        )
          return sena(
            `isi bg kosong atau  ${fs
              .readdirSync("./assets/image/fakedev/bg/")
              .map((_, i) => `${i + 1}`)
              .join(" ")}`
          );

        if (bg === undefined) bg = "1";

        await EdogawaSenq.sendMessage(
          jid,
          {
            image: await fakeDev(name, await downloadToBuffer(media), bg, verif),
            caption: "Berhasil membuat fake dev profil ✅",
          },
          { quoted: qFake }
        );
        reduceLimit();
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "bratanime":
    {
      if (!text) return example("text");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let i = await getBuffer(`${apiv2}/api/maker/bratanime?text=${encodeURIComponent(text)}`);
      let s = await imageToWebp(i);
      await EdogawaSenq.sendMessage(jid, { sticker: s }, { quoted: qFake });
      await reduceLimit();
    }
    break;

case "gura-maker":
    {
      try {
        if (!media) return onlyImage();
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let url = await imageToUrl(await downloadToBuffer(media));

        await sendMedia(`${apiv4}/canvas/gura?imageUrl=${url}`, `Berhasil membuat "gura maker" ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "text2anime":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      async function generateAnimeImage(prompt) {
        try {
          return await new Promise(async (resolve, reject) => {
            if (!prompt) return reject("Masukan prompt");

            axios
              .post("https://aiimagegenerator.io/api/model/predict-peach", {
                prompt,
                key: "Anime",
                width: 512,
                height: 768,
                quantity: 1,
                size: "512x768",
                nsfw: true,
              })
              .then((res) => {
                const data = res.data;
                if (data.code !== 0) return reject(data.message);
                if (!data.data?.url) return reject("Gagal membuat gambar");

                return resolve({
                  status: true,
                  image: data.data.url,
                });
              })
              .catch(reject);
          });
        } catch (e) {
          return { status: false, message: e.message };
        }
      }

      if (!text) return example("Prompt");

      try {
        const res = await generateAnimeImage(prompt);
        if (!res.status) throw new Error(res.message);
        await sendMedia(res.image, `Berhasil membuat gambar dari text dengan prompt : ${text} `);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "addbgfakedev":
    {
      try {
        if (!isOwner) return onlyOwner();
        if (!media) return sen("Kirim background untuk fake dev nya!");
        let lastBg = fs.readdirSync("./assets/image/fakedev/bg/").length + 1;

        fs.writeFileSync(`./assets/image/fakedev/bg/fakedev${lastBg}.png`, await downloadToBuffer(media));
        await sen(`Berhasil menmabahkan background fakedev baru id bg : ${lastBg}`);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "done":
    {
      if (!isOwner) return onlyOwner();
      let [item, harga] = text.split("|");
      if (!item || !harga) return example("item | harga");

      function getLocalTimeWIB() {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const wibTime = new Date(utc + 7 * 3600000); // GMT+7

        const yyyy = wibTime.getFullYear();
        const mm = String(wibTime.getMonth() + 1).padStart(2, "0");
        const dd = String(wibTime.getDate()).padStart(2, "0");
        const hh = String(wibTime.getHours()).padStart(2, "0");
        const min = String(wibTime.getMinutes()).padStart(2, "0");

        return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
      }

      const time = getLocalTimeWIB();
      let txt = `${b3}
${topStyle} Transaksi
${leftStyle} Items  : ${item}
${leftStyle} Harga  : ${harga}
${leftStyle} Waktu  : ${time}
${botStyle}
${b3}`;
      await sen(txt);
    }
    break;

case "need":
    {
      if (!isOwner) return onlyOwner();
      EdogawaSenq.sendMessage(jid, {
        text: fs.readFileSync("./src/config/need").toString(),
      });
    }
    break;

case "produk":
    {
      if (!isOwner) return onlyOwner()
      const [action, val, txt] = text.split("|").arrayTrim();

      if (action === "add") {
        const isMedia = media ? await downloadToBuffer(media) : null;
        if (db.listproduk[val]) return sen("nama produk telah di gunakan, silahkan pakai nama lain");
        if (!val || !txt) return example("add | Nama | Keterangan§Tolong masukan nama produk dan keterangan nya, bisa sambil kirim foto");
        db.listproduk[val] = txt;
        if (isMedia) fs.writeFileSync(`./tmp/${val}`, isMedia);
        saveDb();
        sen(`Berhasil menambahkan produk "${val}" ${isMedia ? "dengan media" : "tanpa media"}`);
      } else if (action === "del") {
        if (!db.listproduk?.[val]) return sen(`tidak ada produk dengan nama "${val}" ketik .produk list, untuk melihat semua produk`);
        delete db.listproduk[val];
        sen(`Berhasil menghapus produk "${val}"`);
      } else if (action === "list") {
        let b = Object.keys(db.listproduk);
        if (b.length === 0) return sen("Tidak ada produk untuk saat ini");
        let txt = `${b3}\n${mHeader("Produk")}`;
        b.forEach((v, i) => {
          txt += `${leftStyle} ${i + 1} .produk ${v}\n`;
        });

        txt += `${botStyle}\n${b3}`;
        sen(txt);
      } else {
        if (!db.listproduk?.[action]) return example(`add | Nama | Text∆del | Nama∆list∆Nama§bagian add bisa sabil kirim foto ya, kalau mau liat 1 produk langsung ketik .produk namanya`);

        if (fs.readdirSync(`./tmp/`).includes(action)) {
          sendMedia(fs.readFileSync(`./tmp/${action}`), db.listproduk[action]);
        } else {
          sen(db.listproduk[action]);
        }
      }
    }
    break;

case "proses":
    {
      if (!isOwner) return onlyOwner();
      let [item, harga, durasi] = text.split("|");
      if (!item || !harga || !durasi) return example("item | harga | durasi");

      let txt = `${b3}
${topStyle} Proses
${leftStyle} Items   : ${item}
${leftStyle} Harga   : ${harga}
${leftStyle} Durasi  : ${durasi}
${botStyle}
${b3}`;
      await sen(txt);
    }
    break;

case "setpay":
    {
      if (!isOwner) return onlyOwner();
      let [dn, ov, gp] = text.split("|").arrayTrim();
      if (!dn || !ov || !gp) return example("dana | ovo | gopay§Bisa sambil kirim foto buat qris nya");
      db.dana = dn;
      db.ovo = ov;
      db.gopay = gp;
      if (/image/.test(mime)) {
        fs.writeFileSync("./assets/image/qris.jpg", await downloadToBuffer(media));
      }
      saveDb();
      await sen(`Berhasil set payment dana, ovo, gopay ${/image/.test(mime) ? "& qris " : ""} ✅`);
    }
    break;

case "setovo":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("nope ovo");
      db.ovo = text.trim();
      saveDb();
      await sen("Berhasil set payment ovo ✅");
    }
    break;

case "produck":
    {
      if (!isOwner) return onlyOwner()
      const [action, val, txt] = text.split("|").arrayTrim();

      if (action === "add") {
        const isMedia = media ? await downloadToBuffer(media) : null;
        if (db.listproduk[val]) return sen("nama produk telah di gunakan, silahkan pakai nama lain");
        if (!val || !txt) return example("add | Nama | Keterangan§Tolong masukan nama produk dan keterangan nya, bisa sambil kirim foto");
        db.listproduk[val] = txt;
        if (isMedia) fs.writeFileSync(`./tmp/${val}`, isMedia);
        saveDb();
        sen(`Berhasil menambahkan produk "${val}" ${isMedia ? "dengan media" : "tanpa media"}`);
      } else if (action === "del") {
        if (!db.listproduk?.[val]) return sen(`tidak ada produk dengan nama "${val}" ketik .produk list, untuk melihat semua produk`);
        delete db.listproduk[val];
        sen(`Berhasil menghapus produk "${val}"`);
      } else if (action === "list") {
        let b = Object.keys(db.listproduk);
        if (b.length === 0) return sen("Tidak ada produk untuk saat ini");
        let txt = `${b3}\n${mHeader("Produk")}`;
        b.forEach((v, i) => {
          txt += `${leftStyle} ${i + 1} .produk ${v}\n`;
        });

        txt += `${botStyle}\n${b3}`;
        sen(txt);
      } else {
        if (!db.listproduk?.[action]) return example(`add | Nama | Text∆del | Nama∆list∆Nama§bagian add bisa sabil kirim foto ya, kalau mau liat 1 produk langsung ketik .produk namanya`);

        if (fs.readdirSync(`./tmp/`).includes(action)) {
          sendMedia(fs.readFileSync(`./tmp/${action}`), db.listproduk[action]);
        } else {
          sen(db.listproduk[action]);
        }
      }
    }
    break;

case "addsewa":
    {
      if (!isOwner) return onlyOwner();
      if (!isGroup) return onlyGrup();
      if (Object.keys(db.sewa).includes(jid)) return sen(`Bot sudah di sewa pad Grub ini!, jika mau perpanjang durasi delsewa terus addsewa ulang!`);
      if (!text) return example("1h∆1d∆1m∆1y§H = Jam\nD = Hari\nM = Bulan\nY = Tahun");
      let num = parseInt(text); // ambil angka
      let time = text.slice(-1).toLowerCase(); // ambil huruf terakhir

      function getTime(totalHours) {
        if (isNaN(totalHours) || totalHours < 0) return "Jam tidak valid!";

        // waktu sekarang
        let now = new Date();

        // tambah jam
        now.setHours(now.getHours() + totalHours);

        // format hasil: yyyy-mm-dd HH:MM
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let day = String(now.getDate()).padStart(2, "0");
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}`;
      }

      let kali = 0;

      if (time === "h") {
        kali = 1;
      } else if (time === "d") {
        kali = 24;
      } else if (time === "m") {
        kali = 24 * 30; // asumsi 30 hari per bulan
      } else if (time === "y") {
        kali = 24 * 365; // asumsi 365 hari per tahun
      } else {
        kali = 0; // tidak valid
      }

      // total jam
      let totalHours = num * kali;

      // handle jika input tidak valid
      if (kali === 0 || isNaN(num)) {
        example("1h∆1d∆1m∆1y§H = Jam\nD = Hari\nM = Bulan\nY = Tahun");
      } else {
        let format = time === "h" ? "Jam" : time === "d" ? "Hari" : time === "m" ? "Bulan" : time === "y" ? "Tahun" : "";
        let times = getTime(totalHours);
        let txt = `${b3}
${mHeader("Sewa")}
${leftStyle} Grub   : ${metadata[jid].subject}
${leftStyle} Total  : ${num} ${format}
${leftStyle} Dari   : ${getTime(0)}
${leftStyle} Sampai : ${times}
${lines}
${b3}`;
        let dated = new Date();

        db.sewa[jid] = {
          expired: times,
          dari: getTime(0),
          durasi: `${num} ${format}`,
          name: metadata[jid].subject,
          format: dated.setHours(dated.getHours() + totalHours),
        };
        saveDb();
        await sen(txt);
      }
    }
    break;

case "delsewa":
    {
      if (!isOwner) return onlyOwner();
      if (!isGroup) return onlyGrup();
      if (!Object.keys(db.sewa).includes(jid)) return sen(`Bot belum di sewa pada grub ini!, tidak bisa menghapus sewa bot pada grub!`);

      delete db.sewa[jid];
      saveDb();
      await sen(`Berhasil menghapus sewa bot pada grub ini ✅`);
    }
    break;

case "ceksewa":
    {
      if (!isAdmin) return onlyAdmin();
      if (!db.sewa?.[jid]) return sen(`Kamu belum memuewa bot di grub ini!`);
      let b = db.sewa[jid];

      let txt = `
${b3}
${mHeader(`Cek Sewa`)}
${leftStyle} Name   : ${b.name}
${leftStyle} Durasi : ${b.durasi}
${leftStyle} Dari   : ${b.dari}
${leftStyle} Sampai : ${b.expired}
${lines}
${b3}`;
      await sen(txt);
    }
    break;

case "payment":
    {
      if (!isOwner) return onlyOwner();
      let pth = fs.readFileSync("./assets/image/qris.jpg");
      let txt = `${b3}
${topStyle}  Payment
${leftStyle} Dana  : ${db.dana}
${leftStyle} Ovo   : ${db.ovo}
${leftStyle} Gopay : ${db.gopay}
${botStyle}
${b3}`;
      await EdogawaSenq.sendMessage(jid, { image: pth, caption: txt }, { quoted: m });
    }
    break;

case "setqris":
    {
      if (!isOwner) return onlyOwner();
      if (!/image/.test(mime)) return await sen(`Gunakan command tersebut sambil kirim foto qris`);
      fs.writeFileSync("./assets/image/qris.jpg", await downloadToBuffer(media));
      await sen("Berhasil set payment qris ✅");
    }
    break;

case "setdana":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("nope dana");
      db.dana = text.trim();
      saveDb();
      await sen("Berhasil set payment dana ✅");
    }
    break;

case "setjual":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("format jual");
      fs.writeFileSync("./src/config/jual", text);
      await sen("Berhasil set format jual ✅");
    }
    break;

case "setneed":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("format need");
      fs.writeFileSync("./src/config/need", text);
      await sen("Berhasil set format need ✅");
    }
    break;

case "listsewa":
    {
      if (!isOwner) return onlyOwner();
      let txt = ``;

      if (db.sewa.length === 0) return await sen(`Tidak ada bot yg di sewakan!`);

      Object.entries(db.sewa).forEach(([a, b], idx) => {
        txt += `
${b3}
${mHeader(`Grub ${idx + 1}`)}
${leftStyle} Name   : ${b.name}
${leftStyle} Durasi : ${b.durasi}
${leftStyle} Dari   : ${b.dari}
${leftStyle} Sampai : ${b.expired}
${lines}
${b3}`;
      });
      await sen(txt);
    }
    break;

case "setgopay":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("nope gopay");
      db.gopay = text.trim();
      saveDb();
      await sen("Berhasil set payment gopay ✅");
    }
    break;

case "jpm":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!text && !qBody) return example("text");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some((i) => i.admin !== null && i.id === botNumber);
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(`Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke ${gca.length} grub, di blacklist ${db.bljpm.length}`);

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan!`);
        if (media_) {
          if (/image/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/audio/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                audio: media_,

                ptt: true,
              },
              { quoted: qFake }
            );
          }
        } else {
          await EdogawaSenq.sendMessage(gb, {
            text: teks,
            contextInfo: {
              mentionedJid: [],
              forwardingScore: 9999,
              isForwarded: true,
            },
          });
        }
        total += 1;
        await sleep(10000);
      }

      let t = `Berhasil mengirim pesan ${media ? mime.split("/")[0] : "text"} ke ${total} grub!, di blacklist ${db.bljpm.length} ✅`;

      await sen(t);
    }
    break;

case "jpmch":
    {
      if (!isOwner) return onlyOwner();
      if (db.jpmch.length === 0) return await sen(`tidak ada id saluran di database silahkan ketik *${prefix}addidch id saluran* untuk Menambahkannya ke db`);
      if (!text && !qBody) return example("reply pesan");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;

      await sen(`Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke  ${db.jpmch.length} ch`);

      for (let gb of db.jpmch) {
        if (media_) {
          if (/image/.test(mime)) {
            await EdogawaSenq.sendMessage(gb, {
              image: media_,
              caption: teks,
            });
          } else if (/video/.test(mime)) {
            await EdogawaSenq.sendMessage(gb, {
              video: media_,
              caption: teks,
            });
          } else if (/audio/.test(mime)) {
            await sendVn(media_, gb);
          }
        } else {
          await EdogawaSenq.sendMessage(gb, {
            text: teks,
          });
        }
        total += 1;
        await sleep(5000);
      }

      let t = `Berhasil mengirim pesan ${media ? mime.split("/")[0] : "text"} ke ${total} saluran ✅`;

      await sen(t);
    }
    break;

case "jpmht":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!text && !qBody) return example("text");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some((i) => i.admin !== null && i.id === botNumber);
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(`Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke ${gca.length} grub, di blacklist ${db.bljpm.length}`);

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan ✅`);
        if (media_) {
          if (/image/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/audio/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                audio: media_,
                ptt: true,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          }
        } else {
          await EdogawaSenq.sendMessage(gb, {
            text: teks,
            mentions: af[gb].participants.map((i) => i.jid),
          });
        }
        total += 1;
        await sleep(10000);
      }

      let t = `Berhasil mengirim pesan ${media ? mime.split("/")[0] : "text"} ke ${total} grub!, di blacklist ${db.bljpm.length} ✅`;

      await sen(t);
    }
    break;

case "bljpm":
    {
      if (!isGroup) return onlyGrup();
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.bljpm.push(jid);
        saveDb();
        await sen("Berhasil menyalakan bljpm pada grub ✅");
      } else if (text.clear() === "off") {
        db.bljpm = db.bljpm.filter((i) => i !== jid);
        saveDb();
        await sen("Berhasil mematikan bljpm pada grub ✅");
      } else return example("on / off");
    }
    break;

case "listgc":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      let txt = ``;

      let p = Object.fromEntries(Object.entries(await EdogawaSenq.groupFetchAllParticipating()).sort(([id, obj], [id2, obj2]) => obj2.participants.length - obj.participants.length));

      global.metadata = p;

      Object.keys(p).forEach((i) => {
        let gb = p[i];
        txt += `${b3}
${topStyle} Info Grub`;
        txt += `\n${leftStyle} Name    : ${gb.subject}`;
        txt += `\n${leftStyle} Total   : ${gb.participants.length} Mem`;
        txt += `\n${leftStyle} Id Grub : ${gb.id}`;
        txt += `
${botStyle}
  ${b3}`;
      });
      await sen(txt);
    }
    break;

case "jpmtag":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!text && !qBody) return example("text");
      const teks = text || qBody || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some((i) => i.admin !== null && i.id === botNumber);
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(`Memproses mengirim Pesan ${media ? mime.split("/")[0] : "text"} ke ${gca.length} grub, di blacklist ${db.bljpm.length}`);

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan ✅`);
        if (media_) {
          if (/image/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          } else if (/audio/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                audio: media_,
                ptt: true,
                mentions: af[gb].participants.map((i) => i.jid),
              },
              { quoted: qFake }
            );
          }
        } else {
          await EdogawaSenq.sendMessage(gb, {
            text: teks,
            mentions: af[gb].participants.map((i) => i.jid),
          });
        }
        total += 1;
        await sleep(10000);
      }

      let t = `Berhasil mengirim pesan ${media ? mime.split("/")[0] : "text"} ke ${total} grub!, di blacklist ${db.bljpm.length} ✅`;

      await sen(t);
    }
    break;

case "jpmjeda":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      let [jeda, txt] = text.split("|").map((i) => i.trim());
      if (!Number(jeda) || !txt) return example("jeda | text");
      const teks = txt || "";
      const media_ = media ? await downloadToBuffer(media) : null;
      let total = 0;
      let af = metadata;
      let eg = Object.entries(af)
        .slice(0)
        .map((entry) => entry[1]);
      let fr = eg.filter((g) => {
        let botIsAdmin = g.participants.some((i) => i.admin !== null && i.id === botNumber);
        return g.announce === false || botIsAdmin;
      });

      let gca = fr?.map((v) => v.id).filter((i) => !db.bljpm.includes(i));
      await sen(`Memproses mengirim Pesan jeda ${jeda} ke ${gca.length}`);

      global.isJpm = true;

      for (let gb of gca) {
        if (!isJpm) return sen(`Jpm berhasil di hentikan ✅`);
        if (media_) {
          if (/image/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                image: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          } else if (/video/.test(mime)) {
            await EdogawaSenq.sendMessage(
              gb,
              {
                video: media_,
                caption: teks,
              },
              { quoted: qFake }
            );
          }
        } else {
          await EdogawaSenq.sendMessage(
            gb,
            {
              text: teks,
            },
            { quoted: qFake }
          );
        }
        total += 1;
        await sleep(Number(jeda));
      }

      let t = `Berhasil mengirim pesan jeda ${jeda} ke ${total} grub ✅`;

      await sen(t);
    }
    break;

case "stopjpm":
    {
      if (!isOwner) return onlyOwner();
      if (!global.isPush) return sen(`Kamu tidak sedang Jpm!`);
      global.isJpm = false;
    }
    break;

case "listidgc":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      let txt = ``;

      let p = Object.fromEntries(Object.entries(await EdogawaSenq.groupFetchAllParticipating()).sort(([id, obj], [id2, obj2]) => obj2.participants.length - obj.participants.length));

      global.metadata = p;

      Object.keys(p).forEach((i) => {
        let gb = p[i];
        txt += `${b3}
${topStyle} Info Grub`;
        txt += `\n${leftStyle} Name    : ${gb.subject}`;
        txt += `\n${leftStyle} Total   : ${gb.participants.length} Mem`;
        txt += `\n${leftStyle} Id Grub : ${gb.id}`;
        txt += `
${botStyle}
  ${b3}`;
      });
      await sen(txt);
    }
    break;

case "stoppush":
    {
      if (!isOwner) return onlyOwner();
      if (!global.isPush) return sen(`Kamu tidak sedang pushkontak!`);
      global.isPush = false;
    }
    break;

case "pushkontak1":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!isGroup) return onlyGrup();
      if (!text) return example("text");
      let { subject, participants } = groups;
      let mem = participants.map((i) => i.jid).filter((i) => i !== botNumberJid);

      await sen(`Memproses Pushkontak ke grub "${subject}" ${mem.length} mem`);

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan  ✅`);
        await EdogawaSenq.sendMessage(x, { text: text });
        await sleep(5000);
      }
      await sen(`Berhasil Pushkontak ke grub "${subject}" ${mem.length} mem ✅`);
    }
    break;

case "pushkontak2":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!isGroup) return onlyGrup();
      let [jd, txt] = text.split("|").map((i) => i.trim());
      if (!jd || !txt || !Number(jd) || Number(jd) === 0) return example("jeda |  text");
      let { subject, participants } = groups;
      let mem = participants.map((i) => i.jid).filter((i) => i !== botNumberJid);

      await sen(`Memproses Pushkontak jeda ke grub "${subject}" ${mem.length} mem`);

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan  ✅`);
        await EdogawaSenq.sendMessage(x, { text: txt });
        await sleep(Number(jd));
      }
      await sen(`Berhasil Pushkontak jeda ke grub "${subject}" ${mem.length} mem ✅`);
    }
    break;

case "pushkontak3":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      let [id, txt] = text.split("|").map((i) => i.trim());
      if (!id || !txt) return example("id grub | text");
      let { subject, participants } = metadata[id] || {
        participants: null,
        subject: null,
      };
      if (!subject || !participants) return await sen("Tolong masukan id grub yang ada di nomor kamu!");
      let mem = participants.map((i) => i.jid).filter((i) => i !== botNumberJid);

      await sen(`Memproses Pushkontak id ke grub "${subject}" ${mem.length} mem`);

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan  ✅`);
        await EdogawaSenq.sendMessage(x, { text: txt });
        await sleep(5000);
      }
      await sen(`Berhasil Pushkontak id ke grub "${subject}" ${mem.length} mem ✅`);
    }
    break;

case "pushkontak4":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      let [id, jd, txt] = text.split("|").map((i) => i.trim());
      if (!id || !jd || !txt || !Number(jd) || Number(jd) === 0) return example("id grub | jeda |  text");
      let { subject, participants } = (await EdogawaSenq.groupFetchAllParticipating())[id] || { participants: null, subject: null };
      if (!subject || !participants) return await sen("Tolong masukan id grub yang ada di nomor kamu!");
      let mem = participants.map((i) => i.jid).filter((i) => i !== botNumberJid);

      await sen(`Memproses Pushkontak id jeda ke grub "${subject}" ${mem.length} mem`);

      global.isPush = true;

      for (let x of mem) {
        if (!isPush) return sen(`Pushkontak Berhasil di hentikan  ✅`);
        await EdogawaSenq.sendMessage(x, { text: txt });
        await sleep(Number(jd));
      }
      await sen(`Berhasil Pushkontak id jeda ke grub "${subject}" ${mem.length} mem ✅`);
    }
    break;

case "savekontak1":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!isGroup) return onlyGrup();
      let manuk = groups.participants.map((v) => v.jid).filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            console.log(p);
            const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:Kontak [${p?.split("@")?.[0]?.slice(9, 999)}]`, `TEL;type=CELL;type=VOICE;waid=${p?.split("@")?.[0]}:+${p.split("@")[0]}`, "END:VCARD", ""]?.join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await EdogawaSenq.sendMessage(
          botNumberJid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave ✅",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "savekontak2":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!isGroup) return onlyGrup();
      if (!text) return example("nama");
      let manuk = groups.participants.map((v) => v.jid).filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:${text.trim()} [${p?.split("@")?.[0]?.slice(9, 999)}]`, `TEL;type=CELL;type=VOICE;waid=${p?.split("@")?.[0]}:+${p.split("@")[0]}`, "END:VCARD", ""].join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await EdogawaSenq.sendMessage(
          botNumberJid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave ✅",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "savekontak3":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      if (!text) return example("id grub");
      let gb = metadata[text.trim()];
      if (!gb) return await sen(`Masukan id grub dari .listgc`);
      let manuk = gb.participants.map((v) => v.jid).filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:Kontak [${p.split("@")[0].slice(9, 999)}]`, `TEL;type=CELL;type=VOICE;waid=${p.split("@")[0]}:+${p.split("@")[0]}`, "END:VCARD", ""].join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await EdogawaSenq.sendMessage(
          jid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave ✅",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "savekontak4":
    {
      if (!isOwner) return await sen("Maaf command tersebut hanya bisa di gunakan oleh owner!");
      const [id, nama] = text.split("|").map((i) => i.trim());
      if (!id || !nama) return example("id grub | nama");
      let gb = metadata[id];
      if (!gb) return await sen(`Masukan id grub dari .listgc`);
      let manuk = gb.participants.map((v) => v.jid).filter((v) => v !== sender);

      manuk.forEach(async (i) => {
        db.contacts.push(i);
        saveDb();
      });

      try {
        const uniqueContacts = [...new Set(db.contacts)];
        const vcardContent = uniqueContacts
          .map((p, index) => {
            const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:${nama} [${p.split("@")[0].slice(9, 999)}]`, `TEL;type=CELL;type=VOICE;waid=${p.split("@")[0]}:+${p.split("@")[0]}`, "END:VCARD", ""].join("\n");

            saveDb();
            return vcard;
          })
          .join("");
        fs.writeFileSync("./src/database/contacts.vcf", vcardContent, "utf8");
      } catch (err) {
        await sen(err.toString());
      } finally {
        await EdogawaSenq.sendMessage(
          jid,
          {
            document: fs.readFileSync("./src/database/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File kontak Berhasil di buat\nSilahkan di import agar nomor kesave ✅",
            mimetype: "text/vcard",
            contextInfo: {
              mentionedJid: [sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          },
          {
            quoted: qFake,
          }
        );
        db.contacts.splice(0, db.contacts.length);
        saveDb();
      }
    }
    break;

case "stoppushkontak":
    {
      if (!isOwner) return onlyOwner();
      if (!global.isPush) return sen(`Kamu tidak sedang pushkontak!`);
      global.isPush = false;
    }
    break;

case "cch":
    {
      if (!isOwner) return onlyOwner();
      let [name, des] = text.split("|").map((i) => i.trim());
      if (!name || !des) return example("name, deskripsi");
      try {
        await EdogawaSenq.newsletterCreate(name, des);
        await sen(`Berhasil membuat saluran dengan nama "${name}"  ✅`);
      } catch (e) {
        await sen(`Gagal membuat saluran : ${e.message}`);
      }
    }
    break;

case "ptvch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/video/.test(mime)) return onlyVideo();
      if (!text || !text.endsWith("@newsletter")) return example("id ch");

      await EdogawaSenq.sendMessage(text.trim(), {
        video: await downloadToBuffer(media),
        mimetype: "video/mp4",
        gifPlayback: true,
        ptv: true,
      });

      await sen("Berhasil mengirim video sebagai ptv ke id saluran tersebut ✅");
      reduceLimit();
    }
    break;

case "buatch":
    {
      if (!isOwner) return onlyOwner();
      let [name, des] = text.split("|").map((i) => i.trim());
      if (!name || !des) return example("name, deskripsi");
      try {
        await EdogawaSenq.newsletterCreate(name, des);
        await sen(`Berhasil membuat saluran dengan nama "${name}"  ✅`);
      } catch (e) {
        await sen(`Gagal membuat saluran : ${e.message}`);
      }
    }
    break;

case "playch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let [query, idch] = text.split("|").map((i) => i.trim());
      if (!query || !idch.endsWith("@newsletter")) return example("query | idch§Gunakan .cekidch untuk mendapatkan id saluran");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(query)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await sendVnThumbnail(await getBuffer(data.result.dlink), idch, data.result.thumbnail, data.result.title, "", data.result.url);

        await sen("Berhasil play audio di id saluran tersebut ✅");
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "mute-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterMute(idch);
        await sen("Berhasil Saluran telah dimute ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "meta-ch":
    {
      try {
        if (!text) return example("link ch");

        let meta = await EdogawaSenq.newsletterMetadata("invite", text.trim().split("/")[4]);
        await sen(JSON.stringify(meta, null, 2));
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "desc-ch":
    {
      try {
        if (!text) return example("link ch|deskripsi");

        const [linkch, deskripsi] = text.split("|").map((v) => v.trim());
        let idch = await getIdCh(linkch);

        await EdogawaSenq.newsletterUpdateDescription(idch, deskripsi);
        await sen("Berhasil mengubah deskripsi saluran ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "csaluran":
    {
      if (!isOwner) return onlyOwner();
      let [name, des] = text.split("|").map((i) => i.trim());
      if (!name || !des) return example("name, deskripsi");
      try {
        await EdogawaSenq.newsletterCreate(name, des);
        await sen(`Berhasil membuat saluran dengan nama "${name}"  ✅`);
      } catch (e) {
        await sen(`Gagal membuat saluran : ${e.message}`);
      }
    }
    break;

case "createch":
    {
      if (!isOwner) return onlyOwner();
      let [name, des] = text.split("|").map((i) => i.trim());
      if (!name || !des) return example("name, deskripsi");
      try {
        await EdogawaSenq.newsletterCreate(name, des);
        await sen(`Berhasil membuat saluran dengan nama "${name}"  ✅`);
      } catch (e) {
        await sen(`Gagal membuat saluran : ${e.message}`);
      }
    }
    break;

case "fetch-ch":
    {
      try {
        if (!text) return example("link ch|limit");

        const [linkch, limit] = text.split("|").map((v) => v.trim());
        let idch = await getIdCh(linkch);

        let res = await EdogawaSenq.newsletterFetchMessages(idch, Number(limit) || 10);

        await sen(`📨 Berhasil fetch ${res.messages.length} pesan ✅`);
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "setpp-ch":
    {
      try {
        if (!text) return example("link ch + kirim gambar");
        if (!/image/.test(mime)) return onlyImage();

        let buff = await downloadToBuffer(media);
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterUpdatePicture(idch, buff);
        await sen(" Foto Saluran berhasil diupdate ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "delpp-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterRemovePicture(idch);
        sen("Berhasil menghapus foto profil saluran ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "owner-ch":
    {
      try {
        if (!text) return example("link ch|nomor");

        const [linkch, no] = text.split("|").map((v) => v.trim());
        let idch = await getIdCh(linkch);
        let jid = await searchJid(no);

        await EdogawaSenq.newsletterChangeOwner(idch, jid);
        await sen("Berhasil mengganti owner saluran ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "follow-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterFollow(idch);
        await sen("Berhasil mengfollow saluran ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "unmute-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterUnmute(idch);
        await sen("Berhasil Saluran telah diunmute ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "rename-ch":
    {
      try {
        if (!text) return example("link ch|nama baru");

        const [linkch, nama] = text.split("|").map((v) => v.trim());
        let idch = await getIdCh(linkch);

        await EdogawaSenq.newsletterUpdateName(idch, nama);
        await sen(" Nama Saluran berhasil diubah ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "demote-ch":
    {
      try {
        if (!text) return example("link ch|nomor");

        const [linkch, no] = text.split("|").map((v) => v.trim());
        let idch = await getIdCh(linkch);
        let jid = await searchJid(no);

        await EdogawaSenq.newsletterDemote(idch, jid);
        await sen("Berhasil mengdemote nomor tersebut ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "delete-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterDelete(idch);
        await sen("Saluran berhasil dihapus ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "unfollow-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        await EdogawaSenq.newsletterUnfollow(idch);
        await sen("Berhasil unfollow saluran ✅");
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "admincount-ch":
    {
      try {
        if (!text) return example("link ch");
        let idch = await getIdCh(text.trim());

        let count = await EdogawaSenq.newsletterAdminCount(idch);
        await sen(`Total admin Saluran : ${count} admin`);
      } catch (e) {
        console.error(e);
        handleError(command, e);
      }
    }
    break;

case "paptt":
    {
      if (!isPrem) return onlyPrem();
      const paptt = ["https://telegra.ph/file/5c62d66881100db561c9f.mp4", "https://telegra.ph/file/a5730f376956d82f9689c.jpg", "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg", "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4", "https://telegra.ph/file/b58a5b8177521565c503b.mp4", "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg", "https://telegra.ph/file/73c0fecd276c19560133e.jpg", "https://telegra.ph/file/af029472c3fcf859fd281.jpg", "https://telegra.ph/file/0e5be819fa70516f63766.jpg", "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg", "https://telegra.ph/file/85883c0024081ffb551b8.jpg", "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg", "https://telegra.ph/file/267744a1a8c897b1636b9.jpg"];
      await sendMedia(pickRandom(paptt), `Noh Pap tt wkkw`);
    }
    break;

case "bokep1":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=yUI9qHxy1");
    }
    break;

case "bokep2":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=taEdfX521");
    }
    break;

case "bokep3":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=IZ2dEEPR1");
    }
    break;

case "bokep4":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=cFmHXLnR1");
    }
    break;

case "bokep5":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=VkhX0rIY1");
    }
    break;

case "bokep6":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=HbciV3Ng1");
    }
    break;

case "bokep7":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=iDZaNE341");
    }
    break;

case "bokep8":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=99FZhvO21");
    }
    break;

case "bokep9":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=5JeZNWaH1");
    }
    break;

case "bokep10":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=KTw1lWWa1");
    }
    break;

case "bokep11":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=UdqYuonc1");
    }
    break;

case "bokep12":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=vApGwZAC1");
    }
    break;

case "bokep13":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=ji0jr2f71");
    }
    break;

case "bokep14":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=kxx94sEr1");
    }
    break;

case "bokep15":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=jRlBDROc1");
    }
    break;

case "bokep16":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=LevNyK2x1");
    }
    break;

case "bokep17":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=a1Uim8Ey");
    }
    break;

case "bokep18":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videyvideo.short.gy/Cwdcj1");
    }
    break;

case "bokep19":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=bliIEHfL1");
    }
    break;

case "bokep20":
    {
      if (!isPrem) return onlyPrem();
      await sena("https://videy.co/v?id=Yep64SD61");
    }
    break;

case "tt":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/download/tiktok?url=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} TikTok Mp4 
${leftStyle} Views    : ${data.result.stats.views}
${leftStyle} Like     : ${data.result.stats.likes}
${leftStyle} Comment  : ${data.result.stats.comment}
${leftStyle} Share    : ${data.result.stats.share}
${leftStyle} Download : ${data.result.stats.download}
${botStyle}
${b3}
${b3}
${topStyle} Author 
${leftStyle} Names     : ${data.result.author.nickname}
${leftStyle} User Name : ${data.result.author.username}
${botStyle}
${b3}
${b3}
${topStyle} Caption 
${data.result.title}
${botStyle}
${b3}`;

        sendMedia(data.result.data[0].url, txt, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "sf":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text.includes("https://sfile.mobi")) return example("https://sfile.mobi/xxxxxxx/");

      try {
        let hasil = await sfileDownload.download(text);
        let { filename, filesize, mimetype } = hasil.data;
        let sfdl = hasil.data.result;
        let sfcap = `${b3}
${mHeader("Sfile Dl")}
${leftStyle} Name : ${filename}
${leftStyle} Type : ${mimetype}
${leftStyle} Size : ${filesize}
${leftStyle} Url  : ${text}
${lines}
${b3}`;

        await EdogawaSenq.sendMessage(
          jid,
          {
            document: sfdl.buffer,
            mimetype: sfdl.mimeType,
            fileName: sfdl.filename,
            caption: sfcap,
          },
          { quoted: qFake }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "yts":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const {
          data: {
            result: [res],
          },
        } = await axios.get(`${apiv1}/api/search/youtube?q=${encodeURIComponent(teks)}`);

        if (!res) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} YouTube Mp4 
${leftStyle} Title    : ${res.title}
${leftStyle} Upload   : ${res.upload_at}
${leftStyle} Duration : ${res.duration}
${leftStyle} Views    : ${res.views}
${botStyle}
${b3}`;

        await sen(
          txt,
          jid,
          false,
          getValidButtonReply([
            ["Download Video", ".ytmp4 " + res.url],
            ["Download Audio", ".ytmp3 " + res.url],
          ])
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "aio":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("link");

        let res = await fetch("https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "Mozilla/5.0",
            "x-rapidapi-host": "auto-download-all-in-one.p.rapidapi.com",
            "x-rapidapi-key": "1dda0d29d3mshc5f2aacec619c44p16f219jsn99a62a516f98",
          },
          body: JSON.stringify({ url: text }),
        });

        let json = await res.json();

        let medias = json?.medias || json?.data?.medias || json?.result?.links || [];

        if (!Array.isArray(medias) || medias.length === 0) return sen("Media tidak ditemukan atau link tidak didukung");

        let source = json.source || json.platform || "-";
        let title = json.title || "-";

        let video = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("video"));
        let audio = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("audio"));
        let image = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("image"));

        if (video.length > 0) {
          let bestVideo = video.sort((a, b) => (b.resolution || "").localeCompare(a.resolution || ""))[0];

          let videoRes = await fetch(bestVideo.url || bestVideo.link);
          let buffer = Buffer.from(await videoRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Video
${leftStyle} Quality : ${bestVideo.quality || bestVideo.resolution || "-"}
${lines}
${b3}`;

          await sendMedia(buffer, caption);

          return;
        }

        if (audio.length > 0) {
          let bestAudio = audio[0];

          let audioRes = await fetch(bestAudio.url || bestAudio.link);
          let buffer = Buffer.from(await audioRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          await EdogawaSenq.sendMessage(
            jid,
            {
              audio: buffer,
              mimetype: fileType || "audio/mpeg",
            },
            { quoted: qFake }
          );

          return;
        }

        if (image.length > 0) {
          let bestImage = image[0];

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Image
${lines}
${b3}`;

          await sendMedia(buffer, caption);
          reduceLimit();
        }
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "fbdl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let res = await axios.get(`${apiv5}/api/v1/download/facebook?url=${encodeURIComponent(text)}`);
        let data = res.data;

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");
        let buff = await getBuffer(data.result.download.hd);
        sendMedia(buff, `Berhasil mendownload video dari facebook ✅`, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "igdl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/download/instagram?url=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} Instagram DL 
${leftStyle} Like     : ${data.result.statistics.like_count || "-"}
${leftStyle} View     : ${data.result.statistics.view_count || "-"}
${leftStyle} Share    : ${data.result.statistics.share_count || "-"}
${leftStyle} Comment  : ${data.result.statistics.comment_count || "-"}
${botStyle}
${b3}
${b3}
${topStyle} Author 
${leftStyle} Names     : ${data.result.profile.full_name}
${leftStyle} User Name : ${data.result.profile.username}
${leftStyle} Verified  : ${data.result.profile.s_verified || "-"}
${botStyle}
${b3}`;

        sendMedia(data.result.data[0].url, txt, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "play":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio: { url: data.result.dlink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.thumbnail,
                title: data.result.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "sfdl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text.includes("https://sfile.mobi")) return example("https://sfile.mobi/xxxxxxx/");

      try {
        let hasil = await sfileDownload.download(text);
        let { filename, filesize, mimetype } = hasil.data;
        let sfdl = hasil.data.result;
        let sfcap = `${b3}
${mHeader("Sfile Dl")}
${leftStyle} Name : ${filename}
${leftStyle} Type : ${mimetype}
${leftStyle} Size : ${filesize}
${leftStyle} Url  : ${text}
${lines}
${b3}`;

        await EdogawaSenq.sendMessage(
          jid,
          {
            document: sfdl.buffer,
            mimetype: sfdl.mimeType,
            fileName: sfdl.filename,
            caption: sfcap,
          },
          { quoted: qFake }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ttmp4":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/download/tiktok?url=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} TikTok Mp4 
${leftStyle} Views    : ${data.result.stats.views}
${leftStyle} Like     : ${data.result.stats.likes}
${leftStyle} Comment  : ${data.result.stats.comment}
${leftStyle} Share    : ${data.result.stats.share}
${leftStyle} Download : ${data.result.stats.download}
${botStyle}
${b3}
${b3}
${topStyle} Author 
${leftStyle} Names     : ${data.result.author.nickname}
${leftStyle} User Name : ${data.result.author.username}
${botStyle}
${b3}
${b3}
${topStyle} Caption 
${data.result.title}
${botStyle}
${b3}`;

        sendMedia(data.result.data[0].url, txt, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ttmp3":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return await example("Url", "Link");
      try {
        await react(emoji.jam);
        let { data } = await axios.get(`${apiv5}/api/v1/download/tiktok?url=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        const audio = await getBuffer(data.result.data[0].url);

        await sendVnThumbnail(audio, jid, data.result.author.avatar, data.result.author.nickname, data.result.title, text);

        await reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytmp3":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");

      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytmp3?url=${encodeURIComponent(text)}`);
        if (!data.status) return warning(`Maaf kak link video tersebut tidak dapat di download ${s}`);

        const video = await getBuffer(data.result.dlink);
        const audio = await toAudio(video);

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.youtube.thumbnail,
                title: data.result.youtube.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytmp4":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let { data } = await axios.get(`${apiv6}/downloader/ytmp4?url=${encodeURIComponent(text)}&quality=360`);
        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        const video = await getBuffer(data.result.downloadUrl);
        await sendMedia(audio, `Berhasil mengunduh video youtube`, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "aiodl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("link");

        let res = await fetch("https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "Mozilla/5.0",
            "x-rapidapi-host": "auto-download-all-in-one.p.rapidapi.com",
            "x-rapidapi-key": "1dda0d29d3mshc5f2aacec619c44p16f219jsn99a62a516f98",
          },
          body: JSON.stringify({ url: text }),
        });

        let json = await res.json();

        let medias = json?.medias || json?.data?.medias || json?.result?.links || [];

        if (!Array.isArray(medias) || medias.length === 0) return sen("Media tidak ditemukan atau link tidak didukung");

        let source = json.source || json.platform || "-";
        let title = json.title || "-";

        let video = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("video"));
        let audio = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("audio"));
        let image = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("image"));

        if (video.length > 0) {
          let bestVideo = video.sort((a, b) => (b.resolution || "").localeCompare(a.resolution || ""))[0];

          let videoRes = await fetch(bestVideo.url || bestVideo.link);
          let buffer = Buffer.from(await videoRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Video
${leftStyle} Quality : ${bestVideo.quality || bestVideo.resolution || "-"}
${lines}
${b3}`;

          await sendMedia(buffer, caption);

          return;
        }

        if (audio.length > 0) {
          let bestAudio = audio[0];

          let audioRes = await fetch(bestAudio.url || bestAudio.link);
          let buffer = Buffer.from(await audioRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          await EdogawaSenq.sendMessage(
            jid,
            {
              audio: buffer,
              mimetype: fileType || "audio/mpeg",
            },
            { quoted: qFake }
          );

          return;
        }

        if (image.length > 0) {
          let bestImage = image[0];

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Image
${lines}
${b3}`;

          await sendMedia(buffer, caption);
          reduceLimit();
        }
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "videy":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("link");
        let res = await axios.get(`https://vapis.my.id/api/videy?url=${Enc(text)}`);
        await sendMedia(res.data, "Berhasil mendownload video dari videy ✅");
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "sfile":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text.includes("https://sfile.mobi")) return example("https://sfile.mobi/xxxxxxx/");

      try {
        let hasil = await sfileDownload.download(text);
        let { filename, filesize, mimetype } = hasil.data;
        let sfdl = hasil.data.result;
        let sfcap = `${b3}
${mHeader("Sfile Dl")}
${leftStyle} Name : ${filename}
${leftStyle} Type : ${mimetype}
${leftStyle} Size : ${filesize}
${leftStyle} Url  : ${text}
${lines}
${b3}`;

        await EdogawaSenq.sendMessage(
          jid,
          {
            document: sfdl.buffer,
            mimetype: sfdl.mimeType,
            fileName: sfdl.filename,
            caption: sfcap,
          },
          { quoted: qFake }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytsong":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");

      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytmp3?url=${encodeURIComponent(text)}`);
        if (!data.status) return warning(`Maaf kak link video tersebut tidak dapat di download ${s}`);

        const video = await getBuffer(data.result.dlink);
        const audio = await toAudio(video);

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.youtube.thumbnail,
                title: data.result.youtube.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "drivedl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let res = await axios.get(`${apiv5}/api/v1/download/drive?url=${encodeURIComponent(text)}`);
        let data = res.data;

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} GDrive DL 
${leftStyle} File Name : ${data.result.fileName}
${leftStyle} MimeType  : ${data.result.mimeType}
${leftStyle} Size      : ${data.result.sizeBytes}
${botStyle}
${b3}
${b3}
${topStyle} Uploader 
${leftStyle} Name    : ${data.result.uploader.name}
${leftStyle} Email   : ${data.result.uploader.email}
${botStyle}
${b3}`;

        sendMedia(data.result.downloadUrl, txt, jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytaudio":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");

      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytmp3?url=${encodeURIComponent(text)}`);
        if (!data.status) return warning(`Maaf kak link video tersebut tidak dapat di download ${s}`);

        const video = await getBuffer(data.result.dlink);
        const audio = await toAudio(video);

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.youtube.thumbnail,
                title: data.result.youtube.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytmusic":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");

      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytmp3?url=${encodeURIComponent(text)}`);
        if (!data.status) return warning(`Maaf kak link video tersebut tidak dapat di download ${s}`);

        const video = await getBuffer(data.result.dlink);
        const audio = await toAudio(video);

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.youtube.thumbnail,
                title: data.result.youtube.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytmusik":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");

      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytmp3?url=${encodeURIComponent(text)}`);
        if (!data.status) return warning(`Maaf kak link video tersebut tidak dapat di download ${s}`);

        const video = await getBuffer(data.result.dlink);
        const audio = await toAudio(video);

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio,
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.youtube.thumbnail,
                title: data.result.youtube.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "playmp3":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio: { url: data.result.dlink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.thumbnail,
                title: data.result.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "snackdl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("link snack video");
      let res = SnackVideo(text.trim());
      await sendMedia(res.media.video_url, "Berhasil mengdownload video dari snackvideo ✅");
      reduceLimit();
    }
    break;

case "videydl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("link");
        let res = await axios.get(`https://vapis.my.id/api/videy?url=${Enc(text)}`);
        await sendMedia(res.data, "Berhasil mendownload video dari videy ✅");
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "sfiledl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text.includes("https://sfile.mobi")) return example("https://sfile.mobi/xxxxxxx/");

      try {
        let hasil = await sfileDownload.download(text);
        let { filename, filesize, mimetype } = hasil.data;
        let sfdl = hasil.data.result;
        let sfcap = `${b3}
${mHeader("Sfile Dl")}
${leftStyle} Name : ${filename}
${leftStyle} Type : ${mimetype}
${leftStyle} Size : ${filesize}
${leftStyle} Url  : ${text}
${lines}
${b3}`;

        await EdogawaSenq.sendMessage(
          jid,
          {
            document: sfdl.buffer,
            mimetype: sfdl.mimeType,
            fileName: sfdl.filename,
            caption: sfcap,
          },
          { quoted: qFake }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "fdroiddl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link Fdroid");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/download/fdroid?url=${encodeURIComponent(text)}`);

        if (!data?.result) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txtLink = "";
        let txtVersion = "";

        data.result.links.forEach((i, idx) => {
          txtLink += `
${b3}
${topStyle} Href ${idx}
${leftStyle} Name : ${i.text}
${leftStyle} Link : ${i.href}
${botStyle}
${b3}
`;
        });

        data.result.versions.forEach((i, idx) => {
          txtVersion += `${b3}
${topStyle} Version ${idx}
${leftStyle} Version : ${i.version}
${leftStyle} Added   : ${i.added}
${leftStyle} Size    : ${i.size}
${leftStyle} Link    : ${i.link}
${botStyle}
${b3}
`;
        });

        let txt = `${b3}
${topStyle} Froid dL 
${leftStyle} Name    : ${data.result.name}
${leftStyle} Summary : ${data.result.summary}
${botStyle}
${b3}
${b3}
${topStyle} Description 
${data.result.description}
${botStyle}

${txtVersion}

${txtLink}

`;

        await sen(txt);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytsearch":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const {
          data: {
            result: [res],
          },
        } = await axios.get(`${apiv1}/api/search/youtube?q=${encodeURIComponent(teks)}`);

        if (!res) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} YouTube Mp4 
${leftStyle} Title    : ${res.title}
${leftStyle} Upload   : ${res.upload_at}
${leftStyle} Duration : ${res.duration}
${leftStyle} Views    : ${res.views}
${botStyle}
${b3}`;

        await sen(
          txt,
          jid,
          false,
          getValidButtonReply([
            ["Download Video", ".ytmp4 " + res.url],
            ["Download Audio", ".ytmp3 " + res.url],
          ])
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "gitclone":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("url", "https://github.com/Senq");
      try {
        let [user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
        await EdogawaSenq
          .sendMessage(
            jid,
            {
              document: {
                url: `https://api.github.com/repos/${user}/${repo}/zipball`,
              },
              fileName: repo + ".zip",
              mimetype: "application/zip",
            },
            { quoted: m }
          )
          .catch(async (e) => await sena(e.toString()));
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "spotifydl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("Url", "Link");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/download/spotify?url=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan, tolong masukan url yang valid!");

        let txt = `${b3}
${topStyle} Spotify DL 
${leftStyle} Title   : ${data.result.title}
${leftStyle} Type    : ${data.result.type}
${leftStyle} Release : ${data.result.releaseDate}
${leftStyle} Artist  : ${data.result.artists}
${botStyle}
${b3}`;

        let buff = await toAudio(await getBuffer(data.result.music));
        await sen(txt);
        await sendMedia(buff, "", jid);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "playaudio":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio: { url: data.result.dlink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.thumbnail,
                title: data.result.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "ytplaymp3":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio: { url: data.result.dlink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.thumbnail,
                title: data.result.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "snackviddl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("link snack video");
      let res = SnackVideo(text.trim());
      await sendMedia(res.media.video_url, "Berhasil mengdownload video dari snackvideo ✅");
      reduceLimit();
    }
    break;

case "ytplayaudio":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("query", "preset");
      try {
        const { data } = await axios.get(`${apiv6}/downloader/ytplay?q=${encodeURIComponent(text)}`);

        if (!data.status) return await sen("Hasil tidak di temukan");

        await EdogawaSenq.sendMessage(
          jid,
          {
            audio: { url: data.result.dlink },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                renderLargerThumbnail: true,
                thumbnailUrl: data.result.thumbnail,
                title: data.result.title,
                mediaType: 1,
                sourceUrl: text,
              },
            },
          },
          { quoted: m }
        );
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "snackvideodl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("link snack video");
      let res = SnackVideo(text.trim());
      await sendMedia(res.media.video_url, "Berhasil mengdownload video dari snackvideo ✅");
      reduceLimit();
    }
    break;

case "alldownloader":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("link");

        let res = await fetch("https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "Mozilla/5.0",
            "x-rapidapi-host": "auto-download-all-in-one.p.rapidapi.com",
            "x-rapidapi-key": "1dda0d29d3mshc5f2aacec619c44p16f219jsn99a62a516f98",
          },
          body: JSON.stringify({ url: text }),
        });

        let json = await res.json();

        let medias = json?.medias || json?.data?.medias || json?.result?.links || [];

        if (!Array.isArray(medias) || medias.length === 0) return sen("Media tidak ditemukan atau link tidak didukung");

        let source = json.source || json.platform || "-";
        let title = json.title || "-";

        let video = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("video"));
        let audio = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("audio"));
        let image = medias.filter((v) => (v.type || v.mime || "").toLowerCase().includes("image"));

        if (video.length > 0) {
          let bestVideo = video.sort((a, b) => (b.resolution || "").localeCompare(a.resolution || ""))[0];

          let videoRes = await fetch(bestVideo.url || bestVideo.link);
          let buffer = Buffer.from(await videoRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Video
${leftStyle} Quality : ${bestVideo.quality || bestVideo.resolution || "-"}
${lines}
${b3}`;

          await sendMedia(buffer, caption);

          return;
        }

        if (audio.length > 0) {
          let bestAudio = audio[0];

          let audioRes = await fetch(bestAudio.url || bestAudio.link);
          let buffer = Buffer.from(await audioRes.arrayBuffer());
          let fileType = magic.filetypemime(buffer);

          await EdogawaSenq.sendMessage(
            jid,
            {
              audio: buffer,
              mimetype: fileType || "audio/mpeg",
            },
            { quoted: qFake }
          );

          return;
        }

        if (image.length > 0) {
          let bestImage = image[0];

          let caption = `${b3}
${mHeader("AIO Dl")}
${leftStyle} Source  : ${source}
${leftStyle} Title   : ${title}
${leftStyle} Type    : Image
${lines}
${b3}`;

          await sendMedia(buffer, caption);
          reduceLimit();
        }
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "cry":
    {
      await caseSticker(command);
    }
    break;

case "nom":
    {
      await caseSticker(command);
    }
    break;

case "hug":
    {
      axios.get(`https://api.waifu.pics/sfw/${command}`).then(async ({ data }) => {
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let b = await getBuffer(data.url);
        let y = await videoToWebp(b);

        await EdogawaSenq.sendMessage(
          jid,
          {
            sticker: y,
          },
          {
            quoted: qFake,
          }
        );
        reduceLimit();
      });
    }
    break;

case "pat":
    {
      axios.get(`https://api.waifu.pics/sfw/${command}`).then(async ({ data }) => {
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let b = await getBuffer(data.url);
        let y = await videoToWebp(b);

        await EdogawaSenq.sendMessage(
          jid,
          {
            sticker: y,
          },
          {
            quoted: qFake,
          }
        );
        reduceLimit();
      });
    }
    break;

case "woof":
    {
      axios.get(`https://nekos.life/api/v2/img/${command}`).then(async ({ data }) => {
        try {
          if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

          await bentarYa();
          let b = await getBuffer(data.url);
          let j = await videoToWebp(b);
          EdogawaSenq.sendMessage(
            jid,
            {
              sticker: j,
            },
            { quoted: qFake }
          );
          reduceLimit();
        } catch (e) {
          handleError(command, e);
        }
      });
    }
    break;

case "gecg":
    {
      await caseSticker2(command);
    }
    break;

case "feed":
    {
      await caseSticker2(command);
    }
    break;

case "meow":
    {
      await caseSticker2(command);
    }
    break;

case "kill":
    {
      await caseSticker(command);
    }
    break;

case "bite":
    {
      await caseSticker(command);
    }
    break;

case "yeet":
    {
      await caseSticker(command);
    }
    break;

case "bonk":
    {
      await caseSticker(command);
    }
    break;

case "wink":
    {
      await caseSticker(command);
    }
    break;

case "poke":
    {
      await caseSticker(command);
    }
    break;

case "slap":
    {
      await caseSticker(command);
    }
    break;

case "wave":
    {
      await caseSticker(command);
    }
    break;

case "awoo":
    {
      await caseSticker(command);
    }
    break;

case "smug":
    {
      await caseSticker(command);
    }
    break;

case "lick":
    {
      axios.get(`https://api.waifu.pics/sfw/${command}`).then(async ({ data }) => {
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let b = await getBuffer(data.url);
        let y = await videoToWebp(b);

        await EdogawaSenq.sendMessage(
          jid,
          {
            sticker: y,
          },
          {
            quoted: qFake,
          }
        );
        reduceLimit();
      });
    }
    break;

case "kiss":
    {
      axios.get(`https://api.waifu.pics/sfw/${command}`).then(async ({ data }) => {
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

        await bentarYa();
        let b = await getBuffer(data.url);
        let y = await videoToWebp(b);

        await EdogawaSenq.sendMessage(
          jid,
          {
            sticker: y,
          },
          {
            quoted: qFake,
          }
        );
        reduceLimit();
      });
    }
    break;

case "8ball":
    {
      axios.get(`https://nekos.life/api/v2/img/${command}`).then(async ({ data }) => {
        try {
          if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

          await bentarYa();
          let b = await getBuffer(data.url);
          let j = await videoToWebp(b);
          EdogawaSenq.sendMessage(
            jid,
            {
              sticker: j,
            },
            { quoted: qFake }
          );
          reduceLimit();
        } catch (e) {
          handleError(command, e);
        }
      });
    }
    break;

case "goose":
    {
      await caseSticker2(command);
    }
    break;

case "spank":
    {
      await caseSticker2(command);
    }
    break;

case "bully":
    {
      await caseSticker(command);
    }
    break;

case "smile":
    {
      await caseSticker(command);
    }
    break;

case "blush":
    {
      await caseSticker(command);
    }
    break;

case "glomp":
    {
      await caseSticker(command);
    }
    break;

case "happy":
    {
      await caseSticker(command);
    }
    break;

case "dance":
    {
      await caseSticker(command);
    }
    break;

case "avatar":
    {
      await caseSticker2(command);
    }
    break;

case "lizard":
    {
      await caseSticker2(command);
    }
    break;

case "tickle":
    {
      await caseSticker2(command);
    }
    break;

case "cringe":
    {
      await caseSticker(command);
    }
    break;

case "cuddle":
    {
      await caseSticker(command);
    }
    break;

case "fox_girl":
    {
      await caseSticker2(command);
    }
    break;

case "highfive":
    {
      await caseSticker(command);
    }
    break;

case "handhold":
    {
      await caseSticker(command);
    }
    break;

case "tf":
    {
      let [cmd, no, nominal] = text.split(",").arrayTrim();

      if (!cmd || !nominal || !no) return example("coin, tag∆limit, tag");

      if (!db.user[await decode(no)]) return await sen("Tolong masukan nomor yang sudah terdaftar di database / sudah pernah memakai bot ini!");

      if (cmd === "coin") {
        if (fixNumber(nominal) > profil.coin) return await sen(`Kamu tidak Memiliki coin sebanyak itu`);
        red("coin", fixNumber(nominal));
        await add("coin", fixNumber(nominal), await decode(no));
        await sen(`Kamu telah transfer coin sebanyak ${formatRupiah(nominal)} coin ke @${(await decode(no)).getNumber()} !`, jid, false, getValidButtonReply([["Profil", ".me"]]));
        saveDb();
      } else if (cmd === "limit") {
        if (fixNumber(nominal) > profil.limit) return await sen(`Kamu tidak Memiliki limit sebanyak itu`);
        red("limit", fixNumber(nominal));
        await add("limit", fixNumber(nominal), await decode(no));
        await sen(`Kamu telah transfer limit sebanyak ${formatRupiah(nominal)} limit ke @${(await decode(no)).getNumber()} !`, jid, false, getValidButtonReply([["Profil", ".me"]]));
        saveDb();
      } else {
        example("coin, @tag∆limit, tag");
      }
    }
    break;

case "me":
    {
      await updateFarmAndKolamLevels();
      await updatePet();
      let user = db.user[sender];
      profil.user = 1 == 2 ? "Developer" : isOwner ? "Owner" : isPrem ? "Premium" : "User";
      saveDb();
      const { exp: currentExp, maxExp, level, name } = user;

      const images = `${apiv6}/canvas/welcome?username=${name}&guildName=My+profil&memberCount=${Object.keys(db.user).length}&avatar=${profil.profil}&background=${encodeURIComponent("https://files.catbox.moe/tjq1v3.jpeg")}&quality=99`;

      let txt = `${b3}
${mHeader(`You Profile`)}
${leftStyle} Name   : ${user.name}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} Level  : ${formatRupiah(user.level)}
${leftStyle} Role   : ${user.user}
${lines}
${b3}
${b3}
${mHeader("Inventory")}
${leftStyle} Hp     : ${user.hp} / ${user.maxHp}
${leftStyle} Exp    : ${formatRupiah(user.exp)} / ${formatRupiah(user.maxExp)}
${leftStyle} Limit  : ${formatRupiah(user.limit)}
${leftStyle} Coin   : ${formatRupiah(user.coin)} 
${leftStyle} Bank   : ${formatRupiah(user.bank)} 
${botStyle}
${b3}`;

      await sendMedia(
        images,
        txt,
        jid,
        getValidButtonList({
          title: "Select Table",
          secTitle: "Tampilkan table tertentu",
          rows: [
            [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
            [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
            [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
            [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
          ],
        })
      );
    }
    break;

case "buy":
    {
      const [item, jumlah] = text.split(",").map((v) => v.trim());
      if (!item || !jumlah) return await example("barang, nominal", "aple, 5");
      const cleanJumlah = fixNumber(jumlah.replace(/[^\d]/g, ""));
      if (isNaN(cleanJumlah) || cleanJumlah <= 0) return await example("barang, nominal", "aple, 5");
      await buy(item, cleanJumlah);
    }
    break;

case "afk":
    {
      if (!isGroup) return await onlyGrup();
      profil.afk.time = getTimeOn(0);
      profil.afk.status = true;
      profil.afk.alasan = text || "Tanpa Alasan";
      profil.afk.jid = jid;
      profil.afk.from = getLocalTimeString();
      saveDb();
      let txt = `${b3}
${mHeader("Afk")}
${leftStyle} User : @${sender?.getNumber()}
${leftStyle} Time : ${getLocalTimeString()}
${lines}
${b3}
${b3}
${mHeader("Alasan")}
${text || "Tanpa Alasan"}
${lines}
${b3}`;
      await sen(txt);
    }
    break;

case "jual":
    {
      if (!text.includes(",") || !text.split(",")[0] || text.split(",")[1] === undefined) {
        return example("items, id∆items, all∆ items, nominal");
      }

      const [itemName, input] = text.split(",").map((v) => v.trim());
      const inv = profil.inventory;
      let found = false;
      let hasilJual = 0;
      let emoji = "";
      let type = null;
      let soldInfo = [];
      let isAll = input.toLowerCase() === "all";
      const numInput = isAll ? null : fixNumber(input.replace(/[^\d]/g, ""));

      for (let t of ["items", "kebun", "kolam"]) {
        if (inv[t] && inv[t][itemName]) {
          found = true;
          type = t;

          if (t === "items") {
            const count = inv[t][itemName].count;
            if (isNaN(numInput) && !isAll) return await sen(`Jumlah untuk item ${itemName} harus berupa angka!`);
            let jumlahJual = isAll ? count : numInput;
            if (count < jumlahJual) return await sen(`Stok ${itemName} tidak cukup!`);

            hasilJual = inv[t][itemName].harga * jumlahJual;
            emoji = inv[t][itemName].emoji;
            inv[t][itemName].count -= jumlahJual;
          } else {
            const list = inv[t][itemName];
            if (!Array.isArray(list) || list.length === 0) return await sen(`Tidak ada ${itemName} di ${t}`);

            if (isNaN(numInput) && !isAll) return await sen(`ID harus berupa angka!`);

            if (isAll) {
              soldInfo.push(`${mHeader("Info Items")}
`);
              list.forEach((item) => {
                hasilJual += item.harga;
                emoji = item.emoji;
                soldInfo.push(
                  `${b3}
${mHeader(`${itemName}`)}
${leftStyle} ID     : ${item.id}
${leftStyle} Level  : ${formatRupiah(item.level)}
${leftStyle} Harga  : ${formatRupiah(item.harga)}
${botStyle}
${b3}`
                );
              });
              delete inv[t][itemName];
            } else {
              let index = list.findIndex((x) => x.id === numInput);
              if (index === -1) return await sen(`Tidak ditemukan ID ${numInput} pada ${itemName}!`);
              let sold = list.splice(index, 1)[0];
              hasilJual = sold.harga;
              emoji = sold.emoji;
              if (list.length === 0) delete inv[t][itemName];
            }
          }

          await add("coin", Math.round(hasilJual * 0.7));

          let txt = `${b3}
${mHeader("Sell Success")}
${leftStyle} User   : @${sender.getNumber()}
${leftStyle} Item   : ${itemName} ${emoji} ${type === "items" ? (isAll ? `(all)` : `x${numInput}`) : isAll ? `(all)` : `(ID ${numInput})`}
${leftStyle} Hasil  : ${formatRupiah(hasilJual)} - 30% = ${formatRupiah(Math.round(hasilJual * 0.7))}
${leftStyle} Coin   : ${formatRupiah(profil.coin - Math.round(hasilJual * 0.7))} +${formatRupiah(Math.round(hasilJual * 0.7))}
${botStyle}
${b3}
${soldInfo.join("\n")}`;
          await sen(txt, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
          saveDb();
          break;
        }
      }

      if (!found) {
        await sen(`Maaf @${sender.getNumber()}, item ${itemName} tidak ditemukan di inventory kamu!`);
      }
    }
    break;

case "hunt":
    {
      let lawan = pickRandom([
        {
          hewan: "kelinci",
          id: "kepala_kelinci",
          emoji: getShop()["kepala_kelinci"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 2),
            bulu: random(1, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "burung",
          id: "kepala_burung",
          emoji: getShop()["kepala_burung"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(1, 2),
            bulu: random(2, 5),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "beruang",
          id: "kepala_beruang",
          emoji: getShop()["kepala_beruang"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(3, 6),
            bulu: random(2, 4),
            tulang: random(3, 6),
          },
        },
        {
          hewan: "sapi",
          id: "kepala_sapi",
          emoji: getShop()["kepala_sapi"],
          senjata: ["pisau", "belati"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
            steak: random(1, 2),
          },
        },
        {
          hewan: "babi",
          id: "kepala_babi",
          emoji: getShop()["kepala_babi"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(2, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "ayam",
          id: "kepala_ayam",
          emoji: getShop()["kepala_ayam"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 3),
            bulu: random(1, 2),
            paha_ayam: 1,
            tulang: random(1, 3),
          },
        },
        {
          hewan: "rusa",
          id: "kepala_rusa",
          emoji: getShop()["kepala_rusa"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
          },
        },
        {
          hewan: "ular",
          id: "ular",
          emoji: getShop()["ular"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: 1,
            tulang: random(1, 2),
          },
        },
      ]);

      let punyaSenjata = Object.entries(profil.inventory.items).filter((i) => lawan.senjata.some((l) => i[0] === l));
      if (punyaSenjata[0][1].count <= 0 && punyaSenjata[1][1].count <= 0) return await sen(`Kamu bertemu dengan ${lawan.hewan} ${lawan.emoji.emoji}, Kamu memerlukan senjata ${lawan.senjata.join("/")} untuk membunuh ${lawan.hewan}`, jid, false, getValidButtonReply([[`Buy ${lawan.senjata[0]}`, `.buy ${lawan.senjata[0]}, 1`]]));
      let txtres = ``;
      let usage = "";
      Object.entries(lawan.rewards).forEach(([id, nom]) => {
        let res = getShop()[id];
        txtres += `\n${leftStyle} ${getShop()[id].emoji} ${id} : ${formatRupiah(profil.inventory.items[id].count)} +${nom}`;
        profil.inventory.items[id].count += nom;
        profil.inventory.items[lawan.id].count += 1;
        saveDb();
      });

      if (punyaSenjata[0][1].count <= 0) {
        profil.inventory.items[punyaSenjata[1][0]].count -= 1;
        usage = punyaSenjata[1][0];
        saveDb();
      } else {
        profil.inventory.items[punyaSenjata[0][0]].count -= 1;
        usage = punyaSenjata[0][0];
        saveDb();
      }

      let txt = `${b3}
${mHeader("Hunting")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Senjata : ${getShop()[usage].emoji} ${formatRupiah(profil.inventory.items[usage].count)} -1
${leftStyle} Hewan   : ${lawan.emoji.emoji} ${lawan.hewan} x1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}${txtres}
${botStyle}
${b3}`;

      await sen(txt, jid, false, getValidButtonReply([["Hunt Again", ".hunt"]]));
    }
    break;

case "bank":
    {
      if (!text) {
        let txt = `${b3}
${mHeader("Bank Kamu")}
${leftStyle} Coin : ${formatRupiah(profil.bank)}
${botStyle}
${b3}
${b3}
${mHeader("Tutorial")}
${leftStyle} ${prefix}bank 
${leftStyle} ${prefix}bank add, nominal
${leftStyle} ${prefix}bank get, nominal
${botStyle}
${b3}`;
        await sen(txt);
      } else {
        let [cmd, nominal] = text.split(",").arrayTrim();
        if (!cmd || !nominal) return example("∆add, nominal∆get, nominal");
        if (cmd === "add") {
          if (fixNumber(nominal) > profil.coin) return await sen(`Kamu tidak Memiliki coin sebanyak itu`);
          profil.bank += fixNumber(nominal);
          red("coin", fixNumber(nominal));
          await sen(`Kamu telah memasukan ${formatRupiah(nominal)} coin ke bank!`, jid, false, getValidButtonReply([["Cek Bank", ".bank"]]));
          saveDb();
        } else if (cmd === "get") {
          if (fixNumber(nominal) > profil.bank) return await sen(`Kamu tidak Memiliki coin di bank sebanyak itu`);
          profil.bank -= fixNumber(nominal);
          await add("coin", fixNumber(nominal));
          await sen(`Kamu telah Mengambil ${formatRupiah(nominal)} coin di bank!`, jid, false, getValidButtonReply([["Cek Bank", ".bank"]]));
          saveDb();
        } else {
          example("∆add, nominal∆get, nominal");
        }
      }
    }
    break;

case "send":
    {
      let [cmd, no, nominal] = text.split(",").arrayTrim();

      if (!cmd || !nominal || !no) return example("coin, tag∆limit, tag");

      if (!db.user[await decode(no)]) return await sen("Tolong masukan nomor yang sudah terdaftar di database / sudah pernah memakai bot ini!");

      if (cmd === "coin") {
        if (fixNumber(nominal) > profil.coin) return await sen(`Kamu tidak Memiliki coin sebanyak itu`);
        red("coin", fixNumber(nominal));
        await add("coin", fixNumber(nominal), await decode(no));
        await sen(`Kamu telah transfer coin sebanyak ${formatRupiah(nominal)} coin ke @${(await decode(no)).getNumber()} !`, jid, false, getValidButtonReply([["Profil", ".me"]]));
        saveDb();
      } else if (cmd === "limit") {
        if (fixNumber(nominal) > profil.limit) return await sen(`Kamu tidak Memiliki limit sebanyak itu`);
        red("limit", fixNumber(nominal));
        await add("limit", fixNumber(nominal), await decode(no));
        await sen(`Kamu telah transfer limit sebanyak ${formatRupiah(nominal)} limit ke @${(await decode(no)).getNumber()} !`, jid, false, getValidButtonReply([["Profil", ".me"]]));
        saveDb();
      } else {
        example("coin, @tag∆limit, tag");
      }
    }
    break;

case "fish":
    {
      if (profil.inventory.items.cacing?.count <= 0) return await sen(`Maaf @${sender?.getNumber()} cacing kamu telah habis!, silahkan beli cacing di shop`, jid, false, getValidButtonReply([["Buy Cacing", ".buy cacing, 1"]]));
      if (profil.inventory.items.joran?.count <= 0) return await sen(`Maaf @${sender?.getNumber()} joran kamu telah hancur!, silahkan beli joran di shop`, jid, false, getValidButtonReply([["Buy Joran", ".buy joran,1"]]));
      let ikan = pickRandom(Object.entries(Object.fromEntries(Object.entries(getShop()).filter((i) => i[1].type === "kolam"))));
      let txt = `${b3}
${mHeader(`Rewards`)}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} cacing : ${getShop()["cacing"].emoji} ${formatRupiah(profil.inventory.items?.cacing.count)} -1
${leftStyle} Joran  : ${getShop()["joran"].emoji} ${formatRupiah(profil.inventory.items?.joran.count)} -1
${leftStyle} Harga  : ${ikan[1].harga}
${leftStyle} Item   : ${ikan[1].emoji} ${ikan[0]}
${botStyle}
${b3}`;

      profil.inventory["kolam"][ikan[0]] = profil.inventory["kolam"][ikan[0]] || [];
      let maxId = Math.max(...profil.inventory["kolam"][ikan[0]].map((item) => item.id), -1);
      maxId += 1;
      profil.inventory["kolam"][ikan[0]].push({
        id: maxId,
        level: 1,
        emoji: ikan[1].emoji,
        harga: ikan[1].harga,
        type: "kolam",
        time: getTimeOn(0),
        times: "",
      });

      profil.inventory["items"]["cacing"].count -= 1;
      profil.inventory["items"]["joran"].count -= 1;

      await add("exp", 5);
      saveDb();
      await sen(txt, jid, false, getValidButtonReply([["Fish Again", ".fish"]]));
    }
    break;

case "sell":
    {
      if (!text.includes(",") || !text.split(",")[0] || text.split(",")[1] === undefined) {
        return example("items, id∆items, all∆ items, nominal");
      }

      const [itemName, input] = text.split(",").map((v) => v.trim());
      const inv = profil.inventory;
      let found = false;
      let hasilJual = 0;
      let emoji = "";
      let type = null;
      let soldInfo = [];
      let isAll = input.toLowerCase() === "all";
      const numInput = isAll ? null : fixNumber(input.replace(/[^\d]/g, ""));

      for (let t of ["items", "kebun", "kolam"]) {
        if (inv[t] && inv[t][itemName]) {
          found = true;
          type = t;

          if (t === "items") {
            const count = inv[t][itemName].count;
            if (isNaN(numInput) && !isAll) return await sen(`Jumlah untuk item ${itemName} harus berupa angka!`);
            let jumlahJual = isAll ? count : numInput;
            if (count < jumlahJual) return await sen(`Stok ${itemName} tidak cukup!`);

            hasilJual = inv[t][itemName].harga * jumlahJual;
            emoji = inv[t][itemName].emoji;
            inv[t][itemName].count -= jumlahJual;
          } else {
            const list = inv[t][itemName];
            if (!Array.isArray(list) || list.length === 0) return await sen(`Tidak ada ${itemName} di ${t}`);

            if (isNaN(numInput) && !isAll) return await sen(`ID harus berupa angka!`);

            if (isAll) {
              soldInfo.push(`${mHeader("Info Items")}
`);
              list.forEach((item) => {
                hasilJual += item.harga;
                emoji = item.emoji;
                soldInfo.push(
                  `${b3}
${mHeader(`${itemName}`)}
${leftStyle} ID     : ${item.id}
${leftStyle} Level  : ${formatRupiah(item.level)}
${leftStyle} Harga  : ${formatRupiah(item.harga)}
${botStyle}
${b3}`
                );
              });
              delete inv[t][itemName];
            } else {
              let index = list.findIndex((x) => x.id === numInput);
              if (index === -1) return await sen(`Tidak ditemukan ID ${numInput} pada ${itemName}!`);
              let sold = list.splice(index, 1)[0];
              hasilJual = sold.harga;
              emoji = sold.emoji;
              if (list.length === 0) delete inv[t][itemName];
            }
          }

          await add("coin", Math.round(hasilJual * 0.7));

          let txt = `${b3}
${mHeader("Sell Success")}
${leftStyle} User   : @${sender.getNumber()}
${leftStyle} Item   : ${itemName} ${emoji} ${type === "items" ? (isAll ? `(all)` : `x${numInput}`) : isAll ? `(all)` : `(ID ${numInput})`}
${leftStyle} Hasil  : ${formatRupiah(hasilJual)} - 30% = ${formatRupiah(Math.round(hasilJual * 0.7))}
${leftStyle} Coin   : ${formatRupiah(profil.coin - Math.round(hasilJual * 0.7))} +${formatRupiah(Math.round(hasilJual * 0.7))}
${botStyle}
${b3}
${soldInfo.join("\n")}`;
          await sen(txt, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
          saveDb();
          break;
        }
      }

      if (!found) {
        await sen(`Maaf @${sender.getNumber()}, item ${itemName} tidak ditemukan di inventory kamu!`);
      }
    }
    break;

case "toko":
    {
      let items = "";

      Object.entries(emoji.shop).forEach((i) => {
        let item = "";
        Object.entries(i[1])
          .sort((a, b) => a[1].harga - b[1].harga)
          .forEach(([name, n]) => {
            item += `\n${leftStyle} ${n.emoji} [${n.harga}] ${name}`;
          });

        items += `

${b3}
${mHeader(i[0])}
${item}
${botStyle}
${b3}`;
      });

      let txt = `${b3}
${mHeader(`Shop Menu`)}
${leftStyle} User : @${sender?.getNumber()}
${leftStyle} Coin : ${formatRupiah(profil.coin)}
${botStyle}
${b3}
${b3}
${mHeader(`How To Buy`)}
${leftStyle} ${prefix}buy aple,1
${botStyle}
${b3}${items}`;
      await sen(txt);
    }
    break;

case "shop":
    {
      let items = "";

      Object.entries(emoji.shop).forEach((i) => {
        let item = "";
        Object.entries(i[1])
          .sort((a, b) => a[1].harga - b[1].harga)
          .forEach(([name, n]) => {
            item += `\n${leftStyle} ${n.emoji} [${n.harga}] ${name}`;
          });

        items += `

${b3}
${mHeader(i[0])}
${item}
${botStyle}
${b3}`;
      });

      let txt = `${b3}
${mHeader(`Shop Menu`)}
${leftStyle} User : @${sender?.getNumber()}
${leftStyle} Coin : ${formatRupiah(profil.coin)}
${botStyle}
${b3}
${b3}
${mHeader(`How To Buy`)}
${leftStyle} ${prefix}buy aple,1
${botStyle}
${b3}${items}`;
      await sen(txt);
    }
    break;

case "daily":
    {
      let time = profil.lastClaim + 86400000;
      if (new Date() - profil.lastClaim < 86400000) return await sen(`Kamu Sudah Ambil Bonus Hari Ini\nTunggu selama ${msToTime(time - new Date())} lagi`);
      let limit = random(5, 30);
      let coin = random(5, 30);
      let exp = random(5, 30);

      await add("exp", exp);
      await add("coin", coin);
      await add("limit", limit);
      let shop = getShop();

      profil.lastClaim = new Date() * 1;
      saveDb();
      let txt = `${b3}
${mHeader(`Rewards`)}
${leftStyle} User  : @${sender.getNumber()}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${limit}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${coin}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${exp}
${botStyle}
${b3}`;
      await sen(txt, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
    }
    break;

case "minum":
    {
      try {
        if (!text)
          return await sen(
            `Silahkan pilih mau meminum minuman apa`,
            jid,
            false,
            getValidButtonList({
              title: "Select Drink",
              secTitle: "Pilih minuman untuk di minum",

              rows: Object.entries(emoji.shop.drink).map(([id, obj]) => {
                return [`${"> "} ${obj.emoji} ${id}`, `- Minuman ${id}, Di miliki ${profil.inventory.items[id].count} buah`, `.minum ${id}`];
              }),
            })
          );

        if (!emoji.shop.drink?.[text.clear()]) return await sen(`Tidak ada minuman bernama "${text}" di inventory kamu!`);
        if (profil.inventory.items?.[text.clear()].count === 0) return await sen(`Kamu tidak memiliki minuman ${emoji.shop.drink[text.clear()].emoji} ${text.clear()} di inventory!`, jid, false, getValidButtonReply([[`Buy ${text.capitalize()}`, `.buy ${text.clear()}, 1`]]));

        let hpAdd = Math.floor((emoji.shop.drink[text.clear()].harga / 100) * profil.maxHp);

        if (profil.hp > hpAdd) {
          hpAdd = 0;
        }

        let txt = `${b3}
${mHeader("Users")}
${leftStyle} Users : @${sender.getNumber()}
${leftStyle} Drink : ${emoji.shop.drink[text.clear()].emoji} ${text.clear()} -1
${leftStyle} Hp    : ${profil.hp} +${hpAdd} / ${profil.maxHp}
${botStyle}
${b3}
${b3}
${mHeader("Info")}
Dengan meminum ${emoji.shop.drink[text.clear()].emoji} ${text.clear()} akan memulihkan ${emoji.shop.drink[text.clear()].harga}% HP jika di bawah persentase
${botStyle}
${b3}`;

        profil.hp += hpAdd;
        profil.inventory.items[text.clear()].count -= 1;
        saveDb();
        await sen(txt);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "pasar":
    {
      let items = "";

      Object.entries(emoji.shop).forEach((i) => {
        let item = "";
        Object.entries(i[1])
          .sort((a, b) => a[1].harga - b[1].harga)
          .forEach(([name, n]) => {
            item += `\n${leftStyle} ${n.emoji} [${n.harga}] ${name}`;
          });

        items += `

${b3}
${mHeader(i[0])}
${item}
${botStyle}
${b3}`;
      });

      let txt = `${b3}
${mHeader(`Shop Menu`)}
${leftStyle} User : @${sender?.getNumber()}
${leftStyle} Coin : ${formatRupiah(profil.coin)}
${botStyle}
${b3}
${b3}
${mHeader(`How To Buy`)}
${leftStyle} ${prefix}buy aple,1
${botStyle}
${b3}${items}`;
      await sen(txt);
    }
    break;

case "table":
    {
      if (text) {
        let items = `${mHeader(text.clear().capitalize())}`;

        if (text.clear() == "items") {
          Object.entries(profil.inventory[text.clear()]).forEach((n) => {
            let item = getShop()[n[0]];
            let itemData = n[1];

            if (itemData.count === 0) return;
            items += `
${b3}
${leftStyle} Name   : ${item.emoji} ${n[0]}
${leftStyle} Harga  : ${formatRupiah(item.harga)}
${leftStyle} Jumlah : x${itemData.count}
${botStyle}
${b3}`;
          });
          items === `${mHeader(text.clear().capitalize())}` ? (items += `\n${b3}\nNo items here!\n${b3}\n${lines}`) : items;
          await sen(
            items,
            jid,
            false,
            getValidButtonList({
              title: "Select Table",
              secTitle: "Tampilkan table tertentu",

              rows: [
                [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.profil items`],
                [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.profil kebun`],
                [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.profil kolam`],
                [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.profil pet`],
              ],
            })
          );
        } else if (text.clear() == "kebun") {
          Object.entries(profil.inventory[text.clear()]).forEach((n) => {
            let item = getShop()[n[0]];
            let itemData = n[1];

            if (itemData.count === 0) return;

            itemData.forEach((farmItem) => {
              items += `
${b3}
${leftStyle} Name  : ${item.emoji} ${n[0]} (ID ${farmItem.id})
${leftStyle} Harga : ${formatRupiah(farmItem.harga)}
${leftStyle} Level : ${farmItem.level}
${leftStyle} Time  : ${farmItem.times}
${botStyle}
${b3}`;
            });
          });
          items === `${mHeader(text.clear().capitalize())}` ? (items += `\n${b3}\nNo items here!\n${b3}\n${lines}`) : items;
          await sen(
            items,
            jid,
            false,
            getValidButtonList({
              title: "Select Table",
              secTitle: "Tampilkan table tertentu",

              rows: [
                [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.profil items`],
                [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.profil kebun`],
                [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.profil kolam`],
                [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.profil pet`],
              ],
            })
          );
        } else if (text.clear() == "kolam") {
          Object.entries(profil.inventory[text.clear()]).forEach((n) => {
            let item = getShop()[n[0]];
            let itemData = n[1];

            if (itemData.count === 0) return;

            itemData.forEach((farmItem) => {
              items += `
${b3}
${leftStyle} Name  : ${item.emoji} ${n[0]} (ID ${farmItem.id})
${leftStyle} Harga : ${formatRupiah(farmItem.harga)}
${leftStyle} Level : ${farmItem.level}
${leftStyle} Time  : ${farmItem.times}
${botStyle}
${b3}`;
            });
          });
          items === `${mHeader(text.clear().capitalize())}` ? (items += `\n${b3}\nNo items here!\n${b3}\n${lines}`) : items;
          await sen(
            items,
            jid,
            false,
            getValidButtonList({
              title: "Select Table",
              secTitle: "Tampilkan table tertentu",

              rows: [
                [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.profil items`],
                [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.profil kebun`],
                [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.profil kolam`],
                [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.profil pet`],
              ],
            })
          );
        } else if (text.clear() == "pet") {
          Object.entries(profil.inventory[text.clear()]).forEach((n) => {
            let item = getShop()[n[0]];
            let itemData = n[1];

            if (itemData.count === 0) return;

            itemData.forEach((farmItem) => {
              items += `
${b3}
${leftStyle} Name  : ${item.emoji} ${n[0]}
${leftStyle} Harga : ${formatRupiah(item.harga)}
${leftStyle} Time  : ${n[1].times}
${botStyle}
${b3}`;
            });
          });
          items === `${mHeader(text.clear().capitalize())}` ? (items += `\n${b3}\nNo items here!\n${b3}\n${lines}`) : items;
          await sen(
            items,
            jid,
            false,
            getValidButtonList({
              title: "Select Table",
              secTitle: "Tampilkan table tertentu",

              rows: [
                [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.profil items`],
                [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.profil kebun`],
                [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.profil kolam`],
                [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.profil pet`],
              ],
            })
          );
        }
        return;
      } else
        return await example(
          "Table",
          "kolam",
          getValidButtonList({
            title: "Select Table",
            secTitle: "Tampilkan table tertentu",

            rows: [
              [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
              [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
              [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
              [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
            ],
          })
        );
    }
    break;

case "usebox":
    {
      try {
        if (!text)
          return await sen(
            `Silahkan pilih mau membuka box yang mana`,
            jid,
            false,
            getValidButtonList({
              title: "Select Box",
              secTitle: "Pilih box untuk di buka",

              rows: Object.entries(emoji.shop.box).map(([id, obj]) => {
                return [`${"> "} ${obj.emoji} ${id}`, `- Box ${id}, Di miliki ${profil.inventory.items[id].count} box`, `.openbox ${id}`];
              }),
            })
          );

        if (!emoji.shop.box?.[text.clear()]) return await sen(`Tidak ada box bernama "${text}" di inventory kamu!`);
        if (profil.inventory.items?.[text.clear()].count === 0) return await sen(`Kamu tidak memiliki box ${emoji.shop.box[text.clear()].emoji} ${text.clear()} di inventory!`, jid, false, getValidButtonReply([[`Buy ${text.capitalize()}`, `.buy ${text.clear()}, 1`]]));

        let resC = random(1, emoji.shop.box?.[text.clear()].harga * 0.2);
        let resE = random(1, emoji.shop.box?.[text.clear()].harga * 0.3);
        let resL = random(1, emoji.shop.box?.[text.clear()].harga * 0.1);

        let txt = `${b3}
${mHeader("Users")}
${leftStyle} Users : @${sender.getNumber()}
${leftStyle} Box   : ${emoji.shop.box[text.clear()].emoji} ${text.clear()} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${resC}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${resE}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${resL}
${botStyle}
${b3}`;

        await add("exp", resE);
        await add("coin", resC);
        await add("limit", resL);
        profil.inventory.items[text.clear()].count -= 1;
        saveDb();
        await sen(txt);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "travel":
    {
      let client = {
        car: { human: 4, box: 5 },
        suv: { human: 5, box: 7 },
        pickup: { human: 2, box: 15 },
        van: { human: 8, box: 10 },
        bus: { human: 40, box: 50 },
        trolleybus: { human: 35, box: 40 },
        policecar: { human: 4, box: 3 },
        taxi: { human: 4, box: 4 },
        ambulance: { human: 3, box: 5 },
        firetruck: { human: 6, box: 20 },
        truck: { human: 2, box: 30 },
        lorry: { human: 2, box: 40 },
        tractor: { human: 1, box: 5 },
        wheelchair: { human: 1, box: 0 },
        motor_wheelchair: {
          human: 1,
          box: 1,
        },
        scooter: { human: 1, box: 0 },
        bicycle: { human: 1, box: 1 },
        motorbike: { human: 2, box: 2 },
        motorscooter: { human: 2, box: 1 },
        autorickshaw: { human: 3, box: 2 },
        tramcar: { human: 60, box: 40 },
        monorail: { human: 200, box: 100 },
        train: { human: 300, box: 200 },
        bullettrain: {
          human: 400,
          box: 300,
        },
        subway: { human: 250, box: 150 },
        station: { human: 0, box: 0 },
        airplane: { human: 180, box: 500 },
        small_airplane: {
          human: 6,
          box: 20,
        },
        helicopter: { human: 5, box: 10 },
        parachute: { human: 1, box: 0 },
        speedboat: { human: 6, box: 5 },
        canoe: { human: 2, box: 1 },
        sailboat: { human: 10, box: 15 },
        ship: { human: 1000, box: 500 },
        ferry: { human: 500, box: 300 },
        passenger_ship: {
          human: 800,
          box: 400,
        },
        motorboat: { human: 4, box: 3 },
      };

      let myTrans = {};

      let myItems = Object.keys(Object.fromEntries(Object.entries(profil.inventory.items).filter(([id, obj]) => obj.count !== 0)));

      myItems.forEach((i) => {
        if (client?.[i]) myTrans[i] = client[i];
      });

      myTrans = Object.entries(myTrans).sort(([id1, obj1], [id2, obj2]) => {
        const cap1 = obj1.human + obj1.box;
        const cap2 = obj2.human + obj2.box;
        return cap2 - cap1;
      });

      if (!myTrans) return await sen(`Kamu belum menyewa kendaraan apapun!, silahkan sewa kendaraan di shop!`, jid, false, getValidButtonReply([["List Kendaraan", ".shop"]]));
      let button = getValidButtonList({
        title: "Select Vehicle",
        secTitle: "Pilih Kendaraan untuk bekerja",

        rows: myTrans.map(([id, obj], indx) => {
          return [`${"> "} [ ${profil.inventory.items[id].count} ] ${getShop()[id].emoji} ${id.capitalize()}`, `- ${id} dapat menampung ${obj.human} orang, ${obj.box} barang`, `.travel ${indx}`];
        }),
      });
      if (!text && myTrans.length !== 1) return await sen(`Kamu mempunyai ${myTrans.length} Kendaraan yang di sewa, pilih salah satu untuk memulai jobs!`, jid, false, button);
      myTrans = myTrans[myTrans.length === 1 ? 0 : fixNumber(text)];

      let humans = random(0, myTrans[1].human);
      let items = random(1, myTrans[1].box);

      let rewards = (humans + items) * 8;
      let txt = `${b3}
${mHeader("Travel Info")}
${leftStyle} Human   : ${humans} life
${leftStyle} Items   : ${items} box
${leftStyle} Vehicle : ${getShop()[myTrans[0]].emoji} ${myTrans[0]} ${profil.inventory.items[myTrans[0]].count} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${rewards}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${Math.floor(rewards / 3)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${Math.floor(rewards / 3)}
${botStyle}
${b3}`;

      profil.inventory.items[myTrans[0]].count -= 1;
      saveDb();

      await add("coin", rewards);
      await add("exp", Math.floor(rewards / 3));
      await add("limit", Math.floor(rewards / 3));

      await sen(txt, jid, false, getValidButtonReply([["Travel Again", ".travel"]]));
    }
    break;

case "mining":
    {
      const shop = getShop();

      if (profil.inventory["items"]["beliung"].count <= 0) return await sen(`Maaf @${sender.getNumber()} kamu tidak Memiliki beliung untuk menambang silahkan beli beling di shop`, jid, false, getValidButtonReply([["Buy Beliung", ".buy beliung, 1"]]));

      let nom = random(1, 6);
      let p = Math.random() * 101;
      let res = pickRandom(Object.entries(emoji.shop.gua))[0];

      profil.inventory["items"][res].count += nom;
      profil.inventory["items"]["beliung"].count -= 1;

      let txt = `${b3}
${mHeader("Rewards")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Items   : ${shop[res].emoji} ${res} ${formatRupiah(profil.inventory["items"][res].count - nom)} +${nom}
${leftStyle} Harga   : ${shop[res].harga} / 1
${leftStyle} Beliung : ${shop["beliung"].emoji} ${formatRupiah(profil.inventory["items"]["beliung"].count + 1)} -1
${botStyle}
${b3}`;
      await sen(txt, jid, false, getValidButtonReply([["Mine Again", ".mining"]]));
      await add("exp", 5);
      saveDb();
    }
    break;

case "nebang":
    {
      const shop = getShop();

      if (profil.inventory["items"]["kapak"].count <= 0) return await sen(`Maaf @${sender.getNumber()} kamu tidak Memiliki kapak untuk menebang silahkan beli kapak di shop`, jid, false, getValidButtonReply([["Buy Kapak", ".buy kapak, 1"]]));

      let resD = random(2, 4);
      let resK = random(1, 3);
      profil.inventory["kebun"]["aple"] = profil.inventory["kebun"]["aple"] || [];
      let maxId = Math.max(...profil.inventory["kebun"]["aple"].map((item) => item.id), -1);
      maxId += 1;
      profil.inventory["kebun"]["aple"].push({
        id: maxId,
        level: 1,
        emoji: shop["aple"].emoji,
        harga: shop["aple"].harga,
        type: "kebun",
        time: getTimeOn(0),
        times: "",
      });

      profil.inventory["items"]["kayu"].count += resK;

      profil.inventory["items"]["daun"].count += resD;
      profil.inventory["items"]["kapak"].count -= 1;
      let txt = `${b3}
${mHeader("Rewards")}
${leftStyle} User   : @${sender.getNumber()}
${leftStyle} kapak  : ${shop["kapak"].emoji} ${formatRupiah(profil.inventory["items"]["kapak"].count)} -1
${leftStyle} Kayu   : ${shop["kayu"].emoji} ${formatRupiah(profil.inventory["items"]["kayu"].count - resK)} +${resK}
${leftStyle} Daun   : ${shop["daun"].emoji} ${formatRupiah(profil.inventory["items"]["daun"].count - resD)} +${resD}
${leftStyle} Aple   : ${shop["aple"].emoji} ${maxId} +1
${lines}
${b3}`;
      await sen(txt, jid, false, getValidButtonReply([["Nebang again", ".nebang"]]));
      await add("exp", 5);
      saveDb();
    }
    break;

case "maling":
    {
      let oldD = new Date(profil.cdMaling);
      let newD = new Date(getTimeOn(0));
      let gap = newD - oldD;
      if (gap <= 600000) return await sen(`Kamu sedang beristirahat tunggu dalam ${msToTime(600000 - (newD - oldD))} untuk maling kembali`, jid, false, getValidButtonReply([["Maling", ".maling"]]));

      let target = await decode(text);
      if (db.owner.includes(target)) return await sena("Liat dlu bg siapa yg di maling");
      let allUser = Object.entries(db.user).map((i) => i[0]);
      if (!allUser.includes(target)) return await sen("Tolong tag orang yang sudah terdaftar di database / sudah pernah memakai bot ini!");
      if (db.user[target].coin <= 0 || db.user[target].limit <= 0) return await sen("target terlalu miskin untuk di maling");
      let alasan = [`Kamu terjatuh saat mengejar si @${target.getNumber()}, lututmu lecet parah.`, `@${target.getNumber()} melakukan perlawanan sengit, Kamu pun kewalahan dan kalah.`, `@${target.getNumber()} mengeluarkan senjata tajam, membuatmu mundur dengan luka.`, `@${target.getNumber()} berhasil kabur sambil dibantu temannya yang sudah menunggu.`, `@${target.getNumber()} mengelabui Kamu dengan tipu daya dan berhasil lolos.`, `Kamu kehilangan jejak @${target.getNumber()} di jalanan yang gelap dan berliku.`, `@${target.getNumber()} menyiapkan jebakan terlebih dahulu, Kamu masuk perangkapnya.`, `@${target.getNumber()} jauh lebih cepat, Kamu hanya bisa melihat punggungnya menjauh.`, `Tiba-tiba hujan deras turun, membuat Kamu terpeleset dan kehilangan @${target.getNumber()}.`, `Kerumunan orang menutup jalanmu, sedangkan @${target.getNumber()} berhasil menghilang.`, `@${target.getNumber()} sudah menyiapkan kendaraan, ia langsung tancap gas meninggalkanmu.`, `Kamu kehabisan napas, sementara @${target.getNumber()} masih terus berlari tanpa lelah.`, `Anjing liar tiba-tiba mengejarmu, @${target.getNumber()} pun lolos tanpa hambatan.`, `Kamu hampir berhasil menangkapnya, tapi @${target.getNumber()} menendangmu hingga terjatuh.`, `@${target.getNumber()} berteriak minta bantuan, warga sekitar menghadangmu.`, `Langkahmu melambat karena cedera, sementara @${target.getNumber()} makin menjauh.`];
      let isSuccess = Math.random() * 101 > 65 ? true : false;
      if (!isSuccess) return await sen(pickRandom(alasan), jid, false, getValidButtonReply([["Maling", ".maling"]]));
      let resC = Math.floor(Math.random() * db.user[target].coin) + 1;
      let resL = Math.floor(Math.random() * db.user[target].limit) + 1;

      let txt = `${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${formatRupiah(resC)} 
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${formatRupiah(resL)} 
${botStyle}
${b3}
${b3}
${mHeader("Target")}
${leftStyle} Coin  : ${formatRupiah(db.user[target].coin)} -${formatRupiah(resC)} 
${leftStyle} Limit : ${formatRupiah(db.user[target].limit)} -${formatRupiah(resL)} 
${botStyle}
${b3}

Kamu telah berhasil memaling @${target.getNumber()}
cooldown 30 menit untuk beristirahat`;
      await add("coin", resC);
      await add("limit", resL);
      red("coin", resC, target);
      red("limit", resL, target);
      saveDb();
      profil.cdMaling = getTimeOn(0);
      await sen(txt, jid, false, getValidButtonReply([["Maling", ".maling"]]));
    }
    break;

case "profil":
    {
      await updateFarmAndKolamLevels();
      await updatePet();
      let user = db.user[sender];
      profil.user = 1 == 2 ? "Developer" : isOwner ? "Owner" : isPrem ? "Premium" : "User";
      saveDb();
      const { exp: currentExp, maxExp, level, name } = user;

      const images = `${apiv6}/canvas/welcome?username=${name}&guildName=My+profil&memberCount=${Object.keys(db.user).length}&avatar=${profil.profil}&background=${encodeURIComponent("https://files.catbox.moe/tjq1v3.jpeg")}&quality=99`;

      let txt = `${b3}
${mHeader(`You Profile`)}
${leftStyle} Name   : ${user.name}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} Level  : ${formatRupiah(user.level)}
${leftStyle} Role   : ${user.user}
${lines}
${b3}
${b3}
${mHeader("Inventory")}
${leftStyle} Hp     : ${user.hp} / ${user.maxHp}
${leftStyle} Exp    : ${formatRupiah(user.exp)} / ${formatRupiah(user.maxExp)}
${leftStyle} Limit  : ${formatRupiah(user.limit)}
${leftStyle} Coin   : ${formatRupiah(user.coin)} 
${leftStyle} Bank   : ${formatRupiah(user.bank)} 
${botStyle}
${b3}`;

      await sendMedia(
        images,
        txt,
        jid,
        getValidButtonList({
          title: "Select Table",
          secTitle: "Tampilkan table tertentu",
          rows: [
            [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
            [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
            [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
            [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
          ],
        })
      );
    }
    break;

case "openbox":
    {
      try {
        if (!text)
          return await sen(
            `Silahkan pilih mau membuka box yang mana`,
            jid,
            false,
            getValidButtonList({
              title: "Select Box",
              secTitle: "Pilih box untuk di buka",

              rows: Object.entries(emoji.shop.box).map(([id, obj]) => {
                return [`${"> "} ${obj.emoji} ${id}`, `- Box ${id}, Di miliki ${profil.inventory.items[id].count} box`, `.openbox ${id}`];
              }),
            })
          );

        if (!emoji.shop.box?.[text.clear()]) return await sen(`Tidak ada box bernama "${text}" di inventory kamu!`);
        if (profil.inventory.items?.[text.clear()].count === 0) return await sen(`Kamu tidak memiliki box ${emoji.shop.box[text.clear()].emoji} ${text.clear()} di inventory!`, jid, false, getValidButtonReply([[`Buy ${text.capitalize()}`, `.buy ${text.clear()}, 1`]]));

        let resC = random(1, emoji.shop.box?.[text.clear()].harga * 0.2);
        let resE = random(1, emoji.shop.box?.[text.clear()].harga * 0.3);
        let resL = random(1, emoji.shop.box?.[text.clear()].harga * 0.1);

        let txt = `${b3}
${mHeader("Users")}
${leftStyle} Users : @${sender.getNumber()}
${leftStyle} Box   : ${emoji.shop.box[text.clear()].emoji} ${text.clear()} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${resC}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${resE}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${resL}
${botStyle}
${b3}`;

        await add("exp", resE);
        await add("coin", resC);
        await add("limit", resL);
        profil.inventory.items[text.clear()].count -= 1;
        saveDb();
        await sen(txt);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "setname":
    {
      if (!text) return await example("Nama", "senw");
      if (text.trim().length > 12) return await sen(`Panjang nama hanya boleh 12 digit ke bawah!`);
      profil.name = text.trim();
      saveDb();
      await sen(`Berhasil mengatur username ✅`, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
    }
    break;

case "berburu":
    {
      let lawan = pickRandom([
        {
          hewan: "kelinci",
          id: "kepala_kelinci",
          emoji: getShop()["kepala_kelinci"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 2),
            bulu: random(1, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "burung",
          id: "kepala_burung",
          emoji: getShop()["kepala_burung"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(1, 2),
            bulu: random(2, 5),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "beruang",
          id: "kepala_beruang",
          emoji: getShop()["kepala_beruang"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(3, 6),
            bulu: random(2, 4),
            tulang: random(3, 6),
          },
        },
        {
          hewan: "sapi",
          id: "kepala_sapi",
          emoji: getShop()["kepala_sapi"],
          senjata: ["pisau", "belati"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
            steak: random(1, 2),
          },
        },
        {
          hewan: "babi",
          id: "kepala_babi",
          emoji: getShop()["kepala_babi"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(2, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "ayam",
          id: "kepala_ayam",
          emoji: getShop()["kepala_ayam"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 3),
            bulu: random(1, 2),
            paha_ayam: 1,
            tulang: random(1, 3),
          },
        },
        {
          hewan: "rusa",
          id: "kepala_rusa",
          emoji: getShop()["kepala_rusa"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
          },
        },
        {
          hewan: "ular",
          id: "ular",
          emoji: getShop()["ular"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: 1,
            tulang: random(1, 2),
          },
        },
      ]);

      let punyaSenjata = Object.entries(profil.inventory.items).filter((i) => lawan.senjata.some((l) => i[0] === l));
      if (punyaSenjata[0][1].count <= 0 && punyaSenjata[1][1].count <= 0) return await sen(`Kamu bertemu dengan ${lawan.hewan} ${lawan.emoji.emoji}, Kamu memerlukan senjata ${lawan.senjata.join("/")} untuk membunuh ${lawan.hewan}`, jid, false, getValidButtonReply([[`Buy ${lawan.senjata[0]}`, `.buy ${lawan.senjata[0]}, 1`]]));
      let txtres = ``;
      let usage = "";
      Object.entries(lawan.rewards).forEach(([id, nom]) => {
        let res = getShop()[id];
        txtres += `\n${leftStyle} ${getShop()[id].emoji} ${id} : ${formatRupiah(profil.inventory.items[id].count)} +${nom}`;
        profil.inventory.items[id].count += nom;
        profil.inventory.items[lawan.id].count += 1;
        saveDb();
      });

      if (punyaSenjata[0][1].count <= 0) {
        profil.inventory.items[punyaSenjata[1][0]].count -= 1;
        usage = punyaSenjata[1][0];
        saveDb();
      } else {
        profil.inventory.items[punyaSenjata[0][0]].count -= 1;
        usage = punyaSenjata[0][0];
        saveDb();
      }

      let txt = `${b3}
${mHeader("Hunting")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Senjata : ${getShop()[usage].emoji} ${formatRupiah(profil.inventory.items[usage].count)} -1
${leftStyle} Hewan   : ${lawan.emoji.emoji} ${lawan.hewan} x1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}${txtres}
${botStyle}
${b3}`;

      await sen(txt, jid, false, getValidButtonReply([["Hunt Again", ".hunt"]]));
    }
    break;

case "hunting":
    {
      let lawan = pickRandom([
        {
          hewan: "kelinci",
          id: "kepala_kelinci",
          emoji: getShop()["kepala_kelinci"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 2),
            bulu: random(1, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "burung",
          id: "kepala_burung",
          emoji: getShop()["kepala_burung"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(1, 2),
            bulu: random(2, 5),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "beruang",
          id: "kepala_beruang",
          emoji: getShop()["kepala_beruang"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(3, 6),
            bulu: random(2, 4),
            tulang: random(3, 6),
          },
        },
        {
          hewan: "sapi",
          id: "kepala_sapi",
          emoji: getShop()["kepala_sapi"],
          senjata: ["pisau", "belati"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
            steak: random(1, 2),
          },
        },
        {
          hewan: "babi",
          id: "kepala_babi",
          emoji: getShop()["kepala_babi"],
          senjata: ["belati", "senapan"],
          rewards: {
            daging: random(2, 3),
            tulang: random(1, 3),
          },
        },
        {
          hewan: "ayam",
          id: "kepala_ayam",
          emoji: getShop()["kepala_ayam"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: random(1, 3),
            bulu: random(1, 2),
            paha_ayam: 1,
            tulang: random(1, 3),
          },
        },
        {
          hewan: "rusa",
          id: "kepala_rusa",
          emoji: getShop()["kepala_rusa"],
          senjata: ["busur", "senapan"],
          rewards: {
            daging: random(2, 4),
            tulang: random(2, 4),
          },
        },
        {
          hewan: "ular",
          id: "ular",
          emoji: getShop()["ular"],
          senjata: ["pisau", "busur"],
          rewards: {
            daging: 1,
            tulang: random(1, 2),
          },
        },
      ]);

      let punyaSenjata = Object.entries(profil.inventory.items).filter((i) => lawan.senjata.some((l) => i[0] === l));
      if (punyaSenjata[0][1].count <= 0 && punyaSenjata[1][1].count <= 0) return await sen(`Kamu bertemu dengan ${lawan.hewan} ${lawan.emoji.emoji}, Kamu memerlukan senjata ${lawan.senjata.join("/")} untuk membunuh ${lawan.hewan}`, jid, false, getValidButtonReply([[`Buy ${lawan.senjata[0]}`, `.buy ${lawan.senjata[0]}, 1`]]));
      let txtres = ``;
      let usage = "";
      Object.entries(lawan.rewards).forEach(([id, nom]) => {
        let res = getShop()[id];
        txtres += `\n${leftStyle} ${getShop()[id].emoji} ${id} : ${formatRupiah(profil.inventory.items[id].count)} +${nom}`;
        profil.inventory.items[id].count += nom;
        profil.inventory.items[lawan.id].count += 1;
        saveDb();
      });

      if (punyaSenjata[0][1].count <= 0) {
        profil.inventory.items[punyaSenjata[1][0]].count -= 1;
        usage = punyaSenjata[1][0];
        saveDb();
      } else {
        profil.inventory.items[punyaSenjata[0][0]].count -= 1;
        usage = punyaSenjata[0][0];
        saveDb();
      }

      let txt = `${b3}
${mHeader("Hunting")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Senjata : ${getShop()[usage].emoji} ${formatRupiah(profil.inventory.items[usage].count)} -1
${leftStyle} Hewan   : ${lawan.emoji.emoji} ${lawan.hewan} x1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}${txtres}
${botStyle}
${b3}`;

      await sen(txt, jid, false, getValidButtonReply([["Hunt Again", ".hunt"]]));
    }
    break;

case "nambang":
    {
      const shop = getShop();

      if (profil.inventory["items"]["beliung"].count <= 0) return await sen(`Maaf @${sender.getNumber()} kamu tidak Memiliki beliung untuk menambang silahkan beli beling di shop`, jid, false, getValidButtonReply([["Buy Beliung", ".buy beliung, 1"]]));

      let nom = random(1, 6);
      let p = Math.random() * 101;
      let res = pickRandom(Object.entries(emoji.shop.gua))[0];

      profil.inventory["items"][res].count += nom;
      profil.inventory["items"]["beliung"].count -= 1;

      let txt = `${b3}
${mHeader("Rewards")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Items   : ${shop[res].emoji} ${res} ${formatRupiah(profil.inventory["items"][res].count - nom)} +${nom}
${leftStyle} Harga   : ${shop[res].harga} / 1
${leftStyle} Beliung : ${shop["beliung"].emoji} ${formatRupiah(profil.inventory["items"]["beliung"].count + 1)} -1
${botStyle}
${b3}`;
      await sen(txt, jid, false, getValidButtonReply([["Mine Again", ".mining"]]));
      await add("exp", 5);
      saveDb();
    }
    break;

case "mancing":
    {
      if (profil.inventory.items.cacing?.count <= 0) return await sen(`Maaf @${sender?.getNumber()} cacing kamu telah habis!, silahkan beli cacing di shop`, jid, false, getValidButtonReply([["Buy Cacing", ".buy cacing, 1"]]));
      if (profil.inventory.items.joran?.count <= 0) return await sen(`Maaf @${sender?.getNumber()} joran kamu telah hancur!, silahkan beli joran di shop`, jid, false, getValidButtonReply([["Buy Joran", ".buy joran,1"]]));
      let ikan = pickRandom(Object.entries(Object.fromEntries(Object.entries(getShop()).filter((i) => i[1].type === "kolam"))));
      let txt = `${b3}
${mHeader(`Rewards`)}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} cacing : ${getShop()["cacing"].emoji} ${formatRupiah(profil.inventory.items?.cacing.count)} -1
${leftStyle} Joran  : ${getShop()["joran"].emoji} ${formatRupiah(profil.inventory.items?.joran.count)} -1
${leftStyle} Harga  : ${ikan[1].harga}
${leftStyle} Item   : ${ikan[1].emoji} ${ikan[0]}
${botStyle}
${b3}`;

      profil.inventory["kolam"][ikan[0]] = profil.inventory["kolam"][ikan[0]] || [];
      let maxId = Math.max(...profil.inventory["kolam"][ikan[0]].map((item) => item.id), -1);
      maxId += 1;
      profil.inventory["kolam"][ikan[0]].push({
        id: maxId,
        level: 1,
        emoji: ikan[1].emoji,
        harga: ikan[1].harga,
        type: "kolam",
        time: getTimeOn(0),
        times: "",
      });

      profil.inventory["items"]["cacing"].count -= 1;
      profil.inventory["items"]["joran"].count -= 1;

      await add("exp", 5);
      saveDb();
      await sen(txt, jid, false, getValidButtonReply([["Fish Again", ".fish"]]));
    }
    break;

case "setnames":
    {
      if (!text) return await example("Nama", "senw");
      if (text.trim().length > 12) return await sen(`Panjang nama hanya boleh 12 digit ke bawah!`);
      profil.name = text.trim();
      saveDb();
      await sen(`Berhasil mengatur username ✅`, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
    }
    break;

case "delivery":
    {
      let client = {
        car: { human: 4, box: 5 },
        suv: { human: 5, box: 7 },
        pickup: { human: 2, box: 15 },
        van: { human: 8, box: 10 },
        bus: { human: 40, box: 50 },
        trolleybus: { human: 35, box: 40 },
        policecar: { human: 4, box: 3 },
        taxi: { human: 4, box: 4 },
        ambulance: { human: 3, box: 5 },
        firetruck: { human: 6, box: 20 },
        truck: { human: 2, box: 30 },
        lorry: { human: 2, box: 40 },
        tractor: { human: 1, box: 5 },
        wheelchair: { human: 1, box: 0 },
        motor_wheelchair: {
          human: 1,
          box: 1,
        },
        scooter: { human: 1, box: 0 },
        bicycle: { human: 1, box: 1 },
        motorbike: { human: 2, box: 2 },
        motorscooter: { human: 2, box: 1 },
        autorickshaw: { human: 3, box: 2 },
        tramcar: { human: 60, box: 40 },
        monorail: { human: 200, box: 100 },
        train: { human: 300, box: 200 },
        bullettrain: {
          human: 400,
          box: 300,
        },
        subway: { human: 250, box: 150 },
        station: { human: 0, box: 0 },
        airplane: { human: 180, box: 500 },
        small_airplane: {
          human: 6,
          box: 20,
        },
        helicopter: { human: 5, box: 10 },
        parachute: { human: 1, box: 0 },
        speedboat: { human: 6, box: 5 },
        canoe: { human: 2, box: 1 },
        sailboat: { human: 10, box: 15 },
        ship: { human: 1000, box: 500 },
        ferry: { human: 500, box: 300 },
        passenger_ship: {
          human: 800,
          box: 400,
        },
        motorboat: { human: 4, box: 3 },
      };

      let myTrans = {};

      let myItems = Object.keys(Object.fromEntries(Object.entries(profil.inventory.items).filter(([id, obj]) => obj.count !== 0)));

      myItems.forEach((i) => {
        if (client?.[i]) myTrans[i] = client[i];
      });

      myTrans = Object.entries(myTrans).sort(([id1, obj1], [id2, obj2]) => {
        const cap1 = obj1.human + obj1.box;
        const cap2 = obj2.human + obj2.box;
        return cap2 - cap1;
      });

      if (!myTrans) return await sen(`Kamu belum menyewa kendaraan apapun!, silahkan sewa kendaraan di shop!`, jid, false, getValidButtonReply([["List Kendaraan", ".shop"]]));
      let button = getValidButtonList({
        title: "Select Vehicle",
        secTitle: "Pilih Kendaraan untuk bekerja",

        rows: myTrans.map(([id, obj], indx) => {
          return [`${"> "} [ ${profil.inventory.items[id].count} ] ${getShop()[id].emoji} ${id.capitalize()}`, `- ${id} dapat menampung ${obj.human} orang, ${obj.box} barang`, `.travel ${indx}`];
        }),
      });
      if (!text && myTrans.length !== 1) return await sen(`Kamu mempunyai ${myTrans.length} Kendaraan yang di sewa, pilih salah satu untuk memulai jobs!`, jid, false, button);
      myTrans = myTrans[myTrans.length === 1 ? 0 : fixNumber(text)];

      let humans = random(0, myTrans[1].human);
      let items = random(1, myTrans[1].box);

      let rewards = (humans + items) * 8;
      let txt = `${b3}
${mHeader("Travel Info")}
${leftStyle} Human   : ${humans} life
${leftStyle} Items   : ${items} box
${leftStyle} Vehicle : ${getShop()[myTrans[0]].emoji} ${myTrans[0]} ${profil.inventory.items[myTrans[0]].count} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${rewards}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${Math.floor(rewards / 3)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${Math.floor(rewards / 3)}
${botStyle}
${b3}`;

      profil.inventory.items[myTrans[0]].count -= 1;
      saveDb();

      await add("coin", rewards);
      await add("exp", Math.floor(rewards / 3));
      await add("limit", Math.floor(rewards / 3));

      await sen(txt, jid, false, getValidButtonReply([["Travel Again", ".travel"]]));
    }
    break;

case "backpack":
    {
      await updateFarmAndKolamLevels();
      await updatePet();
      let user = db.user[sender];
      profil.user = 1 == 2 ? "Developer" : isOwner ? "Owner" : isPrem ? "Premium" : "User";
      saveDb();
      const { exp: currentExp, maxExp, level, name } = user;

      const images = `${apiv6}/canvas/welcome?username=${name}&guildName=My+profil&memberCount=${Object.keys(db.user).length}&avatar=${profil.profil}&background=${encodeURIComponent("https://files.catbox.moe/tjq1v3.jpeg")}&quality=99`;

      let txt = `${b3}
${mHeader(`You Profile`)}
${leftStyle} Name   : ${user.name}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} Level  : ${formatRupiah(user.level)}
${leftStyle} Role   : ${user.user}
${lines}
${b3}
${b3}
${mHeader("Inventory")}
${leftStyle} Hp     : ${user.hp} / ${user.maxHp}
${leftStyle} Exp    : ${formatRupiah(user.exp)} / ${formatRupiah(user.maxExp)}
${leftStyle} Limit  : ${formatRupiah(user.limit)}
${leftStyle} Coin   : ${formatRupiah(user.coin)} 
${leftStyle} Bank   : ${formatRupiah(user.bank)} 
${botStyle}
${b3}`;

      await sendMedia(
        images,
        txt,
        jid,
        getValidButtonList({
          title: "Select Table",
          secTitle: "Tampilkan table tertentu",
          rows: [
            [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
            [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
            [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
            [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
          ],
        })
      );
    }
    break;

case "setavatar":
    {
      try {
        if (!/image/.test(mime)) return await onlyImage();
        let buffer = await downloadToBuffer(media);

        let url = await uploadUguu(buffer);
        profil.profil = url;
        saveDb();
        await sen(`Berhasil mengatur avatar user ✅`, jid, false, getValidButtonReply([["Cek Profil", ".me2"]]));
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "setprofil":
    {
      try {
        if (!/image/.test(mime)) return await onlyImage();
        let buffer = await downloadToBuffer(media);

        let url = await uploadUguu(buffer);
        profil.profil = url;
        saveDb();
        await sen(`Berhasil mengatur avatar user ✅`, jid, false, getValidButtonReply([["Cek Profil", ".me2"]]));
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "traveling":
    {
      let client = {
        car: { human: 4, box: 5 },
        suv: { human: 5, box: 7 },
        pickup: { human: 2, box: 15 },
        van: { human: 8, box: 10 },
        bus: { human: 40, box: 50 },
        trolleybus: { human: 35, box: 40 },
        policecar: { human: 4, box: 3 },
        taxi: { human: 4, box: 4 },
        ambulance: { human: 3, box: 5 },
        firetruck: { human: 6, box: 20 },
        truck: { human: 2, box: 30 },
        lorry: { human: 2, box: 40 },
        tractor: { human: 1, box: 5 },
        wheelchair: { human: 1, box: 0 },
        motor_wheelchair: {
          human: 1,
          box: 1,
        },
        scooter: { human: 1, box: 0 },
        bicycle: { human: 1, box: 1 },
        motorbike: { human: 2, box: 2 },
        motorscooter: { human: 2, box: 1 },
        autorickshaw: { human: 3, box: 2 },
        tramcar: { human: 60, box: 40 },
        monorail: { human: 200, box: 100 },
        train: { human: 300, box: 200 },
        bullettrain: {
          human: 400,
          box: 300,
        },
        subway: { human: 250, box: 150 },
        station: { human: 0, box: 0 },
        airplane: { human: 180, box: 500 },
        small_airplane: {
          human: 6,
          box: 20,
        },
        helicopter: { human: 5, box: 10 },
        parachute: { human: 1, box: 0 },
        speedboat: { human: 6, box: 5 },
        canoe: { human: 2, box: 1 },
        sailboat: { human: 10, box: 15 },
        ship: { human: 1000, box: 500 },
        ferry: { human: 500, box: 300 },
        passenger_ship: {
          human: 800,
          box: 400,
        },
        motorboat: { human: 4, box: 3 },
      };

      let myTrans = {};

      let myItems = Object.keys(Object.fromEntries(Object.entries(profil.inventory.items).filter(([id, obj]) => obj.count !== 0)));

      myItems.forEach((i) => {
        if (client?.[i]) myTrans[i] = client[i];
      });

      myTrans = Object.entries(myTrans).sort(([id1, obj1], [id2, obj2]) => {
        const cap1 = obj1.human + obj1.box;
        const cap2 = obj2.human + obj2.box;
        return cap2 - cap1;
      });

      if (!myTrans) return await sen(`Kamu belum menyewa kendaraan apapun!, silahkan sewa kendaraan di shop!`, jid, false, getValidButtonReply([["List Kendaraan", ".shop"]]));
      let button = getValidButtonList({
        title: "Select Vehicle",
        secTitle: "Pilih Kendaraan untuk bekerja",

        rows: myTrans.map(([id, obj], indx) => {
          return [`${"> "} [ ${profil.inventory.items[id].count} ] ${getShop()[id].emoji} ${id.capitalize()}`, `- ${id} dapat menampung ${obj.human} orang, ${obj.box} barang`, `.travel ${indx}`];
        }),
      });
      if (!text && myTrans.length !== 1) return await sen(`Kamu mempunyai ${myTrans.length} Kendaraan yang di sewa, pilih salah satu untuk memulai jobs!`, jid, false, button);
      myTrans = myTrans[myTrans.length === 1 ? 0 : fixNumber(text)];

      let humans = random(0, myTrans[1].human);
      let items = random(1, myTrans[1].box);

      let rewards = (humans + items) * 8;
      let txt = `${b3}
${mHeader("Travel Info")}
${leftStyle} Human   : ${humans} life
${leftStyle} Items   : ${items} box
${leftStyle} Vehicle : ${getShop()[myTrans[0]].emoji} ${myTrans[0]} ${profil.inventory.items[myTrans[0]].count} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${rewards}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${Math.floor(rewards / 3)}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${Math.floor(rewards / 3)}
${botStyle}
${b3}`;

      profil.inventory.items[myTrans[0]].count -= 1;
      saveDb();

      await add("coin", rewards);
      await add("exp", Math.floor(rewards / 3));
      await add("limit", Math.floor(rewards / 3));

      await sen(txt, jid, false, getValidButtonReply([["Travel Again", ".travel"]]));
    }
    break;

case "menambang":
    {
      const shop = getShop();

      if (profil.inventory["items"]["beliung"].count <= 0) return await sen(`Maaf @${sender.getNumber()} kamu tidak Memiliki beliung untuk menambang silahkan beli beling di shop`, jid, false, getValidButtonReply([["Buy Beliung", ".buy beliung, 1"]]));

      let nom = random(1, 6);
      let p = Math.random() * 101;
      let res = pickRandom(Object.entries(emoji.shop.gua))[0];

      profil.inventory["items"][res].count += nom;
      profil.inventory["items"]["beliung"].count -= 1;

      let txt = `${b3}
${mHeader("Rewards")}
${leftStyle} User    : @${sender.getNumber()}
${leftStyle} Items   : ${shop[res].emoji} ${res} ${formatRupiah(profil.inventory["items"][res].count - nom)} +${nom}
${leftStyle} Harga   : ${shop[res].harga} / 1
${leftStyle} Beliung : ${shop["beliung"].emoji} ${formatRupiah(profil.inventory["items"]["beliung"].count + 1)} -1
${botStyle}
${b3}`;
      await sen(txt, jid, false, getValidButtonReply([["Mine Again", ".mining"]]));
      await add("exp", 5);
      saveDb();
    }
    break;

case "inventory":
    {
      await updateFarmAndKolamLevels();
      await updatePet();
      let user = db.user[sender];
      profil.user = 1 == 2 ? "Developer" : isOwner ? "Owner" : isPrem ? "Premium" : "User";
      saveDb();
      const { exp: currentExp, maxExp, level, name } = user;

      const images = `${apiv6}/canvas/welcome?username=${name}&guildName=My+profil&memberCount=${Object.keys(db.user).length}&avatar=${profil.profil}&background=${encodeURIComponent("https://files.catbox.moe/tjq1v3.jpeg")}&quality=99`;

      let txt = `${b3}
${mHeader(`You Profile`)}
${leftStyle} Name   : ${user.name}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} Level  : ${formatRupiah(user.level)}
${leftStyle} Role   : ${user.user}
${lines}
${b3}
${b3}
${mHeader("Inventory")}
${leftStyle} Hp     : ${user.hp} / ${user.maxHp}
${leftStyle} Exp    : ${formatRupiah(user.exp)} / ${formatRupiah(user.maxExp)}
${leftStyle} Limit  : ${formatRupiah(user.limit)}
${leftStyle} Coin   : ${formatRupiah(user.coin)} 
${leftStyle} Bank   : ${formatRupiah(user.bank)} 
${botStyle}
${b3}`;

      await sendMedia(
        images,
        txt,
        jid,
        getValidButtonList({
          title: "Select Table",
          secTitle: "Tampilkan table tertentu",
          rows: [
            [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
            [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
            [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
            [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
          ],
        })
      );
    }
    break;

case "inventori":
    {
      await updateFarmAndKolamLevels();
      await updatePet();
      let user = db.user[sender];
      profil.user = 1 == 2 ? "Developer" : isOwner ? "Owner" : isPrem ? "Premium" : "User";
      saveDb();
      const { exp: currentExp, maxExp, level, name } = user;

      const images = `${apiv6}/canvas/welcome?username=${name}&guildName=My+profil&memberCount=${Object.keys(db.user).length}&avatar=${profil.profil}&background=${encodeURIComponent("https://files.catbox.moe/tjq1v3.jpeg")}&quality=99`;

      let txt = `${b3}
${mHeader(`You Profile`)}
${leftStyle} Name   : ${user.name}
${leftStyle} User   : @${sender?.getNumber()}
${leftStyle} Level  : ${formatRupiah(user.level)}
${leftStyle} Role   : ${user.user}
${lines}
${b3}
${b3}
${mHeader("Inventory")}
${leftStyle} Hp     : ${user.hp} / ${user.maxHp}
${leftStyle} Exp    : ${formatRupiah(user.exp)} / ${formatRupiah(user.maxExp)}
${leftStyle} Limit  : ${formatRupiah(user.limit)}
${leftStyle} Coin   : ${formatRupiah(user.coin)} 
${leftStyle} Bank   : ${formatRupiah(user.bank)} 
${botStyle}
${b3}`;

      await sendMedia(
        images,
        txt,
        jid,
        getValidButtonList({
          title: "Select Table",
          secTitle: "Tampilkan table tertentu",
          rows: [
            [`${"> "} Items Table`, `- Pilih untuk melihat items yang di miliki`, `.table items`],
            [`${"> "} Garden Table`, `- Pilih untuk melihat Perkebunan milik kamu`, `.table kebun`],
            [`${"> "} Pool Table`, `- Pilih untuk melihat Kolam milik kamu`, `.table kolam`],
            [`${"> "} Pet Table`, `- Pilih untuk melihat Hewan peliharaan milik kamu`, `.table pet`],
          ],
        })
      );
    }
    break;

case "lootcreate":
    {
      try {
        if (!text)
          return await sen(
            `Silahkan pilih mau membuka box yang mana`,
            jid,
            false,
            getValidButtonList({
              title: "Select Box",
              secTitle: "Pilih box untuk di buka",

              rows: Object.entries(emoji.shop.box).map(([id, obj]) => {
                return [`${"> "} ${obj.emoji} ${id}`, `- Box ${id}, Di miliki ${profil.inventory.items[id].count} box`, `.openbox ${id}`];
              }),
            })
          );

        if (!emoji.shop.box?.[text.clear()]) return await sen(`Tidak ada box bernama "${text}" di inventory kamu!`);
        if (profil.inventory.items?.[text.clear()].count === 0) return await sen(`Kamu tidak memiliki box ${emoji.shop.box[text.clear()].emoji} ${text.clear()} di inventory!`, jid, false, getValidButtonReply([[`Buy ${text.capitalize()}`, `.buy ${text.clear()}, 1`]]));

        let resC = random(1, emoji.shop.box?.[text.clear()].harga * 0.2);
        let resE = random(1, emoji.shop.box?.[text.clear()].harga * 0.3);
        let resL = random(1, emoji.shop.box?.[text.clear()].harga * 0.1);

        let txt = `${b3}
${mHeader("Users")}
${leftStyle} Users : @${sender.getNumber()}
${leftStyle} Box   : ${emoji.shop.box[text.clear()].emoji} ${text.clear()} -1
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +${resC}
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +${resE}
${leftStyle} Limit : ${formatRupiah(profil.limit)} +${resL}
${botStyle}
${b3}`;

        await add("exp", resE);
        await add("coin", resC);
        await add("limit", resL);
        profil.inventory.items[text.clear()].count -= 1;
        saveDb();
        await sen(txt);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "setusername":
    {
      if (!text) return await example("Nama", "senw");
      if (text.trim().length > 12) return await sen(`Panjang nama hanya boleh 12 digit ke bawah!`);
      profil.name = text.trim();
      saveDb();
      await sen(`Berhasil mengatur username ✅`, jid, false, getValidButtonReply([["Cek Profil", ".me"]]));
    }
    break;

case "ttc":
    {
      if (EdogawaSenq.tictactoe?.[jid]) return await sen(`Sedang ada users yang bermain tictactoe di grub ini!`);
      let randomTag = isGroup ? pickRandom(metadata[jid].participants).lid.getNumber() : "";
      if (!text) return await example("@tag", "@senq");

      let tags = await decode(text);
      if (!getMetadata().allParticipantsLid.includes(tags)) return await sen(`Tolong tag seseorang yang ada di grub ini!`);
      if (tags === sender) return await sen(`Kamu tidak bisa bermain dengan kamu sendiri!`);

      let txt = `${b3}
${mHeader("Tic Tac Toe")}
${leftStyle} User 1  : [ X ] @${sender.getNumber()}
${leftStyle} User 2  : [ O ] @${tags.getNumber()}
${leftStyle} Giliran : @${sender?.getNumber()}
${botStyle}
${b3}
${b3}
${mHeader("rewards")}
${leftStyle} Coin  : +20
${leftStyle} Limit : +5
${leftStyle} Exp   : +5
${botStyle}
${b3}
Ketik .apply angkanya untuk memilih angka pada board`;

      let image = drawBoardTtc([0, 0, 0, 0, 0, 0, 0, 0, 0]);

      await sendMedia(image, txt);
      EdogawaSenq.tictactoe[jid] = {
        user1: sender,
        user2: tags,
        user: [sender, tags],
        turn: random(0, 1) === 1 ? sender : tags,
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      };
    }
    break;

case "math":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq.math?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const result = EdogawaSenqMath();
        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq.math[jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq.math) return;
            if (!EdogawaSenq.math[jid]) return;
            if (EdogawaSenq.math[jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "batu":
    {
      try {
        if (isGroup) return await sen(`Fitur ${command} hanya bisa di gunakan pada private chat!`);
        let [id, key] = Object.entries(EdogawaSenq.suit).find(([a, b]) => b.user.includes(sender));
        let game = EdogawaSenq.suit?.[id];
        if (!game) return await sen(`Untuk memilih ${command} kamu harus bermain suit dulu!`);
        if (!game.user.includes(sender)) return await sen(`Kamu tidak sedang bermain suit!, tunggu @${game.user[0].getNumber()} dan @${game.user[1].getNumber()} selesai bermain suit dulu!`);

        game.choice[sender] = command;

        if (Object.keys(game.choice).length === 1) {
          await sen(`Berhasil kamu telah memilih pilihan kamu!, sekarang tinggal @${game.user.exclude(sender)[0].getNumber()} untuk memilih ✅`);
        } else {
          let myChoose = game.choice[sender];
          let musuhChoose = game.choice[game.user.exclude(sender)[0]];

          if (myChoose == musuhChoose) {
            let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;
            let now = game.user.exclude(sender)[0];
            await add("exp", 2);
            await add("coin", 5);
            await add("limit", 2);
            await add("exp", 2, now);
            await add("coin", 5, now);
            await add("limit", 2, now);
            delete EdogawaSenq.suit[id];
            await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]]), txt, game.room);
          } else {
            if ((myChoose === "gunting" && musuhChoose === "kertas") || (myChoose === "batu" && musuhChoose === "gunting") || (myChoose === "kertas" && musuhChoose === "batu")) {
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${sender.getNumber()}
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5);
              await add("coin", 20);
              await add("limit", 5);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[sender]), txt, game.room);
            } else {
              let now = game.user.exclude(sender)[0];
              let pr = db.user[now];
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${now.getNumber()}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5, now);
              await add("coin", 20, now);
              await add("limit", 5, now);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[now]), txt, game.room);
            }
          }
        }
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "move":
    {
      try {
        const games = EdogawaSenq.catur?.[jid];
        if (!games) return await sen("kamu belum main catur di grub ini!, silahkan main catur dengan seseorang!");
        const users = games.user;
        if (!users.includes(sender)) return await sen("Kalau kamu ingin menggerakan pion kamu harus main catur dengan seseorang!");
        if (games.giliran !== sender) return await sen(`Sekarang giliran @${games.giliran.getNumber()} untuk bergerak!, bukan giliran kamu!`);

        const [moveFrom, moveTo] = text.split(" ").map((i) => i.trim());
        const playerId = games.putih === sender ? 1 : 2;
        const xFrom = charToX(moveFrom?.split("")[0]);
        const yFrom = fixNumber(moveFrom?.split("")[1]);
        const xTo = charToX(moveTo?.split("")[0]);
        const yTo = fixNumber(moveTo?.split("")[1]);
        const isComputer = Object.keys(chessMode).includes(games.hitam) ? true : false;
        const imageBoard = await drawBoardChess(games.board);
        const allValidMoves = getAllValidMoves(games.board, playerId);
        const allValidMoveButtons = getValidButtonList({
          title: "Move Piece",
          secTitle: "Gerakan Pion",

          rows: Object.keys(allValidMoves).map((i) => {
            let xMy = fixNumber(i.split(",")[0]);
            let yMy = fixNumber(i.split(",")[1]);
            let myPiece = games.board[yMy][xMy];
            return [`${"> "} Move ${xToChar(xMy)}${yMy} [ ${getUnicodePiece(myPiece)} ]`, `- Pilih ini untuk menggerakan pion di posisi ${xToChar(xMy)}${yMy} ${getUnicodePiece(myPiece)}`, `.move ${xToChar(xMy)}${yMy}`];
          }),
        });

        let txtAllValidMove = ``;
        let fromValidMove = xFrom !== null && yFrom !== null ? allValidMoves[`${xFrom},${yFrom}`] : undefined;
        let txtFromValidMove = ``;

        let fromValidButtons = fromValidMove
          ? getValidButtonList({
              title: `Move Piece [ ${getUnicodePiece(fromValidMove.piece)} ]`,
              secTitle: `Move Piece ${getUnicodePiece(fromValidMove.piece)} [ ${moveFrom} ]`,

              rows: fromValidMove.to.map((i) => {
                let xTo = fixNumber(i.split(",")[0]);
                let yTo = fixNumber(i.split(",")[1]);

                let myPiece = games.board[yFrom][xFrom];

                return [`${"> "} Move ${moveFrom} [ ${getUnicodePiece(myPiece)} ]`, `- Gerakan pion di posisi ${moveFrom} ke ${xToChar(xTo)}${yTo}`, `.move ${moveFrom} ${xToChar(xTo)}${yTo}`];
              }),
            })
          : [];

        if (fromValidMove) {
          fromValidMove.to?.forEach((i) => {
            let charXTo = xToChar(fixNumber(i.split(",")[0]));
            let charYTo = fixNumber(i.split(",")[1]);
            txtFromValidMove += `\n${leftStyle} ${prefix}move ${moveFrom} ${charXTo}${charYTo}`;
          });
        } else {
          txtFromValidMove = `\nDi posisi ${moveFrom} Tidak ada pion tersedia!, silahkan pilih posisi lain!`;
        }

        Object.keys(allValidMoves).forEach((i) => {
          txtAllValidMove += `\n${leftStyle} ${prefix}move ${xToChar(fixNumber(i.split(",")[0]))}${i.split(",")[1]}`;
        });

        let gamesTxt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${games.putih.getNumber()} 
${leftStyle} Hitam   : @${games.hitam.getNumber()} 
${leftStyle} Giliran : @${games.giliran.getNumber()}
${b3}`;

        console.log({ xFrom });
        console.log({ yFrom });
        console.log({ xTo });
        console.log({ yTo });
        console.log({ allValidMoves });
        console.log({ fromValidMove });

        if (!text) {
          let txt = `${gamesTxt}
${b3}
${mHeader("Info Games")}
Silahkan pilih pion untuk di gerakan !
${lines}
${b3}
${b3}
${mHeader("Contoh 1")}${txtAllValidMove}
${lines}
${b3}`;

          await sendMedia(imageBoard, txt, jid, allValidMoveButtons);

          return;
        }

        if (moveFrom && !moveTo) {
          console.log({ txtFromValidMove });
          let txt = `${gamesTxt}
${b3}
${mHeader("Contoh 2")}${txtFromValidMove}
${lines}
${b3}`;

          if (!fromValidMove) return await sendMedia(imageBoard, txt, jid, allValidMoveButtons);
          let mask = await drawMaskChess(fromValidMove.to, `${xFrom},${yFrom}`);
          await sendMedia(mask, txt, jid, fromValidButtons);
          return;
        }

        if (moveFrom && moveTo) {
          let txt = `${gamesTxt}
${b3}
${mHeader("Contoh 3")}${txtFromValidMove}
${lines}
${b3}`;

          if (!fromValidMove) return await sendMedia(imageBoard, txt, jid, allValidMoveButtons);

          let mask = await drawMaskChess(fromValidMove.to, `${xFrom},${yFrom}`);
          if (!fromValidMove.to.includes(`${xTo},${yTo}`)) return await sendMedia(mask, txt, jid, fromValidButtons);

          let myResMove = movePiece(games.board, playerId, xFrom, yFrom, xTo, yTo);
          console.log({ myResMove });

          let moveStatus = myResMove.status;

          if (moveStatus === "sukses" || moveStatus === "skak") {
            if (!isComputer) {
              let board = await drawBoardChess(myResMove.resultBoard);
              EdogawaSenq.catur[games.room].board = myResMove.resultBoard;
              EdogawaSenq.catur[games.room].giliran = games.user.filter((i) => i !== games.giliran)[0];

              let txt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${games.putih.getNumber()} 
${leftStyle} Hitam   : @${games.hitam.getNumber()}
${leftStyle} Giliran : @${EdogawaSenq.catur[games.room].giliran.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Message")}
${moveStatus == "skak" ? `Raja kamu terancam! silahkan bunuh, halangi atau pindahkan posisi raja!` : `Sukses menggerakan pion!, sekarang giliran player ${playerId == 1 ? 2 : 1} untuk bergerak!`}
${lines}
${b3}`;

              if (moveStatus === "skak") {
                const validMoveOnSkak = getAllLegalEscapeMoves(EdogawaSenq.catur[games.room].board, playerId == 1 ? 2 : 1);
                let posisiRajaLawan = findKingPosition(EdogawaSenq.catur[games.room].board, playerId === 1 ? 2 : 1);
                let mask = await drawMaskChess([], `${posisiRajaLawan.x}, ${posisiRajaLawan.y}`, "red");

                let sections = [];

                for (let [id, obj] of Object.entries(validMoveOnSkak)) {
                  let xOnSkak = xToChar(fixNumber(id.split("@")[1].split(",")[0]));
                  let yOnSkak = fixNumber(id.split("@")[1].split(",")[1]);

                  let rows = [];

                  obj.forEach((i) => {
                    let xToSkak = xToChar(fixNumber(i.split(",")[0]));
                    let yToSkak = fixNumber(i.split(",")[1]);
                    rows.push({
                      header: `${"> "} Move ${xOnSkak}${yOnSkak} [ ${getUnicodePiece(id.split("@")[0])} ]`,
                      title: `- Gerakan pion di posisi ${xOnSkak}${yOnSkak} ke ${xToSkak}${yToSkak}`,
                      id: `.move ${xOnSkak}${yOnSkak} ${xToSkak}${yToSkak}`,
                    });
                  });

                  sections.push({
                    title: `Move Piece ${getUnicodePiece(id.split("@")[0])} [ ${xOnSkak}${yOnSkak} ]`,
                    highlight_label: "",
                    rows,
                  });
                }

                await sendMedia(mask, txt, jid, [
                  {
                    buttonId: "action",
                    buttonText: {
                      displayText: "",
                    },
                    type: 4,
                    nativeFlowInfo: {
                      name: "single_select",
                      paramsJson: JSON.stringify({
                        title: "Move Piece",
                        sections,
                      }),
                    },
                  },
                ]);
              } else {
                await sendMedia(
                  board,
                  txt,
                  jid,

                  getValidButtonList({
                    title: "Move Piece",
                    secTitle: "Gerakan Pion",

                    rows: Object.keys(getAllValidMoves(EdogawaSenq.catur[games.room].board, playerId === 1 ? 2 : 1)).map((i) => {
                      let xMy = fixNumber(i.split(",")[0]);
                      let yMy = fixNumber(i.split(",")[1]);
                      let myPiece = EdogawaSenq.catur[games.room].board[yMy][xMy];
                      return [`${"> "} Move ${xToChar(xMy)}${yMy} [ ${getUnicodePiece(myPiece)} ]`, `- Pilih ini untuk menggerakan pion di posisi ${xToChar(xMy)}${yMy} ${getUnicodePiece(myPiece)}`, `.move ${xToChar(xMy)}${yMy}`];
                    }),
                  })
                );
              }
            } else {
            }
          } else if (moveStatus === "skakmove") {
            let myKingPosition = findKingPosition(EdogawaSenq.catur[games.room].board, playerId);
            let mask = await drawMaskChess([], `${myKingPosition.x}, ${myKingPosition.y}`, "red");

            let sections = [];
            let txtValidMoveOnSkak = "";

            for (let [id, obj] of Object.entries(myResMove.validMove)) {
              let xOnSkak = xToChar(fixNumber(id.split("@")[1].split(",")[0]));
              let yOnSkak = fixNumber(id.split("@")[1].split(",")[1]);

              txtValidMoveOnSkak += `\n${leftStyle} ${prefix}move ${xOnSkak}${yOnSkak}`;

              let rows = [];

              obj.forEach((i) => {
                let xToSkak = xToChar(fixNumber(i.split(",")[0]));
                let yToSkak = fixNumber(i.split(",")[1]);
                rows.push({
                  header: `${"> "} Move ${xOnSkak}${yOnSkak} [ ${getUnicodePiece(id.split("@")[0])} ]`,
                  title: `- Gerakan pion di posisi ${xOnSkak}${yOnSkak} ke ${xToSkak}${yToSkak}`,
                  id: `.move ${xOnSkak}${yOnSkak} ${xToSkak}${yToSkak}`,
                });
              });

              sections.push({
                title: `Move Piece ${getUnicodePiece(id.split("@")[0])} [ ${xOnSkak}${yOnSkak} ]`,
                highlight_label: "",
                rows,
              });
            }

            let txt = `${gamesTxt}
${b3}
${mHeader("Message")}
Posisi raja kamu sedang terancam silahkan bunuh, halangi atau pindahkan posisi raja!
${lines}
${b3}
${b3}
${mHeader("Contoh 4")}${txtValidMoveOnSkak}
${lines}
${b3}`;

            await sendMedia(mask, txt, jid, [
              {
                buttonId: "action",
                buttonText: {
                  displayText: "",
                },
                type: 4,
                nativeFlowInfo: {
                  name: "single_select",
                  paramsJson: JSON.stringify({
                    title: "Move Piece",
                    sections,
                  }),
                },
              },
            ]);
          } else if (moveStatus === "skakmat") {
            let winner = sender.getNumber();
            let txt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih  : @${games.putih.getNumber()}
${leftStyle} Hitam  : ${isComputer ? "Computer " + games.hitam : "@" + games.hitam.getNumber()}
${leftStyle} Winner : @${winner}
${lines}
${b3}
${b3}
${mHeader("Message")}
${myResMove.txt}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} coin  : ${formatRupiah(profil.coin)} +${isComputer ? chessMode[games.hitam].coin : "50"}
${leftStyle} limit : ${formatRupiah(profil.limit)} +${isComputer ? chessMode[games.hitam].limit : "20"}
${leftStyle} exp   : ${formatRupiah(profil.exp)} +${isComputer ? chessMode[games.hitam].exp : "30"}
${lines}
${b3}`;

            await add("exp", isComputer ? chessMode[games.hitam].exp : 30);
            await add("limit", isComputer ? chessMode[games.hitam].limit : 20);
            await add("coin", isComputer ? chessMode[games.hitam].coin : 50);

            await drawBoardChess(myResMove.resultBoard);
            let posisiRajaLawan = findKingPosition(games.board, playerId === 1 ? 2 : 1);
            let mask = await drawMaskChess([], `${posisiRajaLawan.x}, ${posisiRajaLawan.y}`, "red");

            await sendMedia(mask, txt);

            delete EdogawaSenq.catur[games.room];
          }
          return;
        }

        console.log("Aya nu aneh jal ilikan consol");
      } catch (e) {
        sen(`Eror fitur ${command}\nss eror ini kirim ke swnq klo ga bot bakal mati hahahaha\n\n${e.message}`);
      }
    }
    break;

case "kimia":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const soal = {
          biologi: EdogawaSenqBiologi,
          fisika: EdogawaSenqFisika,
          sejarah: EdogawaSenqSejarah,
          geografi: EdogawaSenqGeografi,
          kimia: EdogawaSenqKimia,
        };

        const result = soal[command]();

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "apply":
    {
      let game = EdogawaSenq.tictactoe?.[jid];
      if (!game) return await sen(`Jika mau pilih angka untuk game tictactoe harus bermain game tersebut!`, jid, false);
      if (game.turn !== sender) return await sen(`Bukan giliran kamu untuk memilih angka!, sekarang giliran nya @${game.turn.getNumber()}`, jid, false);

      let number = fixNumber(text);

      if (isNaN(number) || number < 1 || number > 9) return await sen(`Silahlan Pilih angka dari 1-9`, jid, false);
      if (game.board[number - 1] !== 0) return await sen(`Angka tersebut sudah di isi silahkan pilih angka lain!`, jid, false);

      let simbol = game.user1 === sender ? "X" : "O";
      game.board[number - 1] = simbol;

      function checkWin(board, simbol) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        return lines.some((line) => line.every((i) => board[i] === simbol));
      }

      function getPositionWinner(board) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8], // baris
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8], // kolom
          [0, 4, 8],
          [2, 4, 6], // diagonal
        ];

        for (let line of lines) {
          let [a, b, c] = line;
          if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) {
            // +1 karena index array mulai dari 0
            let start = a + 1;
            let end = c + 1;
            return `${start},${end}`;
          }
        }
        return null; // tidak ada kemenangan
      }

      function checkDraw(board) {
        return board.every((cell) => cell !== 0);
      }

      if (checkWin(game.board, simbol)) {
        let image = drawBoardTtc(game.board, getPositionWinner(game.board));
        let txt = `${b3}
${mHeader("Tic Tac Toe")}
${leftStyle} User 1 : [ X ] @${game.user1.getNumber()}
${leftStyle} User 2 : [ O ] @${game.user2.getNumber()}
${leftStyle} Winner : @${sender.getNumber()}
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} +20
${leftStyle} Exp   : ${formatRupiah(profil.exp)} +5
${leftStyle} Limit : ${formatRupiah(profil.limit)} +5
${botStyle}
${b3}`;

        await add("exp", 5);
        await add("limit", 5);
        await add("coin", 20);

        await sendMedia(image, txt, jid);
        delete EdogawaSenq.tictactoe[jid];
        break;
      }

      // Cek draw
      if (checkDraw(game.board)) {
        let image = drawBoardTtc(game.board);
        let txt = `${b3}
${mHeader("Tic Tac Toe")}
${leftStyle} User 1 : [ X ] @${game.user1.getNumber()}
${leftStyle} User 2 : [ O ] @${game.user2.getNumber()}
${leftStyle} Winner : Draw
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : +10
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

        await add("exp", 2, game.user1);
        await add("limit", 2, game.user1);
        await add("coin", 10, game.user1);
        await add("exp", 2, game.user2);
        await add("limit", 2, game.user2);
        await add("coin", 10, game.user2);

        await sendMedia(image, txt, jid);
        delete EdogawaSenq.tictactoe[jid];
        break;
      }

      // Ganti giliran
      game.turn = game.turn === game.user1 ? game.user2 : game.user1;
      EdogawaSenq.tictactoe[jid] = game;

      let image = drawBoardTtc(game.board);
      let txt = `${b3}
${mHeader("Tic Tac Toe")}
${leftStyle} User 1  : [ X ] @${game.user1.getNumber()}
${leftStyle} User 2  : [ O ] @${game.user2.getNumber()}
${leftStyle} Giliran : @${game.turn.getNumber()}
${botStyle}
${b3}`;

      await sendMedia(image, txt, jid);
    }
    break;

case "catur":
    {
      try {
        if (!isGroup) return await onlyGrup();
        let randomTag = isGroup ? pickRandom(metadata[jid].participants).id.getNumber() : "";
        if (!text) return example("@tag");
        let mode = [];
        let tags = await decode(text);
        if (!getMetadata().allParticipantsLid.includes(tags)) return await sen(`Tolong tag nomor yang ada di grub ini!`);
        if (tags === sender) return await sen(`Kamu tidak bisa bermain catur dengan kamu sendiri!`);

        if (EdogawaSenq.catur?.[jid]) return await sen(`@${EdogawaSenq.catur[jid].putih.getNumber()} dan @${EdogawaSenq.catur[jid].hitam.getNumber()} sedang bermain catur di grub ini!, tunggu mereka selesai dulu!`);

        const board = [
          ["R2", "N2", "B2", "Q2", "K2", "B2", "N2", "R2"],
          ["P2", "P2", "P2", "P2", "P2", "P2", "P2", "P2"],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["P1", "P1", "P1", "P1", "P1", "P1", "P1", "P1"],
          ["R1", "N1", "B1", "Q1", "K1", "B1", "N1", "R1"],
        ];

        const room = jid;

        if (!EdogawaSenq.catur) EdogawaSenq.catur = {};

        EdogawaSenq.catur[room] = {
          room,
          putih: sender,
          hitam: mode.includes(text.clear()) ? text.clear() : await decode(text),
          user: [sender, await decode(text)],
          giliran: sender,
          board,
        };

        let txt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${sender.getNumber()}
${leftStyle} Hitam   : ${mode.includes(text.clear()) ? "Computer " + text.clear() : "@" + (await decode(text)).getNumber()}
${leftStyle} Giliran : @${sender.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Info")}
${leftStyle} .move ➜ Gerak
${leftStyle} .chess-end ➜ End Game
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : +${mode.includes(text.clear()) ? chessMode[text.clear()].coin : "50"}
${leftStyle} Exp   : +${mode.includes(text.clear()) ? chessMode[text.clear()].exp : "30"}
${leftStyle} Limit : +${mode.includes(text.clear()) ? chessMode[text.clear()].limit : "20"}
${lines}
${b3}`;

        await sendMedia(
          await drawBoardChess(board),
          txt,
          jid,
          getValidButtonList({
            title: "Chess",
            secTitle: "Select Menu",

            rows: [
              [`${"> "} Move`, `- Fitur untuk menggerakan pion`, ".move"],
              [`${"> "} Chess End`, `- Fitur untuk mengakhiri game`, ".chess-end"],
            ],
          })
        );
      } catch (e) {
        sen(`Eror fitur ${command}\nss eror ini kirim ke swnq klo ga bot bakal mati hahahaha\n\n${e.message}`);
      }
    }
    break;

case "chess":
    {
      try {
        if (!isGroup) return await onlyGrup();
        let randomTag = isGroup ? pickRandom(metadata[jid].participants).id.getNumber() : "";
        if (!text) return example("@tag");
        let mode = [];
        let tags = await decode(text);
        if (!getMetadata().allParticipantsLid.includes(tags)) return await sen(`Tolong tag nomor yang ada di grub ini!`);
        if (tags === sender) return await sen(`Kamu tidak bisa bermain catur dengan kamu sendiri!`);

        if (EdogawaSenq.catur?.[jid]) return await sen(`@${EdogawaSenq.catur[jid].putih.getNumber()} dan @${EdogawaSenq.catur[jid].hitam.getNumber()} sedang bermain catur di grub ini!, tunggu mereka selesai dulu!`);

        const board = [
          ["R2", "N2", "B2", "Q2", "K2", "B2", "N2", "R2"],
          ["P2", "P2", "P2", "P2", "P2", "P2", "P2", "P2"],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", ""],
          ["P1", "P1", "P1", "P1", "P1", "P1", "P1", "P1"],
          ["R1", "N1", "B1", "Q1", "K1", "B1", "N1", "R1"],
        ];

        const room = jid;

        if (!EdogawaSenq.catur) EdogawaSenq.catur = {};

        EdogawaSenq.catur[room] = {
          room,
          putih: sender,
          hitam: mode.includes(text.clear()) ? text.clear() : await decode(text),
          user: [sender, await decode(text)],
          giliran: sender,
          board,
        };

        let txt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${sender.getNumber()}
${leftStyle} Hitam   : ${mode.includes(text.clear()) ? "Computer " + text.clear() : "@" + (await decode(text)).getNumber()}
${leftStyle} Giliran : @${sender.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Info")}
${leftStyle} .move ➜ Gerak
${leftStyle} .chess-end ➜ End Game
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : +${mode.includes(text.clear()) ? chessMode[text.clear()].coin : "50"}
${leftStyle} Exp   : +${mode.includes(text.clear()) ? chessMode[text.clear()].exp : "30"}
${leftStyle} Limit : +${mode.includes(text.clear()) ? chessMode[text.clear()].limit : "20"}
${lines}
${b3}`;

        await sendMedia(
          await drawBoardChess(board),
          txt,
          jid,
          getValidButtonList({
            title: "Chess",
            secTitle: "Select Menu",

            rows: [
              [`${"> "} Move`, `- Fitur untuk menggerakan pion`, ".move"],
              [`${"> "} Chess End`, `- Fitur untuk mengakhiri game`, ".chess-end"],
            ],
          })
        );
      } catch (e) {
        sen(`Eror fitur ${command}\nss eror ini kirim ke swnq klo ga bot bakal mati hahahaha\n\n${e.message}`);
      }
    }
    break;

case "fisika":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const soal = {
          biologi: EdogawaSenqBiologi,
          fisika: EdogawaSenqFisika,
          sejarah: EdogawaSenqSejarah,
          geografi: EdogawaSenqGeografi,
          kimia: EdogawaSenqKimia,
        };

        const result = soal[command]();

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "kertas":
    {
      try {
        if (isGroup) return await sen(`Fitur ${command} hanya bisa di gunakan pada private chat!`);
        let [id, key] = Object.entries(EdogawaSenq.suit).find(([a, b]) => b.user.includes(sender));
        let game = EdogawaSenq.suit?.[id];
        if (!game) return await sen(`Untuk memilih ${command} kamu harus bermain suit dulu!`);
        if (!game.user.includes(sender)) return await sen(`Kamu tidak sedang bermain suit!, tunggu @${game.user[0].getNumber()} dan @${game.user[1].getNumber()} selesai bermain suit dulu!`);

        game.choice[sender] = command;

        if (Object.keys(game.choice).length === 1) {
          await sen(`Berhasil kamu telah memilih pilihan kamu!, sekarang tinggal @${game.user.exclude(sender)[0].getNumber()} untuk memilih ✅`);
        } else {
          let myChoose = game.choice[sender];
          let musuhChoose = game.choice[game.user.exclude(sender)[0]];

          if (myChoose == musuhChoose) {
            let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;
            let now = game.user.exclude(sender)[0];
            await add("exp", 2);
            await add("coin", 5);
            await add("limit", 2);
            await add("exp", 2, now);
            await add("coin", 5, now);
            await add("limit", 2, now);
            delete EdogawaSenq.suit[id];
            await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]]), txt, game.room);
          } else {
            if ((myChoose === "gunting" && musuhChoose === "kertas") || (myChoose === "batu" && musuhChoose === "gunting") || (myChoose === "kertas" && musuhChoose === "batu")) {
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${sender.getNumber()}
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5);
              await add("coin", 20);
              await add("limit", 5);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[sender]), txt, game.room);
            } else {
              let now = game.user.exclude(sender)[0];
              let pr = db.user[now];
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${now.getNumber()}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5, now);
              await add("coin", 20, now);
              await add("limit", 5, now);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[now]), txt, game.room);
            }
          }
        }
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "lempar":
    {
      if (!EdogawaSenq.ularTangga?.[jid]?.user?.includes(sender)) return await sen(`kalau mau lempar dadu harus bermain ular tangga dlu`);

      let games = EdogawaSenq.ularTangga[jid];
      if (games.giliran !== sender) return await sen(`Bukan giliran kamu!!, sekarang giliran si @${games.giliran.getNumber()}`);

      let steps2 = 1;
      let steps = random(1, 6);
      games = movePlayer(games, sender, steps);

      let image = await drawBoardUlarTangga(games.board, games.userColor, games.bgPath, games.trails);

      games.trails = [];

      let txt;
      if (!games.isWin.status) {
        txt = `${b3}
${mHeader("Ular Tangga")}
${leftStyle} Giliran : @${games.giliran.getNumber()}
${leftStyle} Dadu    : ${steps}x
${botStyle}
${b3}
${b3}
${mHeader("Player")}
${Object.entries(games.userColor)
  .map(([id, obj]) => `${leftStyle} ${obj.name} : @${id.getNumber()}`)
  .join("\n")}
${botStyle}
${b3}`;
      } else {
        txt = `${b3}
${mHeader("Ular Tangga")}
${leftStyle} Winner : @${games.isWin.player.getNumber()}
${leftStyle} Dadu   : ${steps}x
${leftStyle} Total  : ${games.user.length} Player
${botStyle}
${b3}
${b3}
${mHeader("Player")}
${Object.entries(games.userColor)
  .map(([id, obj]) => `${leftStyle} ${obj.name} : @${id.getNumber()}`)
  .join("\n")}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} + 100
${leftStyle} Exp   : ${formatRupiah(profil.exp)} + 40
${leftStyle} Limit : ${formatRupiah(profil.limit)} + 40
${botStyle}
${b3}`;

        await add("exp", 40);
        await add("limit", 40);
        await add("coin", 100);
        delete EdogawaSenq.ularTangga[jid];
      }

      await sendMedia(image, txt);
    }
    break;

case "tebakff":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "biologi":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const soal = {
          biologi: EdogawaSenqBiologi,
          fisika: EdogawaSenqFisika,
          sejarah: EdogawaSenqSejarah,
          geografi: EdogawaSenqGeografi,
          kimia: EdogawaSenqKimia,
        };

        const result = soal[command]();

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "sejarah":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const soal = {
          biologi: EdogawaSenqBiologi,
          fisika: EdogawaSenqFisika,
          sejarah: EdogawaSenqSejarah,
          geografi: EdogawaSenqGeografi,
          kimia: EdogawaSenqKimia,
        };

        const result = soal[command]();

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "suitpvp":
    {
      try {
        if (!isGroup) return onlyGrup();
        let game = EdogawaSenq.suit?.[jid];
        if (game) return await sen(`@${game.user1.getNumber()} dan @${game.user2.getNumber()} sedang bermain suit di grub ini!`);
        if (!text) return await example("tag", "@senq");
        let target = await decode(text);
        if (!metadata[jid].participants.map((i) => i.lid).includes(target) || target === sender) return await sen(`Tolong tag seseorang yang berada di grub ini!`);

        EdogawaSenq.suit[jid] = {
          room: jid,
          user1: sender,
          user2: target,
          user: [sender, target],
          choice: {},
        };
        let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${sender.getNumber()}
${leftStyle} Player 2 : @${target.getNumber()}
${botStyle}
${b3}
${b3}
${topStyle} Rewards
${leftStyle} Coin  : +20
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
        let txtS = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${sender.getNumber()}
${leftStyle} Player 2 : @${target.getNumber()}
${botStyle}
${b3}
${b3}
${topStyle} Pilih
${leftStyle} .gunting
${leftStyle} .batu
${leftStyle} .kertas
${botStyle}
${b3}`;

        await sen(txtS, sender, false);
        await sen(txtS, target, false);
        await sen(txt);
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "gunting":
    {
      try {
        if (isGroup) return await sen(`Fitur ${command} hanya bisa di gunakan pada private chat!`);
        let [id, key] = Object.entries(EdogawaSenq.suit).find(([a, b]) => b.user.includes(sender));
        let game = EdogawaSenq.suit?.[id];
        if (!game) return await sen(`Untuk memilih ${command} kamu harus bermain suit dulu!`);
        if (!game.user.includes(sender)) return await sen(`Kamu tidak sedang bermain suit!, tunggu @${game.user[0].getNumber()} dan @${game.user[1].getNumber()} selesai bermain suit dulu!`);

        game.choice[sender] = command;

        if (Object.keys(game.choice).length === 1) {
          await sen(`Berhasil kamu telah memilih pilihan kamu!, sekarang tinggal @${game.user.exclude(sender)[0].getNumber()} untuk memilih ✅`);
        } else {
          let myChoose = game.choice[sender];
          let musuhChoose = game.choice[game.user.exclude(sender)[0]];

          if (myChoose == musuhChoose) {
            let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;
            let now = game.user.exclude(sender)[0];
            await add("exp", 2);
            await add("coin", 5);
            await add("limit", 2);
            await add("exp", 2, now);
            await add("coin", 5, now);
            await add("limit", 2, now);
            delete EdogawaSenq.suit[id];
            await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]]), txt, game.room);
          } else {
            if ((myChoose === "gunting" && musuhChoose === "kertas") || (myChoose === "batu" && musuhChoose === "gunting") || (myChoose === "kertas" && musuhChoose === "batu")) {
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${sender.getNumber()}
${botStyle}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5);
              await add("coin", 20);
              await add("limit", 5);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[sender]), txt, game.room);
            } else {
              let now = game.user.exclude(sender)[0];
              let pr = db.user[now];
              let txt = `${b3}
${topStyle} Suit Pvp
${leftStyle} Player 1 : @${game.user[0].getNumber()}
${leftStyle} Player 2 : @${game.user[1].getNumber()}
${leftStyle} Winners  : @${now.getNumber()}
${b3}
${b3}
${topStyle} Info
${leftStyle} Player 1 : ${game.choice[game.user[0]]}
${leftStyle} Player 2 : ${game.choice[game.user[1]]}
${leftStyle} Winners  : Draw
${botStyle}
${b3}
${b3}
${topStyle}Rewards
${leftStyle} Coin  : +5
${leftStyle} Exp   : +2
${leftStyle} Limit : +2
${botStyle}
${b3}`;

              await add("exp", 5, now);
              await add("coin", 20, now);
              await add("limit", 5, now);
              delete EdogawaSenq.suit[id];
              await sendMedia(await drawSuit(game.choice[game.user[0]], game.choice[game.user[1]], game.choice[now]), txt, game.room);
            }
          }
        }
      } catch (e) {
        await sen(e.message);
      }
    }
    break;

case "geografi":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const soal = {
          biologi: EdogawaSenqBiologi,
          fisika: EdogawaSenqFisika,
          sejarah: EdogawaSenqSejarah,
          geografi: EdogawaSenqGeografi,
          kimia: EdogawaSenqKimia,
        };

        const result = soal[command]();

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "chess-cv":
    {
      try {
        let mode = Object.keys(chessMode);
        let myExif = Object.values(EdogawaSenq.catur).filter((i) => i.user.includes(sender));
        if (myExif.length == 0) return await sen("Kalau mau mengubah pion, kamu harus bermain catur terlebih dahulu!");
        if (myExif[0].giliran !== sender) return await sen("bukan giliran kamu");
        let [from, cv] = text.split(" ").map((i) => i.trim());
        let validCv = ["Q", "R", "B", "N"];
        let xCv = charToX(from.split("")[0]);
        let yCv = fixNumber(from.split("")[1]);
        let id = myExif[0].putih == sender ? 1 : 2;
        if (myExif[0].board[yCv][xCv] !== `P${id}`) return await sen(`Kamu hanya bisa mengubah pion anak [ ${getUnicodePiece("P" + id)} ] !!`);
        let isChange = cekPionDiUjung(myExif[0].board, id);
        let sections = [];
        let txtCv = "";

        isChange.forEach((i) => {
          let xC = fixNumber(i.split(",")[0]);
          let yC = fixNumber(i.split(",")[1]);
          let piece = `P${id}`;

          txtCv += `\n${leftStyle} ${prefix}chess-cv ${xToChar(xC)}${yC} Q [ ${getUnicodePiece(`Q${id}`)} ]`;
          txtCv += `\n${leftStyle} ${prefix}chess-cv ${xToChar(xC)}${yC} R [ ${getUnicodePiece(`R${id}`)} ]`;
          txtCv += `\n${leftStyle} ${prefix}chess-cv ${xToChar(xC)}${yC} B [ ${getUnicodePiece(`B${id}`)} ]`;
          txtCv += `\n${leftStyle} ${prefix}chess-cv ${xToChar(xC)}${yC} N [ ${getUnicodePiece(`N${id}`)} ]`;

          let rows = [
            {
              header: `${"> "} Convert ${getUnicodePiece(piece)} To ${getUnicodePiece("Q" + id)}`,
              title: `- Ubah pion ${getUnicodePiece(piece)} [ ${xToChar(xC)}${yC} ] ke ${getUnicodePiece("Q" + id)}`,
              id: `.chess-cv ${xToChar(xC)}${yC} Q`,
            },
            {
              header: `${"> "} Convert ${getUnicodePiece(piece)} To ${getUnicodePiece("R" + id)}`,
              title: `- Ubah pion ${getUnicodePiece(piece)} [ ${xToChar(xC)}${yC} ] ke ${getUnicodePiece("R" + id)}`,
              id: `.chess-cv ${xToChar(xC)}${yC} R`,
            },
            {
              header: `${"> "} Convert ${getUnicodePiece(piece)} To ${getUnicodePiece("B" + id)}`,
              title: `- Ubah pion ${getUnicodePiece(piece)} [ ${xToChar(xC)}${yC} ] ke ${getUnicodePiece("B" + id)}`,
              id: `.chess-cv ${xToChar(xC)}${yC} B`,
            },
            {
              header: `${"> "} Convert ${getUnicodePiece(piece)} To ${getUnicodePiece("N" + id)}`,
              title: `- Ubah pion ${getUnicodePiece(piece)} [ ${xToChar(xC)}${yC} ] ke ${getUnicodePiece("N" + id)}`,
              id: `.chess-cv ${xToChar(xC)}${yC} N`,
            },
          ];

          sections.push({
            title: `Convert ${getUnicodePiece(piece)} [ ${xToChar(xC)}${yC} ]`,
            highlight_label: "",
            rows,
          });
        });

        if (!validCv.includes(cv)) {
          let brd = await drawBoardChess(myExif[0].board);

          let txtChess = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${myExif[0].putih.getNumber()}
${leftStyle} Hitam   : @${myExif[0].hitam.getNumber()}
${leftStyle} Giliran : @${myExif[0].giliran.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Info")}
Kamu Harus mengubah Pion yg di ujung papan!, pion bisa di ubah ke ${getUnicodePiece("Q" + id)}, ${getUnicodePiece("R" + id)}, ${getUnicodePiece("B" + id)}, ${getUnicodePiece("N" + id)}
${b3}
${b3}
${mHeader("Tutorial")}${txtCv}
${lines}
${b3}`;
          await sendMedia(brd, txtChess, jid, [
            {
              buttonId: "action",
              buttonText: {
                displayText: "",
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Convert Piece",
                  sections,
                }),
              },
            },
          ]);
          return;
        }

        let cvPiece = `${cv.toUpperCase()}${id}`;
        EdogawaSenq.catur[myExif[0].room].board[yCv][xCv] = cvPiece;

        let brdN = await drawBoardChess(myExif[0].board);
        let txtYess = `${b3}
${mHeader("Chess")}
${leftStyle} Putih   : @${myExif[0].putih.getNumber()}
${leftStyle} Hitam   : @${myExif[0].hitam.getNumber()}
${leftStyle} Giliran : @${myExif[0].giliran.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Info")}
Sukses mengubah Pion [ ${getUnicodePiece("P" + id)} ] di posisi ${from} ke ${cv} [ ${getUnicodePiece(cvPiece)} ]
${lines}
${b3}`;
        await sendMedia(
          brdN,
          txtYess,
          jid,
          getValidButtonList({
            title: "Move Piece",
            secTitle: "Gerakan Pion",

            rows: Object.keys(getAllValidMoves(myExif[0].board, 1)).map((i) => {
              let xMy = fixNumber(i.split(",")[0]);
              let yMy = fixNumber(i.split(",")[1]);
              let myPiece = myExif[0].board[yMy][xMy];
              return [`${"> "} Move ${xToChar(xMy)}${yMy} [ ${getUnicodePiece(myPiece)} ]`, `- Pilih ini untuk menggerakan pion di posisi ${xToChar(xMy)}${yMy} ${getUnicodePiece(myPiece)}`, `.move ${xToChar(xMy)}${yMy}`];
            }),
          })
        );
      } catch (e) {
        sen(`Eror fitur ${command}\nss eror ini kirim ke swnq klo ga bot bakal mati hahahaha\n\n${e.message}`);
      }
    }
    break;

case "tebakhero":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebaklogo":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebakkata":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/kata`);

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "susunkata":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/${command}`);

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebaklove":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebaklove) return await sen("Masih ada pertanyaan tebak love yang belum dijawab");

      function func() {
        const emojiList = ["🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "💘", "💝", "💓", "💗", "💞", "💕", "❣️"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Love 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Love 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebaklove[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebaklove) return;
          if (!EdogawaSenq.tebaklove[jid]) return;
          if (EdogawaSenq.tebaklove[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Love
${botStyle}
${b3}
${b3}
${topStyle} List Love 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebaklove[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakarah":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakarah) return await sen("Masih ada pertanyaan tebak arah yang belum dijawab");

      function func() {
        const emojiList = ["➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↪️", "↩️", "⤴️", "⤵️", "🔃", "🔄", "↔️", "↕️"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Arah 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Arah 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakarah[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakarah) return;
          if (!EdogawaSenq.tebakarah[jid]) return;
          if (EdogawaSenq.tebakarah[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Arah
${botStyle}
${b3}
${b3}
${topStyle} List Arah 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakarah[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakbola":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakbola) return await sen("Masih ada pertanyaan tebak bola yang belum dijawab");

      function func() {
        const emojiList = ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🎱"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Bola 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Bola 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakbola[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakbola) return;
          if (!EdogawaSenq.tebakbola[jid]) return;
          if (EdogawaSenq.tebakbola[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Bola
${botStyle}
${b3}
${b3}
${topStyle} List Bola 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakbola[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakbuku":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakbuku) return await sen("Masih ada pertanyaan tebak buku yang belum dijawab");

      function func() {
        const emojiList = ["📓", "📔", "📒", "📕", "📗", "📘", "📙"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Buku 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Buku 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakbuku[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakbuku) return;
          if (!EdogawaSenq.tebakbuku[jid]) return;
          if (EdogawaSenq.tebakbuku[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Buku
${botStyle}
${b3}
${b3}
${topStyle} List Buku 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakbuku[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tictactoe":
    {
      if (EdogawaSenq.tictactoe?.[jid]) return await sen(`Sedang ada users yang bermain tictactoe di grub ini!`);
      let randomTag = isGroup ? pickRandom(metadata[jid].participants).lid.getNumber() : "";
      if (!text) return await example("@tag", "@senq");

      let tags = await decode(text);
      if (!getMetadata().allParticipantsLid.includes(tags)) return await sen(`Tolong tag seseorang yang ada di grub ini!`);
      if (tags === sender) return await sen(`Kamu tidak bisa bermain dengan kamu sendiri!`);

      let txt = `${b3}
${mHeader("Tic Tac Toe")}
${leftStyle} User 1  : [ X ] @${sender.getNumber()}
${leftStyle} User 2  : [ O ] @${tags.getNumber()}
${leftStyle} Giliran : @${sender?.getNumber()}
${botStyle}
${b3}
${b3}
${mHeader("rewards")}
${leftStyle} Coin  : +20
${leftStyle} Limit : +5
${leftStyle} Exp   : +5
${botStyle}
${b3}
Ketik .apply angkanya untuk memilih angka pada board`;

      let image = drawBoardTtc([0, 0, 0, 0, 0, 0, 0, 0, 0]);

      await sendMedia(image, txt);
      EdogawaSenq.tictactoe[jid] = {
        user1: sender,
        user2: tags,
        user: [sender, tags],
        turn: random(0, 1) === 1 ? sender : tags,
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      };
    }
    break;

case "chess-end":
    {
      try {
        let myExif = Object.values(EdogawaSenq.catur).filter((i) => i.user.includes(sender));
        if (myExif.length == 0) return await sen("Kalau mau mengakhiri game catur kamu harus bermain catur terlebih dahulu!");
        let txt = `${b3}
${mHeader("Chess")}
${leftStyle} Putih    : @${myExif[0].putih.getNumber()}
${leftStyle} Hitam    : ${Object.keys(chessMode).includes(myExif[0].hitam) ? "Computer " + myExif[0].hitam : "@" + myExif[0].hitam.getNumber()}
${leftStyle} Ended By : @${sender.getNumber()}
${lines}
${b3}
${b3}
${mHeader("Missing Piece")}
${leftStyle} Putih : ${getCapturedPieces(myExif[0].board)
          .putih.map((i) => getUnicodePiece(i))
          .join(" ")}
${leftStyle} Hitam : ${getCapturedPieces(myExif[0].board)
          .hitam.map((i) => getUnicodePiece(i))
          .join(" ")}
${lines}
${b3}`;

        delete EdogawaSenq.catur[myExif[0].room];

        await sen(txt);
      } catch (e) {
        sen(`Eror fitur ${command}\nss eror ini kirim ke swnq klo ga bot bakal mati hahahaha\n\n${e.message}`);
      }
    }
    break;

case "matematika":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq.math?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const result = EdogawaSenqMath();
        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${b3}
${b3}
${mHeader("Soal")}
${result.soal || "-"}
${lines}
${b3}
${b3}
${mHeader("Jawaban")}
${result.jawaban || "-"}
${lines}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq.math[jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              text: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq.math) return;
            if (!EdogawaSenq.math[jid]) return;
            if (EdogawaSenq.math[jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  text: txt,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebakmobil":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakmobil) return await sen("Masih ada pertanyaan tebak mobil yang belum dijawab");

      function func() {
        const emojiList = ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Mobil 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Mobil 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakmobil[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakmobil) return;
          if (!EdogawaSenq.tebakmobil[jid]) return;
          if (EdogawaSenq.tebakmobil[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Mobil
${botStyle}
${b3}
${b3}
${topStyle} List Mobil 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakmobil[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakwaktu":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakwaktu) return await sen("Masih ada pertanyaan tebak waktu yang belum dijawab");

      function func() {
        const emojiList = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Waktu 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Jam 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakwaktu[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakwaktu) return;
          if (!EdogawaSenq.tebakwaktu[jid]) return;
          if (EdogawaSenq.tebakwaktu[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Waktu
${botStyle}
${b3}
${b3}
${topStyle} List Jam 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakwaktu[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakwarna":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakwarna) return await sen("Masih ada pertanyaan tebak warna yang belum dijawab");

      function func() {
        const emojiList = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛", "⬜", "🟫"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Warna 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Warna 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakwarna[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakwarna) return;
          if (!EdogawaSenq.tebakwarna[jid]) return;
          if (EdogawaSenq.tebakwarna[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Warna
${botStyle}
${b3}
${b3}
${topStyle} List Warna 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakwarna[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "tebakbulan":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakbulan) return await sen("Masih ada pertanyaan tebak bulan yang belum dijawab");

      function func() {
        const emojiList = ["🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Bulan 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Bulan 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakbulan[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakbulan) return;
          if (!EdogawaSenq.tebakbulan[jid]) return;
          if (EdogawaSenq.tebakbulan[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Bulan
${botStyle}
${b3}
${b3}
${topStyle} List Bulan 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakbulan[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "ulartangga":
    {
      if (jid in EdogawaSenq.ularTangga) return await sen(`Ada yang bermain Ular tangga di grub ini, tunggu mereka selesai atau ikut dengaj ketik .ular_join `);
      if (!text) return await example("tag1, tag2", "@senq");
      let users = text?.includes(",") ? await Promise.all(text.split(",").map(async (i) => await decode(i.clear()))) : [await decode(text.clear())];

      let userOnGrub = metadata[jid].participants.map((i) => i.lid); // ambil semua ID member grup

      if ([...new Set(users)].length > 4) return await sen(`Maksimal tag 4 orang untuk bermain total 5 player!!`);

      let notMember = users.find((user) => !userOnGrub.includes(user));
      // if (notMember)
      //   return await sen(
      //     `@${notMember.getNumber()} bukan member grub ini!, tolong tag orang yang ada di grub ini`
      //   );

      let user = [sender, ...users];

      function generateUserColors(users) {
        const colorPool = [
          { name: "merah  ", code: "#b60000" },
          { name: "hijau  ", code: "#009f00" },
          { name: "biru   ", code: "#00afb4" },
          { name: "kuning ", code: "#a9a900" },
          { name: "ungu   ", code: "#610061" },
        ];

        if (users.length > colorPool.length) {
          throw new Error("Jumlah user melebihi jumlah warna unik yang tersedia!");
        }

        const shuffled = [...colorPool].sort(() => Math.random() - 0.5);

        const userColor = {};
        users.forEach((lid, idx) => {
          userColor[lid] = {
            name: shuffled[idx].name.capitalize(),
            code: shuffled[idx].code,
          };
        });

        return userColor;
      }

      let boardList = fs.readdirSync("./assets/image/snakers/");
      let boardKey1 = random(1, boardList.length / 2);
      let boardKey = 1;
      let boardImage = `./assets/image/snakers/board${boardKey}.png`;
      let boardJson = JSON.parse(fs.readFileSync(`./assets/image/snakers/board${boardKey}.json`));
      let userColor = generateUserColors(user);

      boardJson[9][0] = user.join(",");

      EdogawaSenq.ularTangga[jid] = {
        board: boardJson,
        bgPath: boardImage,
        user,
        userColor,
        owner: sender,
        trails: [],
        isWin: {
          status: false,
          player: "",
        },
        giliran: user[0],
      };

      let txt = `${b3}
${mHeader("Ular Tangga")}
${leftStyle} Giliran : @${user[0].getNumber()}
${botStyle}
${b3}
${b3}
${mHeader("Player")}
${Object.entries(userColor)
  .map(([id, obj]) => `${leftStyle} ${obj.name} : @${id.getNumber()}`)
  .join("\n")}
${botStyle}
${b3}
${b3}
${mHeader("Info")}
${leftStyle} .lempar 
${leftStyle} .join-ulartangga 
${leftStyle} .left-ulartangga 
${leftStyle} .end-ulartangga 
${botStyle}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : +100
${leftStyle} Exp   : +40
${leftStyle} Limit : +40
${botStyle}
${b3}
`;

      let image = await drawBoardUlarTangga(boardJson, userColor, boardImage);

      console.log(image);

      await sendMedia(image, txt);
    }
    break;

case "tebakgambar":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "lempar-dadu":
    {
      if (!EdogawaSenq.ularTangga?.[jid]?.user?.includes(sender)) return await sen(`kalau mau lempar dadu harus bermain ular tangga dlu`);

      let games = EdogawaSenq.ularTangga[jid];
      if (games.giliran !== sender) return await sen(`Bukan giliran kamu!!, sekarang giliran si @${games.giliran.getNumber()}`);

      let steps2 = 1;
      let steps = random(1, 6);
      games = movePlayer(games, sender, steps);

      let image = await drawBoardUlarTangga(games.board, games.userColor, games.bgPath, games.trails);

      games.trails = [];

      let txt;
      if (!games.isWin.status) {
        txt = `${b3}
${mHeader("Ular Tangga")}
${leftStyle} Giliran : @${games.giliran.getNumber()}
${leftStyle} Dadu    : ${steps}x
${botStyle}
${b3}
${b3}
${mHeader("Player")}
${Object.entries(games.userColor)
  .map(([id, obj]) => `${leftStyle} ${obj.name} : @${id.getNumber()}`)
  .join("\n")}
${botStyle}
${b3}`;
      } else {
        txt = `${b3}
${mHeader("Ular Tangga")}
${leftStyle} Winner : @${games.isWin.player.getNumber()}
${leftStyle} Dadu   : ${steps}x
${leftStyle} Total  : ${games.user.length} Player
${botStyle}
${b3}
${b3}
${mHeader("Player")}
${Object.entries(games.userColor)
  .map(([id, obj]) => `${leftStyle} ${obj.name} : @${id.getNumber()}`)
  .join("\n")}
${b3}
${b3}
${mHeader("Rewards")}
${leftStyle} Coin  : ${formatRupiah(profil.coin)} + 100
${leftStyle} Exp   : ${formatRupiah(profil.exp)} + 40
${leftStyle} Limit : ${formatRupiah(profil.limit)} + 40
${botStyle}
${b3}`;

        await add("exp", 40);
        await add("limit", 40);
        await add("coin", 100);
        delete EdogawaSenq.ularTangga[jid];
      }

      await sendMedia(image, txt);
    }
    break;

case "tebakbendera":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebakaplikasi":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (EdogawaSenq?.[command]?.[jid]) return sen(`Maaf kak masih ad pertanyaan ${command} yang belum di jawab`);

        const {
          data: { result },
        } = await axios.get(`${apiv5}/api/v1/game/tebak/${command.replace("tebak", "")}`);

        if (command === "tebakbendera") result.jawaban = result.name;
        if (command === "tebakhewan") result.jawaban = result.title;
        if (command === "tebakaplikasi") result.img = result.image;

        let txt = `${b3}
${mHeader(command)}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        let txt2 = `${b3}
${mHeader("Time Out")}
${leftStyle} Game     : ${command}
${leftStyle} From     : @${sender.getNumber()}
${leftStyle} Time Out : 60s
${lines}
${mHeader("Deskripsi")}
${result.deskripsi || "-"}
${lines}
${mHeader("Rewards")}
${leftStyle} Coin  : x5
${leftStyle} Exp   : x7
${leftStyle} Limit : x2
${lines}
${b3}`;
        EdogawaSenq[command][jid] = [
          await EdogawaSenq.sendMessage(
            jid,
            {
              image: { url: result.img },
              caption: txt,
            },
            { quoted: qFake }
          ),
          result,
          setTimeout(async () => {
            if (!EdogawaSenq[command]) return;
            if (!EdogawaSenq[command][jid]) return;
            if (EdogawaSenq[command][jid][1].jawaban === result.jawaban) {
              await EdogawaSenq.sendMessage(
                jid,
                {
                  image: { url: result.img },
                  caption: txt2,
                },
                { quoted: qFake }
              );
            }
          }, 60000),
        ];
      } catch (e) {
        sen(e.message);
      }
    }
    break;

case "tebakprestasi":
    {
      if (!isGroup) return onlyGrup();
      if (jid in EdogawaSenq.tebakprestasi) return await sen("Masih ada pertanyaan tebak prestasi yang belum dijawab");

      function func() {
        const emojiList = ["🥇", "🥈", "🥉", "🏅", "🎖️", "🏆"];
        const jawaban = emojiList[Math.floor(Math.random() * emojiList.length)];
        const sisa = emojiList.filter((e) => e !== jawaban);
        let soal = sisa.sort(() => Math.random() - 0.5).slice(0, 5);
        soal.push(jawaban);
        soal = soal.sort(() => Math.random() - 0.5);
        return { soal: soal.join(" "), jawaban };
      }

      let res = func();

      let caption = `${b3}
${topStyle} Tebak Prestasi 
${leftStyle} Durasi : 60s
${botStyle}
${b3}
${b3}
${topStyle} List Prestasi 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}
`;
      EdogawaSenq.tebakprestasi[jid] = [
        await sen(caption, jid, false),
        res,
        setTimeout(async () => {
          if (!EdogawaSenq.tebakprestasi) return;
          if (!EdogawaSenq.tebakprestasi[jid]) return;
          if (EdogawaSenq.tebakprestasi[jid][1].jawaban === res.jawaban) {
            let p = `${b3}
${topStyle} Timed Out 
${leftStyle} Jawaban : ${res.jawaban.capitalize()}
${leftStyle} Durasi  : 60s
${leftStyle} Games   : Tebak Prestasi
${botStyle}
${b3}
${b3}
${topStyle} List Prestasi 
${res.soal}
${botStyle}
${b3}
${b3}
${topStyle} Rewards 
${leftStyle} Coin  : +10
${leftStyle} Exp   : +5
${leftStyle} Limit : +5
${botStyle}
${b3}`;
            (await sen(p), delete EdogawaSenq.tebakprestasi[jid]);
          }
        }, 60000),
      ];
    }
    break;

case "end-ulartangga":
    {
      if (!EdogawaSenq.ularTangga?.[jid]) return await sen("Belum ada game ular tangga di grub ini!, silahkan buat game nya terlebih dahulu!.");
      if (EdogawaSenq.ularTangga[jid].owner !== sender) return await sen(`Hanya @${EdogawaSenq.ularTangga[jid].owner.getNumber()} yang bisa mengapus game ular tangga di grub ini!!`);
      delete EdogawaSenq.ularTangga[jid];
      return await sen("Berhasil menghapus game ular tangga di grub ini ✅", jid, false);
    }
    break;

case "join-ulartangga":
    {
      if (!EdogawaSenq.ularTangga?.[jid]) return await sen("Belum ada game ular tangga di grub ini!");
      if (EdogawaSenq.ularTangga[jid].user.length > 4) return await sen(`Player penuh! silahkan tunggu mereka selesai atau ada yg keluar!!`);
      if (EdogawaSenq.ularTangga[jid].user.includes(sender)) return await sen("Kamu sudah masuk ke game ular tangga!.");

      EdogawaSenq.ularTangga[jid].user.push(sender);

      const colorPool = [
        { name: "merah  ", code: "#FF0000" },
        { name: "hijau  ", code: "#00FF00" },
        { name: "biru   ", code: "#0000FF" },
        { name: "kuning ", code: "#FFFF00" },
        { name: "oranye ", code: "#FFA500" },
        { name: "ungu   ", code: "#800080" },
      ];

      const usedColors = Object.values(EdogawaSenq.ularTangga[jid].userColor).map((c) => c.code);
      const availableColors = colorPool.filter((c) => !usedColors.includes(c.code));

      if (!availableColors.length) {
        EdogawaSenq.ularTangga[jid].user.pop();
        return await sen("Warna habis, tidak bisa tambah player baru!", jid, false);
      }

      const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];
      EdogawaSenq.ularTangga[jid].userColor[sender] = {
        name: newColor.name,
        code: newColor.code,
      };

      const startX = 0;
      const startY = 9;

      let cell = EdogawaSenq.ularTangga[jid].board[startY][startX];

      if (!cell || cell === "") {
        EdogawaSenq.ularTangga[jid].board[startY][startX] = sender;
      } else {
        EdogawaSenq.ularTangga[jid].board[startY][startX] = cell + "," + sender;
      }

      return await sen("Berhasil bergabung ke game ular tangga di grub ini ✅");
    }
    break;

case "left-ulartangga":
    {
      if (!EdogawaSenq.ularTangga?.[jid]) return await sen("Belum ada game ular tangga di grub ini!, silahkan buat game nya terlebih dahulu!.");

      const game = EdogawaSenq.ularTangga[jid];
      const index = game.user.indexOf(sender);
      if (index === -1) return await sen("Kamu belum memasuki game ular tangga pada grub ini!!");

      game.user.splice(index, 1);

      if (game.userColor?.[sender]) {
        delete game.userColor[sender];
      }

      if (game.giliran === sender) {
        if (game.user.length > 0) {
          game.giliran = game.user[index % game.user.length];
        } else {
          delete EdogawaSenq.ularTangga[jid];
          return await sen("Semua pemain sudah keluar, game ular tangga dihapus otomatis.");
        }
      }

      return await sen("Berhasil keluar dari game ular tangga di grub ini!. ✅");
    }
    break;

case "ai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/chatbot?text=${encodeURIComponent(text)}`);
        await sena(data.answer);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "gpt5":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("pertanyaan");

        const waktu = new Date().toLocaleString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const url = `https://api.elrayyxml.web.id/api/ai/chatgpt?text=${encodeURIComponent(text)}`;

        const response = await axios.get(url, { timeout: 45000 });

        if (!response.data?.status) return sen("Server api sedang offline");

        const result = response.data.result;
        let jawaban = result?.text || "Tidak ada jawaban.";

        let txt = `Gpt 5 (${waktu}) : ${jawaban}`;

        if (result?.citations && Array.isArray(result.citations) && result.citations.length > 0) {
          txt += `Referensi: \n`;
          result.citations.slice(0, 3).forEach((cite, idx) => {
            if (cite.title) {
              txt += `${idx + 1}. ${cite.title}\n`;
            }
          });
        }

        await EdogawaSenq.sendMessage(jid, { text: txt });
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "felo":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/felo?q=${encodeURIComponent(text)}`);
        await sena(data.result.answer);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "kimi":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/kimi?text=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "meta":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/metaai?q=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "zenz":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/zenz?text=${encodeURIComponent(text)}`);
        await sena(data.result.reply);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "metai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/metaai?q=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "shion":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/shion?text=${encodeURIComponent(text)}`);
        await sena(data.result.content);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "gemini":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/gemini?text=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "aimath":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/math?text=${encodeURIComponent(text)}`);
        await sena(data.result.reply);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "claila":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/claila?text=${encodeURIComponent(text)}`);
        await sena(data.result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "calude":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/claude?text=${encodeURIComponent(text)}`);
        await sena(data.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "feloai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/felo?q=${encodeURIComponent(text)}`);
        await sena(data.result.answer);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "hammer":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/hammer?text=${encodeURIComponent(text)}`);
        await sena(data.result.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "kimiai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/kimi?text=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "lumina":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/luminai?text=${encodeURIComponent(text)}`);
        await sena(data.result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "zenzau":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/zenz?text=${encodeURIComponent(text)}`);
        await sena(data.result.reply);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "upscale":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/upscale?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil upscale image ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "fixfoto":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/restore?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil memperbaiki foto rusak ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "hapusbg":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);

        await sendMedia(`${apiv2}/api/tools/removebg?url=${url}`, "berhasil menghapus background image ✅");
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "enhance":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/enhance?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil enhance image ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "bibleai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("ikan yg ngambang?");
      try {
        const { data } = await axios.get(`${apiv3}/ai/bible?q=${encodeURIComponent(text)}`);
        await sena(data.result.answer);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "chatgpt":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/chatgpt?prompt=bales+user+dengan+bahasa+Indonesia+&content=${encodeURIComponent(text)}`);
        await sena(data.result.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "luminai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/luminai?text=${encodeURIComponent(text)}`);
        await sena(data.result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "shionai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/shion?text=${encodeURIComponent(text)}`);
        await sena(data.result.content);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "tofigure":
    {
      try {
        const allEndpoints = {
          "1": {
            url: "https://api-faa.my.id/faa/tofigura?url=",
            name: "Figura Style V1",
            description: "Efek figura versi 1 - Classic Style",
          },
          "2": {
            url: "https://api-faa.my.id/faa/tofigurav2?url=",
            name: "Figura Style V2",
            description: "Efek figura versi 2 - Enhanced Style",
          },
          "3": {
            url: "https://api-faa.my.id/faa/tofigurav3?url=",
            name: "Figura Style V3",
            description: "Efek figura versi 3 - Premium Style",
          },
        };

        if (!media) return onlyImage();
        let version = text?.trim() || "1";
        if (!allEndpoints[version]) version = "1";
        const apiInfo = allEndpoints[version];

        const buff = await downloadToBuffer(media);

        const catboxUrl = await imageToUrl(buff);

        const apiUrl = `${apiInfo.url}${encodeURIComponent(catboxUrl)}`;

        const result = await getBuffer(apiUrl);

        await sendMedia(result, "Berhasil mengubah karakter ke figure ✅");
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "warnaihp":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/colorizer?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil mewarnai gambar hitam putih ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "bnwcolor":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/colorizer?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil mewarnai gambar hitam putih ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "restored":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/restore?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil memperbaiki foto rusak ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "removebg":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);

        await sendMedia(`${apiv2}/api/tools/removebg?url=${url}`, "berhasil menghapus background image ✅");
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "text2img":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("prompt", "gambar kan anime");
      try {
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/text2img?prompt=${encodeURIComponent(text)}`);
        if (!data.status) return sen("hasil tidak di temukan!");

        let txt = `${b3}
${mHeader("Text to Image")}
${leftStyle} Width    : ${data.result.width}
${leftStyle} Height   : ${data.result.height}
${leftStyle} Mimetype : ${data.result.mimetype}
${leftStyle} Created  : ${data.result.created}
${lines}
${b3}`;

        await sendMedia(data.result.download, txt);
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "clailaai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/claila?text=${encodeURIComponent(text)}`);
        await sena(data.result);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "caludeai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/claude?text=${encodeURIComponent(text)}`);
        await sena(data.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "geminiai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/gemini?text=${encodeURIComponent(text)}`);
        await sena(data.result.response);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "hammerai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/hammer?text=${encodeURIComponent(text)}`);
        await sena(data.result.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "colorizer":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/colorizer?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil mewarnai gambar hitam putih ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "hpcoloring":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/colorizer?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil mewarnai gambar hitam putih ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "powerbrand":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/powerbrain?text=${encodeURIComponent(text)}`);
        await sena(data.result.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "benerinfoto":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/restore?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil memperbaiki foto rusak ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "upscalefoto":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/upscale?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil upscale image ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "enhancefoto":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/enhance?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil enhance image ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "perbaikifoto":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/image/.test(mime)) return onlyImage();
      try {
        let medi = await downloadToBuffer(media);
        let url = await imageToUrl(medi);
        let { data } = await axios.get(`${apiv5}/api/v1/artificial/pxpic/restore?url=${url}`);
        if (!data.status) return await sen("hasil tidak di temukan");
        await sendMedia(data.result, "berhasil memperbaiki foto rusak ✅");
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "powerbrandai":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("halo");
      try {
        const { data } = await axios.get(`${apiv3}/ai/powerbrain?text=${encodeURIComponent(text)}`);
        await sena(data.result.message);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "chopilot-think":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      try {
        if (!text) return example("siapa kamu?");

        const url = `https://api.yupra.my.id/api/ai/copilot-think?text=${encodeURIComponent(text)}`;
        const { data } = await axios.get(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; YPBot)",
          },
        });

        if (!data?.status) throw new Error("API Error");

        const res = data.result || "Tidak ada jawaban.";

        await EdogawaSenq.sendMessage(jid, { text: res }, { quoted: m });
        await reduceLimit();
      } catch (e) {
        await handleError(command, e);
      }
    }
    break;

case "ban":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.blacklist.includes(user)) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah ada di blacklist!`);
      db.blacklist.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah di blacklist ✅`);
      saveDb();
    }
    break;

case "upsw":
    {
      if (!isOwner) return onlyOwner();
      if (!qmsg) return await sen("gunakan command tersebut sambil reply pesan!");
      let list = Object.values(metadata)
        .map((i) => i.participants)
        .flat()
        .map((i) => i.id);

      if (qType === "imageMessage") {
        EdogawaSenq.sendMessage(
          "status@broadcast",
          {
            image: await downloadToBuffer(media),
            caption: qBody || "",
          },
          {
            backgroundColor: "#ff00ff",
            font: 2,
            statusJidList: list,
            broadcast: true,
          }
        );
      } else if (qType === "videoMessage") {
        EdogawaSenq.sendMessage(
          "status@broadcast",
          {
            video: await downloadToBuffer(media),
            caption: qBody || "",
          },
          {
            backgroundColor: "#ff00ff",
            font: 2,
            statusJidList: list,
            broadcast: true,
          }
        );
      } else if (qType === "conversation") {
        EdogawaSenq.sendMessage(
          "status@broadcast",
          {
            text: qBody,
          },
          {
            backgroundColor: "#ff00ff",
            font: 2,
            statusJidList: list,
            broadcast: true,
          }
        );
      } else {
        await sen("pesan tidak di ketahui");
      }
    }
    break;

case "idgc":
    {
      if (!text) return example("link gc");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      const match = text.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/);
      let res = match ? match[1] : undefined;
      if (!res) return example("link gc");

      let data = await EdogawaSenq.groupGetInviteInfo(res);
      await senCopy(`${data.id}`, "Copy Id", data.id);
      reduceLimit();
    }
    break;

case "blon":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.blacklist.includes(user)) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah ada di blacklist!`);
      db.blacklist.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah di blacklist ✅`);
      saveDb();
    }
    break;

case "self":
    {
      if (!isOwner) return onlyOwner();
      db.mode = "self";
      saveDb();
      await sen("Berhasil mengubah mode bot ke mode self ✅");
    }
    break;

case "mute":
    {
      if (!isGroup) return onlyGrup();
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.mute.push(jid);
        saveDb();
        await sen("Berhasil menyalakan mute pada grub ✅");
      } else if (text.clear() === "off") {
        db.mute = db.mute.filter((i) => i !== jid);
        saveDb();
        await sen("Berhasil mematikan mute pada grub ✅");
      } else return example("on / off");
    }
    break;

case "ping":
    {
      try {
        const ping = performance.now() - pingMs;
        const uptime = process.uptime();
        const uptimeFormatted = msToTime(uptime * 1000);

        const cpus = os.cpus();
        const cpuModel = cpus[0]?.model || "Unknown CPU";
        const cpuSpeed = cpus[0]?.speed || 0;
        const cpuCores = cpus.length;

        const totalMem = os.totalmem() / 1024 / 1024;
        const freeMem = os.freemem() / 1024 / 1024;
        const usedMem = totalMem - freeMem;

        const platform = os.platform();
        const nodeVer = process.version;
        const arch = os.arch();

        const txt = `${b3}
${mHeader("Ping Info")}
${leftStyle} Delay : ${ping.toFixed(2)} ms
${lines}
${b3}
${b3}
${mHeader("System Info")}
${leftStyle} OS      : ${platform} (${arch})
${leftStyle} CPU     : ${cpuModel}
${leftStyle} Core    : ${cpuCores} @ ${cpuSpeed}MHz
${leftStyle} RAM     : ${usedMem.toFixed(2)}MB / ${totalMem.toFixed(2)}MB
${leftStyle} Node js : ${nodeVer}
${lines}
${b3}
${b3}
${mHeader("Bot Info")}
${leftStyle} Bot Uptime   : ${uptimeFormatted}
${leftStyle} Memory Usage : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
${lines}
${b3}`;

        await sen(txt);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "getsw":
    {
      if (!isOwner) return onlyOwner();
      if (!media) return await sen("Bales status orang dengan pesan .getsw, hasil akan terkirim ke nomor bot!");
      await sendMedia(await downloadToBuffer(media), `Berhasil Memgambil status punya ${searchJid(qSender).getNumber()} ✅`, botNumberJid);
    }
    break;

case "unban":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");
      if (!db.blacklist.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum di blacklist!`);
      db.blacklist = db.blacklist.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan user yang di blacklist ✅`);
      saveDb();
    }
    break;

case "bloff":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");
      if (!db.blacklist.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum di blacklist!`);
      db.blacklist = db.blacklist.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan user yang di blacklist ✅`);
      saveDb();
    }
    break;

case "speed":
    {
      try {
        const ping = performance.now() - pingMs;
        const uptime = process.uptime();
        const uptimeFormatted = msToTime(uptime * 1000);

        const cpus = os.cpus();
        const cpuModel = cpus[0]?.model || "Unknown CPU";
        const cpuSpeed = cpus[0]?.speed || 0;
        const cpuCores = cpus.length;

        const totalMem = os.totalmem() / 1024 / 1024;
        const freeMem = os.freemem() / 1024 / 1024;
        const usedMem = totalMem - freeMem;

        const platform = os.platform();
        const nodeVer = process.version;
        const arch = os.arch();

        const txt = `${b3}
${mHeader("Ping Info")}
${leftStyle} Delay : ${ping.toFixed(2)} ms
${lines}
${b3}
${b3}
${mHeader("System Info")}
${leftStyle} OS      : ${platform} (${arch})
${leftStyle} CPU     : ${cpuModel}
${leftStyle} Core    : ${cpuCores} @ ${cpuSpeed}MHz
${leftStyle} RAM     : ${usedMem.toFixed(2)}MB / ${totalMem.toFixed(2)}MB
${leftStyle} Node js : ${nodeVer}
${lines}
${b3}
${b3}
${mHeader("Bot Info")}
${leftStyle} Bot Uptime   : ${uptimeFormatted}
${leftStyle} Memory Usage : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
${lines}
${b3}`;

        await sen(txt);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "addown":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.owner.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah menjadi owner bot!`);
      db.owner.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah menjadi owner bot ✅`);
      saveDb();
    }
    break;

case "delown":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("@tag");
      if (!db.owner.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum menjadi sebagai owner bot!`);
      db.owner = db.owner.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan owner bot ✅`);
      saveDb();
    }
    break;

case "public":
    {
      if (!isOwner) return onlyOwner();
      db.mode = "public";
      saveDb();
      await sen("Berhasil mengubah mode bot ke mode public ✅");
    }
    break;

case "onlypm":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.onlypm = true;
        saveDb();
        await sen("Berhasil menyalakan only private chat ✅");
      } else if (text.clear() === "off") {
        db.onlypm = false;
        saveDb();
        await sen("Berhasil mematikan only private chat ✅");
      } else return example("on / off");
    }
    break;

case "backup":
    {
      try {
        if (!isOwner) return onlyOwner();

        const sourceDir = process.cwd();
        const backupDir = path.join(sourceDir, "tmp", name);

        if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

        function copyRecursive(src, dest, skipFolders = []) {
          fs.readdirSync(src).forEach((file) => {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);

            const normalized = srcPath.replace(/\\/g, "/");

            if (skipFolders.some((skip) => normalized.includes(skip))) {
              return;
            }

            if (fs.lstatSync(srcPath).isDirectory()) {
              if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
              copyRecursive(srcPath, destPath, skipFolders);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          });
        }

        copyRecursive(sourceDir, backupDir, ["node_modules", "src/config/bratvideo"]);

        let buffZip = await folderToZip(backupDir);
        await EdogawaSenq.sendMessage(botNumberJid, {
          document: buffZip,
          fileName: name + ".zip",
          mimetype: "application/zip",
          caption: `Berhasil membackup script ${name} !`,
        });
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "addres":
    {
      if (!isOwner) return onlyOwner();
      let [key, txt] = text.split("|").map((i) => i.trim());
      if (!key || !txt) return await example("cmd | pesan");
      db.respon[key.clear()] = txt;
      saveDb();
      await sen(`Berhasil add respon "${key}" ke database!, silahkan coba ketik ${key} ✅`);
    }
    break;

case "delres":
    {
      if (!isOwner) return onlyOwner();
      let key = text.trim();
      if (!key) return await example("cmd ");
      if (!db.respon?.[key.clear()]) return await sen(`Respon "${key}" tidak di temukan pada database!`);
      delete db.respon[key.clear()];
      saveDb();
      await sen(`Berhasil Menghapus respon "${key}" pada database ✅`);
    }
    break;

case "addexp":
    {
      if (!isOwner) return onlyOwner();
      let [tgt, jum] = text.split("|").arrayTrim();
      let p = await decode(tgt);
      if (!fixNumber(jum) || !p) return example("@tag | 10");
      if (!db.user[p]?.exp) return sen(`User belum terdaftar di database !`);

      db.user[p].exp += fixNumber(jum);
      saveDb();
      sen(`Berhasil menambahkan ${jum} level ke @${tgt.getNumber()} ✅`);
    }
    break;

case "addidch":
    {
      if (!isOwner) return onlyOwner();
      if (!text.endsWith("@newsletter")) return example("id ch");
      db.jpmch.push(text.clear());
      saveDb();
      await sen("Berhasil menambahkan id saluran ke list jpm ch ✅");
    }
    break;

case "delidch":
    {
      if (!isOwner) return onlyOwner();
      if (!text.endsWith("@newsletter")) return example("id ch");
      saveDb();
      db.jpmch = db.jpmch.filter((i) => i !== text.trim());
      await sen("Berhasil menghapus id saluran tersebut ✅");
    }
    break;

case "cekidch":
    {
      if (!text) return example("link ch");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      const match = text.match(/whatsapp\.com\/channel\/([A-Za-z0-9]+)/);
      let res = match ? match[1] : undefined;
      if (!res) return example("link ch");
      let data = await EdogawaSenq.newsletterMetadata("invite", res);
      await senCopy(`${data.id}`, "Copy Id", data.id);
      reduceLimit();
    }
    break;

case "cekidgc":
    {
      if (!text) return example("link gc");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      const match = text.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/);
      let res = match ? match[1] : undefined;
      if (!res) return example("link gc");

      let data = await EdogawaSenq.groupGetInviteInfo(res);
      await senCopy(`${data.id}`, "Copy Id", data.id);
      reduceLimit();
    }
    break;

case "addprem":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.premium.includes(user)) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah menjadi user premium!`);
      db.premium.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah menjadi user premium ✅`);
      saveDb();
    }
    break;

case "delprem":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");
      if (!db.premium.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum menjadi sebagai user premium!`);
      db.premium = db.premium.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan user premium ✅`);
      saveDb();
    }
    break;

case "listown":
    {
      if (!isBotNumber) return onlyBotNumber();
      let txt = `${b3}
${topStyle} List owner`;

      if (db.owner.length === 0) txt += `\n${leftStyle} Tidak ada user owner!`;

      db.owner.forEach((i) => {
        txt += `\n${leftStyle} - @${i.getNumber()}`;
      });
      txt += `
${botStyle}
${b3}`;
      await sen(txt);
    }
    break;

case "listres":
    {
      if (!isOwner) return onlyOwner();
      if (Object.keys(db.respon).length === 0) return await sen(`Belum ada respon di database`);
      let txt = `${b3}\n${mHeader("List Respon")}`;
      Object.keys(db.respon).forEach((i) => {
        txt += `\n${leftStyle} ${i}`;
      });
      txt += `\n${botStyle}\n${b3}`;
      await sen(txt);
    }
    break;

case "autoban":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.autoban = true;
        saveDb();
        await sen("Berhasil menyalakan pengingat sholat ✅");
      } else if (text.clear() === "off") {
        if (EdogawaSenq.cekban?.[sender]) delete EdogawaSenq.cekban[sender];
        db.autoban = false;
        saveDb();
        await sen("Berhasil mematikan pengingat sholat ✅");
      } else return example("on / off");
    }
    break;

case "addcoin":
    {
      if (!isOwner) return onlyOwner();
      let [tgt, jum] = text.split("|").arrayTrim();
      let p = await decode(tgt);
      if (!fixNumber(jum) || !p) return example("@tag | 10");
      if (!db.user[p]?.coin) return sen(`User belum terdaftar di database !`);

      db.user[p].coin += fixNumber(jum);
      saveDb();
      sen(`Berhasil menambahkan ${jum} limit ke @${tgt.getNumber()} ✅`);
    }
    break;

case "botinfo":
    {
      try {
        const ping = performance.now() - pingMs;
        const uptime = process.uptime();
        const uptimeFormatted = msToTime(uptime * 1000);

        const cpus = os.cpus();
        const cpuModel = cpus[0]?.model || "Unknown CPU";
        const cpuSpeed = cpus[0]?.speed || 0;
        const cpuCores = cpus.length;

        const totalMem = os.totalmem() / 1024 / 1024;
        const freeMem = os.freemem() / 1024 / 1024;
        const usedMem = totalMem - freeMem;

        const platform = os.platform();
        const nodeVer = process.version;
        const arch = os.arch();

        const txt = `${b3}
${mHeader("Ping Info")}
${leftStyle} Delay : ${ping.toFixed(2)} ms
${lines}
${b3}
${b3}
${mHeader("System Info")}
${leftStyle} OS      : ${platform} (${arch})
${leftStyle} CPU     : ${cpuModel}
${leftStyle} Core    : ${cpuCores} @ ${cpuSpeed}MHz
${leftStyle} RAM     : ${usedMem.toFixed(2)}MB / ${totalMem.toFixed(2)}MB
${leftStyle} Node js : ${nodeVer}
${lines}
${b3}
${b3}
${mHeader("Bot Info")}
${leftStyle} Bot Uptime   : ${uptimeFormatted}
${leftStyle} Memory Usage : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
${lines}
${b3}`;

        await sen(txt);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "addpref":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("prefix");
      if (text.length > 1) return sen(`Prefix hanya boleh 1 digit aja `);
      db.prefix.push(text.trim());
      saveDb();
      sen(`Berhasil menambahkan prefix "${text.trim()}" ✅`);
    }
    break;

case "delpref":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("prefix");
      if (text.length > 1) return sen(`Prefix hanya boleh 1 digit aja `);
      db.prefix.filter((i) => i !== text.trim());
      saveDb();
      sen(`Berhasil menghapus prefix "${text.trim()}" ✅`);
    }
    break;

case "listidch":
    {
      if (!isOwner) return onlyOwner();
      saveDb();
      await sen(`List Id Saluran untuk jpm ch\n\n${db.jpmch.join("\n")}`);
    }
    break;

case "listprem":
    {
      if (!isOwner) return onlyOwner();
      let txt = `${b3}
${topStyle} List Premium`;

      if (db.premium.length === 0) txt += `\n${leftStyle} Tidak ada user premium!`;

      db.premium.forEach((i) => {
        txt += `\n${leftStyle} - @${i.getNumber()}`;
      });
      txt += `
${botStyle}
${b3}`;
      await sen(txt);
    }
    break;

case "addowner":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.owner.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah menjadi owner bot!`);
      db.owner.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah menjadi owner bot ✅`);
      saveDb();
    }
    break;

case "anticall":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.anticall = true;
        saveDb();
        await sen("Berhasil menyalakan anti telpon ✅");
      } else if (text.clear() === "off") {
        db.anticall = false;
        saveDb();
        await sen("Berhasil mematikan anti telpon ✅");
      } else return example("on / off");
    }
    break;

case "antitelp":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.anticall = true;
        saveDb();
        await sen("Berhasil menyalakan anti telpon ✅");
      } else if (text.clear() === "off") {
        db.anticall = false;
        saveDb();
        await sen("Berhasil mematikan anti telpon ✅");
      } else return example("on / off");
    }
    break;

case "onlygrub":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.onlygrub = true;
        saveDb();
        await sen("Berhasil menyalakan only grub ✅");
      } else if (text.clear() === "off") {
        db.onlygrub = false;
        saveDb();
        await sen("Berhasil mematikan only grub ✅");
      } else return example("on / off");
    }
    break;

case "addlevel":
    {
      if (!isOwner) return onlyOwner();
      let [tgt, jum] = text.split("|").arrayTrim();
      let p = await decode(tgt);
      if (!fixNumber(jum) || !p) return example("@tag | 10");
      if (!db.user[p]?.level) return sen(`User belum terdaftar di database !`);

      db.user[p].level += fixNumber(jum);
      saveDb();
      sen(`Berhasil menambahkan ${jum} level ke @${tgt.getNumber()} ✅`);
    }
    break;

case "addlimit":
    {
      if (!isOwner) return onlyOwner();
      let [tgt, jum] = text.split("|").arrayTrim();
      let p = await decode(tgt);
      if (!fixNumber(jum) || !p) return example("@tag | 10");
      if (!db.user[p]?.limit) return sen(`User belum terdaftar di database !`);
      db.user[p].limit += fixNumber(jum);
      saveDb();
      sen(`Berhasil menambahkan ${jum} limit ke @${tgt.getNumber()} ✅`);
    }
    break;

case "listpref":
    {
      if (!isBotNumber) return onlyBotNumber();
      const txt = "";
      db.prefix.forEach((i, idx) => {
        txt += `\nPrefix ${idx + 1} [ ${i} ] `;
      });
      sen(`${b3}
${mHeader("List Prefix")}${txt}
${lines}
${b3}`);
    }
    break;

case "addrespon":
    {
      if (!isOwner) return onlyOwner();
      let [key, txt] = text.split("|").map((i) => i.trim());
      if (!key || !txt) return await example("cmd | pesan");
      db.respon[key.clear()] = txt;
      saveDb();
      await sen(`Berhasil add respon "${key}" ke database!, silahkan coba ketik ${key} ✅`);
    }
    break;

case "delrespon":
    {
      if (!isOwner) return onlyOwner();
      let key = text.trim();
      if (!key) return await example("cmd ");
      if (!db.respon?.[key.clear()]) return await sen(`Respon "${key}" tidak di temukan pada database!`);
      delete db.respon[key.clear()];
      saveDb();
      await sen(`Berhasil Menghapus respon "${key}" pada database ✅`);
    }
    break;

case "addprefix":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("prefix");
      if (text.length > 1) return sen(`Prefix hanya boleh 1 digit aja `);
      db.prefix.push(text.trim());
      saveDb();
      sen(`Berhasil menambahkan prefix "${text.trim()}" ✅`);
    }
    break;

case "delprefix":
    {
      if (!isBotNumber) return onlyBotNumber();
      if (!text) return example("prefix");
      if (text.length > 1) return sen(`Prefix hanya boleh 1 digit aja `);
      db.prefix.filter((i) => i !== text.trim());
      saveDb();
      sen(`Berhasil menghapus prefix "${text.trim()}" ✅`);
    }
    break;

case "ban-delete":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.blacklistDel.includes(user)) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah ada di blacklist Delete Message!`);
      db.blacklistDel.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah di blacklist Delete Message ✅\nJika memakai prefix pesan otomatis di hapus`);
      saveDb();
    }
    break;

case "antitelpon":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.anticall = true;
        saveDb();
        await sen("Berhasil menyalakan anti telpon ✅");
      } else if (text.clear() === "off") {
        db.anticall = false;
        saveDb();
        await sen("Berhasil mematikan anti telpon ✅");
      } else return example("on / off");
    }
    break;

case "autoreadsw":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.autoreadsw = true;
        saveDb();
        await sen("Berhasil menyalakan auto read sw ✅");
      } else if (text.clear() === "off") {
        db.autoreadsw = false;
        saveDb();
        await sen("Berhasil mematikan auto read sw ✅");
      } else return example("on / off");
    }
    break;

case "listrespon":
    {
      if (!isOwner) return onlyOwner();
      if (Object.keys(db.respon).length === 0) return await sen(`Belum ada respon di database`);
      let txt = `${b3}\n${mHeader("List Respon")}`;
      Object.keys(db.respon).forEach((i) => {
        txt += `\n${leftStyle} ${i}`;
      });
      txt += `\n${botStyle}\n${b3}`;
      await sen(txt);
    }
    break;

case "listprefix":
    {
      if (!isBotNumber) return onlyBotNumber();
      const txt = "";
      db.prefix.forEach((i, idx) => {
        txt += `\nPrefix ${idx + 1} [ ${i} ] `;
      });
      sen(`${b3}
${mHeader("List Prefix")}${txt}
${lines}
${b3}`);
    }
    break;

case "blackliston":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");

      let user = qSender || (await decode(text));
      if (db.blacklist.includes(user)) return await sen(`Maaf @${(await decode(text)).getNumber()} sudah ada di blacklist!`);
      db.blacklist.push(await decode(text));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} telah di blacklist ✅`);
      saveDb();
    }
    break;

case "blacklistoff":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");
      if (!db.blacklist.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum di blacklist!`);
      db.blacklist = db.blacklist.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan user yang di blacklist ✅`);
      saveDb();
    }
    break;

case "unban-delete":
    {
      if (!isOwner) return onlyOwner();
      if (!text) return example("@tag");
      if (!db.blacklistDel.includes(await decode(text))) return await sen(`Maaf @${(await decode(text)).getNumber()} belum di blacklist!`);
      db.blacklistDel = db.blacklistDel.filter(async (i) => i !== (await decode(text)));
      await sen(`Berhasil, sekarang @${(await decode(text)).getNumber()} bukan user yang di blacklist ✅`);
      saveDb();
    }
    break;

case "autoreadgrub":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.autoreadgrub = true;
        saveDb();
        await sen("Berhasil menyalakan auto read grub ✅");
      } else if (text.clear() === "off") {
        db.autoreadgrub = false;
        saveDb();
        await sen("Berhasil mematikan auto read grub ✅");
      } else return example("on / off");
    }
    break;

case "autoreadchat":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.autoreadchat = true;
        saveDb();
        await sen("Berhasil menyalakan auto read chat ✅");
      } else if (text.clear() === "off") {
        db.autoreadchat = false;
        saveDb();
        await sen("Berhasil mematikan auto read chat ✅");
      } else return example("on / off");
    }
    break;

case "pengingatsholat":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.pengingatsholat = true;
        saveDb();
        await sen("Berhasil menyalakan pengingat sholat ✅");
      } else if (text.clear() === "off") {
        db.pengingatsholat = false;
        saveDb();
        await sen("Berhasil mematikan pengingat sholat ✅");
      } else return example("on / off");
    }
    break;

case "hd":
    {
      if (!/image/.test(mime)) return await sen("Gunakan command tersebut di caption foto");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        await bentarYa();
        let buff = await downloadToBuffer(media);

        await sendMedia(await hdr(buff, 4), `Berhasil ${command} Image ✅`);
        reduceLimit();
      } catch (e) {
        console.log(e);
        await sen(e.message);
      }
    }
    break;

case "wm":
    {
      if (!/webp/.test(mime)) return await sen("Gunakan command tersebut sambil reply sticker!");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();

      let buffer = await downloadToBuffer(media);
      const [packname, author] = text.split("|") || [];
      let webpu;
      if (packname && author) {
        webpu = await exif(buffer, {
          packname: packname,
          author: author,
        });
      } else if (packname) {
        webpu = await exif(buffer, {
          packname: packname,
        });
      } else if (author) {
        webpu = await exif(buffer, {
          author: author,
        });
      } else {
        webpu = await exif(buffer);
      }

      await EdogawaSenq.sendMessage(
        jid,
        {
          sticker: webpu,
        },
        {
          quoted: m,
        }
      );
      reduceLimit();
    }
    break;

case "rvo":
    {
      if (!media) return await sen("Gunakan command tersebut sambil reply view once message!");
      let buffer = await downloadToBuffer(media);
      if (/audio/.test(mime)) {
        let aud = await toAudio(await downloadToBuffer(media));
        await sendMedia(aud);
      } else {
        await sendMedia(buffer);
      }
    }
    break;

case "hdr":
    {
      if (!/image/.test(mime)) return await sen("Gunakan command tersebut di caption foto");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        await bentarYa();
        let buff = await downloadToBuffer(media);

        await sendMedia(await hdr(buff, 4), `Berhasil ${command} Image ✅`);
        reduceLimit();
      } catch (e) {
        console.log(e);
        await sen(e.message);
      }
    }
    break;

case "rch":
    {
      if (!isOwner) return onlyOwner();
      const [link, emj] = text.split("|").map((i) => i.trim());
      if (!link || !emj) return example("link | emoji1, emoji2, emoji3", "https://whatsapp.com/channel/0029Vb64iJaCHDycBbnAB13y/440 | 🫤, 🗿");

      let emojiList = emj
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter((e) => e.trim());

      const emoji = emojiList.join(",");
      const apiKey = db.rch;

      try {
        const url = `https://react.whyux-xec.my.id/api/rch?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emoji)}`;
        const res = await fetch(url, {
          method: "GET",
          headers: { "x-api-key": apiKey },
        });

        let json = await res.json();

        if (json.creator) delete json.creator;

        let txt = "";

        let data = await EdogawaSenq.newsletterMetadata("invite", link.split("/")[4]);

        if (json.success) {
          txt = `${b3}
${mHeader("React CH")}
${leftStyle} Channel : ${data?.name}
${leftStyle} Emoji   : ${emj}
${lines}
${b3}`;
        } else {
          txt = `Apikey habis ketik .setrch apikey nya\nuntuk mengatur apikey, dapatkan apikey nya di : https://asitha.top/login?ref=senqftdp5330`;
        }

        await sen(txt);
      } catch (e) {
        handleError(e, command);
      }
    }
    break;

case "toqr":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      if (!text) return await example("text");

      try {
        await bentarYa();
        const data = text;

        QRCode.toDataURL(data, async function (err, base64) {
          if (err) return console.error("Terjadi kesalahan:", err);

          const base64Data = base64.replace(/^data:image\/png;base64,/, "");

          let pth = path.join(os.tmpdir(), `/${randomName()}.jpg`);
          await fs.writeFileSync(pth, base64Data, "base64");

          await sendMedia(pth, `Berhasil mengkonversi teks ke Qr Code ✅`);

          fs.unlinkSync(pth);
          await reduceLimit();
        });
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "hdin":
    {
      if (!/image/.test(mime)) return await sen("Gunakan command tersebut di caption foto");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        await bentarYa();
        let buff = await downloadToBuffer(media);

        await sendMedia(await hdr(buff, 4), `Berhasil ${command} Image ✅`);
        reduceLimit();
      } catch (e) {
        console.log(e);
        await sen(e.message);
      }
    }
    break;

case "acak":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text) return example("text");
      let hasil = text
        .split("")
        .map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char.clear()))
        .join("");
      await sen(hasil);
      reduceLimit();
    }
    break;

case "tovn":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/audio|video/.test(mime)) return sen("Gunakan sambil reply video atau audio nya");
      const b = /audio/.test(mime) ? await downloadToBuffer(media) : await toAudio(await downloadToBuffer(media));
      await sendVn(b, jid);
      await reduceLimit();
    }
    break;

case "toimg":
    {
      if (!media) return sen("Silahkan reply stiker untuk menggunakan command ini");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();

      await sendMedia(await downloadToBuffer(media));
      await reduceLimit();
    }
    break;

case "tourl":
    {
      if (!media) return await sen(`Gunakan command ${prefix}${command} di caption video, foto & audio!`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let buff = await downloadToBuffer(media);
      let url = await imageToUrl(buff);
      await sen(url);
      await reduceLimit();
    }
    break;

case "getpp":
    {
      if (!text && !qSender) return example("nomor / reply");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        let nomor = text ? (text.endsWith("@g.us") ? text.trim() : await decode(text)) : qSender;

        let pp = await EdogawaSenq.profilePictureUrl(nomor, "image");
        await sendMedia(pp, `Berhasil mengambil foto profil. ✅`);
        reduceLimit();
      } catch (e) {
        return await sen("hasil tidak di temukan");
      }
    }
    break;

case "cpoll":
    {
      let [name, list] = text.split("|");
      if (!name || !list.split(",")) return example("nama | list1, list2");
      let val = [];
      list.split(",").map((i) => val.push(i));

      try {
        await EdogawaSenq.sendMessage(jid, {
          poll: {
            name: name,
            values: val,
            selectableCount: 1,
          },
        });
      } catch (e) {
        await sen(e);
      }
    }
    break;

case "hdvid":
    {
      if (!isPrem) return onlyPrem();
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!/video/.test(mime)) return onlyVideo();
      try {
        const tmpFileOut = path.join(os.tmpdir(), `./${randomName()}.mp4`);
        const tmpFileIn = path.join(os.tmpdir(), `./${randomName()}.mp4`);
        let b = await downloadToBuffer(media);
        fs.writeFileSync(tmpFileIn, b);
        await new Promise((resolve, reject) => {
          ffmpeg(tmpFileIn).outputOptions(["-vf", "scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8", "-r", "60", "-preset", "faster", "-crf", "25", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k"]).on("end", resolve).on("error", reject).save(tmpFileOut);
        });
        let buf = fs.readFileSync(tmpFileOut);
        await sendMedia(buf, "Berhasil exchane video 1x exchane ✅");
        fs.unlinkSync(tmpFileOut);
        fs.unlinkSync(tmpFileIn);
        reduceLimit();
      } catch (e) {
        await sen(e);
      }
    }
    break;

case "tweet":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      async function cropCircle(url) {
        // load image dari URL
        const image = await Jimp.read(url);

        // pastikan bentuk square (untuk lingkaran sempurna)
        const size = Math.min(image.bitmap.width, image.bitmap.height);
        image.cover(size, size); // crop center square

        // buat mask lingkaran
        const mask = new Jimp(size, size, 0x00000000); // transparent
        mask.scan(0, 0, size, size, function (x, y, idx) {
          const radius = size / 2;
          const dx = x - radius;
          const dy = y - radius;
          if (dx * dx + dy * dy <= radius * radius) {
            // isi putih (opaque)
            mask.bitmap.data[idx + 0] = 255; // R
            mask.bitmap.data[idx + 1] = 255; // G
            mask.bitmap.data[idx + 2] = 255; // B
            mask.bitmap.data[idx + 3] = 255; // A
          }
        });

        // apply mask
        image.mask(mask, 0, 0);

        // output buffer PNG
        const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
        return buffer;
      }

      function wrapText(ctx, text, maxWidth) {
        const words = text.split(" ");
        const lines = [];
        let line = "";

        for (let word of words) {
          const testLine = line ? line + " " + word : word;
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = testLine;
          }
        }
        if (line) lines.push(line);
        return lines;
      }

      let [name, username, retwets, likes, pesan] = text.split("|").arrayTrim();

      if (!name || !username || !retwets || !likes || !pesan) return await example("name | username | retwets | likes | pesan", "senq | syera | 5k | 10k | yow gw senq store wkwkwkw");

      const jakartaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      });

      const date = new Date(jakartaTime);

      const timeString = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      });

      const dateString = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Jakarta",
      });

      let times = `${timeString} • ${dateString} • Twitter For iPhone`;

      let ppUrl = "https://i.ibb.co/JhVD3XN/senq.png";
      try {
        ppUrl = await EdogawaSenq.profilePictureUrl(senderJid, "image");
      } catch {
        ppUrl = "https://i.ibb.co/JhVD3XN/senq.png";
      }

      let tempCanvas = createCanvas(500, 300);
      let tempCtx = tempCanvas.getContext("2d");
      tempCtx.font = "20px Arial";

      let wraping = wrapText(tempCtx, pesan, 500 - 14);
      let lineHeight = 20 * 1.2;

      let width = 500;
      let height = wraping.length * lineHeight + 230;

      let canvas = createCanvas(width, height);
      let ctx = canvas.getContext("2d");

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      let pp = await loadImage(await cropCircle(ppUrl));

      ctx.drawImage(pp, 10, 7, 50, 50);

      ctx.fillStyle = "#ffffff";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText(name, 70, 27);

      ctx.fillStyle = "#888888";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText("@" + username, 70, 44);

      ctx.font = "20px Arial";
      ctx.textAlign = "end";
      ctx.fillText("...", width - 12, 27);

      ctx.fillStyle = "#ffffff";
      ctx.font = "20px Arial";
      ctx.textAlign = "start";

      wraping.forEach((line, i) => {
        ctx.fillText(line, 12, 22 * 1.2 * (i + 1) + 65);
      });

      ctx.fillStyle = "#888888";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText(times, 10, wraping.length * lineHeight + 105);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, wraping.length * lineHeight + 125, width, 0.2);

      ctx.fillStyle = "#999999";
      ctx.font = "16px Arial";
      ctx.textAlign = "start";
      ctx.fillText(retwets + " Retweets  " + likes + " Likes", 10, wraping.length * lineHeight + 155);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, wraping.length * lineHeight + 175, width, 0.2);

      ctx.drawImage(await loadImage("./assets/image/tweet.png"), 0, height - 50, width, 50);

      let buff = await canvas.toBuffer("image/png");

      await sendMedia(buff, `Berhasil Membuat fake chat twitter ✅`);
      reduceLimit();
    }
    break;

case "tovid":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/webp/.test(mime)) return await sen(`Tolong reply sticker agar bisa di ubah ke video!`);
      if (!media.isAnimated) return await sen(`Tolong reply stiker yang beranimasi / bergerak!`);

      try {
        const buffer = await downloadToBuffer(media);

        let res = await toVideo(buffer);

        await sendMedia(res, `Berhasil mengubah stiker animated ke video!`);
        reduceLimit();
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "ssweb":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text.startsWith("https://")) return await example("url", "https://xxxxx");
      try {
        let anu = "https://" + text.replace(/^https?:\/\//, "");
        let buff = await getBuffer("https://image.thum.io/get/width/720/crop/1080/fullpage/" + anu);
        await sendMedia(buff, "Berhasil mengambil screenshot web ✅");

        await reduceLimit();
      } catch (e) {
        return handleError(command, e);
      }
    }
    break;

case "rch1k":
    {
      if (!isOwner) return onlyOwner();
      const [link, emj] = text.split("|").map((i) => i.trim());
      if (!link || !emj) return example("link | emoji1, emoji2, emoji3", "https://whatsapp.com/channel/0029Vb64iJaCHDycBbnAB13y/440 | 🫤, 🗿");

      let emojiList = emj
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter((e) => e.trim());

      const emoji = emojiList.join(",");
      const apiKey = db.rch;

      try {
        const url = `https://react.whyux-xec.my.id/api/rch?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emoji)}`;
        const res = await fetch(url, {
          method: "GET",
          headers: { "x-api-key": apiKey },
        });

        let json = await res.json();

        if (json.creator) delete json.creator;

        let txt = "";

        let data = await EdogawaSenq.newsletterMetadata("invite", link.split("/")[4]);

        if (json.success) {
          txt = `${b3}
${mHeader("React CH")}
${leftStyle} Channel : ${data?.name}
${leftStyle} Emoji   : ${emj}
${lines}
${b3}`;
        } else {
          txt = `Apikey habis ketik .setrch apikey nya\nuntuk mengatur apikey, dapatkan apikey nya di : https://asitha.top/login?ref=senqftdp5330`;
        }

        await sen(txt);
      } catch (e) {
        handleError(e, command);
      }
    }
    break;

case "react":
    {
      if (!isOwner) return onlyOwner();
      const [link, emj] = text.split("|").map((i) => i.trim());
      if (!link || !emj) return example("link | emoji1, emoji2, emoji3", "https://whatsapp.com/channel/0029Vb64iJaCHDycBbnAB13y/440 | 🫤, 🗿");

      let emojiList = emj
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter((e) => e.trim());

      const emoji = emojiList.join(",");
      const apiKey = db.rch;

      try {
        const url = `https://react.whyux-xec.my.id/api/rch?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emoji)}`;
        const res = await fetch(url, {
          method: "GET",
          headers: { "x-api-key": apiKey },
        });

        let json = await res.json();

        if (json.creator) delete json.creator;

        let txt = "";

        let data = await EdogawaSenq.newsletterMetadata("invite", link.split("/")[4]);

        if (json.success) {
          txt = `${b3}
${mHeader("React CH")}
${leftStyle} Channel : ${data?.name}
${leftStyle} Emoji   : ${emj}
${lines}
${b3}`;
        } else {
          txt = `Apikey habis ketik .setrch apikey nya\nuntuk mengatur apikey, dapatkan apikey nya di : https://asitha.top/login?ref=senqftdp5330`;
        }

        await sen(txt);
      } catch (e) {
        handleError(e, command);
      }
    }
    break;

case "rotate":
    {
      if (!/image/.test(mime)) return await sen("Gunakan command tersebut di caption foto");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      let num = Number(text);
      if (!num || isNaN(num)) return example("angle", "90");
      const image = await Jimp.read(await downloadToBuffer(media));
      const rotated = image.rotate(num);
      await sendMedia(await rotated.getBufferAsync(Jimp.MIME_JPEG));
      reduceLimit();
    }
    break;

case "urlenc":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text) return example("text");
      let hasil = encodeURIComponent(text);
      await sen(hasil);
      reduceLimit();
    }
    break;

case "urldec":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text) return example("url");
      let hasil = decodeURIComponent(text);
      await sen(hasil);
      reduceLimit();
    }
    break;

case "tobars":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!/audio|video/.test(mime)) return sen("Gunakan sambil reply video atau audio nya");
      const b = /audio/.test(mime) ? await downloadToBuffer(media) : await toAudio(await downloadToBuffer(media));
      await sendVn(b, jid);
      await reduceLimit();
    }
    break;

case "text-ba":
    {
      try {
        let [t1, t2] = text.split("|").map((i) => i.trim());
        if (!t1 || !t2) return example("text1 | text2");
        await bentarYa();
        let buff = await getBuffer(`${apiv4}/canvas/ba-logo?textL=${t1}+&textR=${t2}`);
        await sendMedia(buff);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "getppgc":
    {
      if (!text && !isGroup) return example("id grub / ketik di grub");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        let nomor = text ? text.trim() : jid;

        let pp = await EdogawaSenq.profilePictureUrl(nomor, "image");
        await sendMedia(pp, ` Foto profil berhasil diambil. ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "getppgb":
    {
      if (!text && !isGroup) return example("id grub / ketik di grub");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      try {
        let nomor = text ? text.trim() : jid;

        let pp = await EdogawaSenq.profilePictureUrl(nomor, "image");
        await sendMedia(pp, ` Foto profil berhasil diambil. ✅`);
        reduceLimit();
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "gethtml":
    {
      if (!text) return example("Link Web");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      axios
        .get(text)
        .then(async (response) => {
          const $ = cheerio.load(response.data);
          const html = $("html").html();
          await sen(html);
        })
        .catch(async (e) => {
          await sen(e);
          reduceLimit();
        });
    }
    break;

case "sendngl":
    {
      let [link, pesan, jumlah] = text.split(",").map((v) => v.trim());
      if (!link.includes("https://ngl.link") || !pesan || isNaN(jumlah) || jumlah < 1) return example("link, pesan, jumlah", "https://ngl.link/xxx, halo, 2");
      jumlah = parseInt(jumlah);
      let username = link.split("https://ngl.link/")[1];
      if (!username) return await sen("Username NGL tidak ditemukan di link!");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

      await sen(`Memproses kirim pesan ke NGL @${username} sebanyak ${jumlah} kali`);

      for (let i = 0; i < jumlah; i++) {
        try {
          await fetch("https://ngl.link/api/submit", {
            method: "POST",
            headers: {
              "accept": "*/*",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: `username=${username}&question=${encodeURIComponent(pesan)}&deviceId=1`,
          });
          await sleep(1000);
        } catch (err) {
          console.log(err);
        }
      }
      await sen(`Berhasil mengirim ${jumlah} pesan ke @${username} ✅`);
      reduceLimit();
    }
    break;

case "reverse":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text) return example("text");
      let hasil = text.split("").reverse().join("");
      await sen(hasil);
      reduceLimit();
    }
    break;

case "reactch":
    {
      if (!isOwner) return onlyOwner();
      const [link, emj] = text.split("|").map((i) => i.trim());
      if (!link || !emj) return example("link | emoji1, emoji2, emoji3", "https://whatsapp.com/channel/0029Vb64iJaCHDycBbnAB13y/440 | 🫤, 🗿");

      let emojiList = emj
        .replace(/,/g, " ")
        .split(/\s+/)
        .filter((e) => e.trim());

      const emoji = emojiList.join(",");
      const apiKey = db.rch;

      try {
        const url = `https://react.whyux-xec.my.id/api/rch?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emoji)}`;
        const res = await fetch(url, {
          method: "GET",
          headers: { "x-api-key": apiKey },
        });

        let json = await res.json();

        if (json.creator) delete json.creator;

        let txt = "";

        let data = await EdogawaSenq.newsletterMetadata("invite", link.split("/")[4]);

        if (json.success) {
          txt = `${b3}
${mHeader("React CH")}
${leftStyle} Channel : ${data?.name}
${leftStyle} Emoji   : ${emj}
${lines}
${b3}`;
        } else {
          txt = `Apikey habis ketik .setrch apikey nya\nuntuk mengatur apikey, dapatkan apikey nya di : https://asitha.top/login?ref=senqftdp5330`;
        }

        await sen(txt);
      } catch (e) {
        handleError(e, command);
      }
    }
    break;

case "enchard":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("kode js", "console.log('halo')");

      const data = await encHard(text);

      await EdogawaSenq.sendMessage(
        jid,
        {
          document: Buffer.from(data),
          fileName: `Encrypt.js`,
          mimetype: "application/javascript",
          caption: `Berhasil encrypt kode javascript ✅`,
        },
        { quoted: qFake }
      );

      await reduceLimit();
    }
    break;

case "flagtext":
    {
      await caseText(command);
    }
    break;

case "readmore":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text.split("|")[0] || !text.split("|")[1]) return example("text | text", "halo | senq");
      await sen(`${text.split("|")[0]}${read}${text.split("|")[1]}`);
      reduceLimit();
    }
    break;

case "cekkuota":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const cekkoutaaxisxl = async (nomorhp) => {
        try {
          const { data } = await axios.get(`https://bendith.my.id/end.php`, {
            params: {
              check: "package",
              number: nomorhp,
              version: "2 201",
            },
          });
          return data;
        } catch (e) {
          return e;
        }
      };

      if (!text) return example("Nomor Axis");
      let res = cekkoutaaxisxl(text.trim());
      await sen(JSON.stringify(res, null, 2));
      reduceLimit();
    }
    break;

case "writetext":
    {
      await caseText(command);
    }
    break;

case "logomaker":
    {
      await caseText(command);
    }
    break;

case "1917style":
    {
      await caseText(command);
    }
    break;

case "royaltext":
    {
      await caseText(command);
    }
    break;

case "encbase64":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
      await bentarYa();
      if (!text) return example("text");
      let hasil = Buffer.from(text).toString("base64");
      await sen(hasil);
      reduceLimit();
    }
    break;

case "decbase64":
    {
      if (!text) return example("base64");
      try {
        if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");
        await bentarYa();
        let hasil = Buffer.from(text, "base64").toString("utf-8");
        await sen(hasil);
        reduceLimit();
      } catch (error) {
        handleError(command, e);
      }
    }
    break;

case "faketweet":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      async function cropCircle(url) {
        // load image dari URL
        const image = await Jimp.read(url);

        // pastikan bentuk square (untuk lingkaran sempurna)
        const size = Math.min(image.bitmap.width, image.bitmap.height);
        image.cover(size, size); // crop center square

        // buat mask lingkaran
        const mask = new Jimp(size, size, 0x00000000); // transparent
        mask.scan(0, 0, size, size, function (x, y, idx) {
          const radius = size / 2;
          const dx = x - radius;
          const dy = y - radius;
          if (dx * dx + dy * dy <= radius * radius) {
            // isi putih (opaque)
            mask.bitmap.data[idx + 0] = 255; // R
            mask.bitmap.data[idx + 1] = 255; // G
            mask.bitmap.data[idx + 2] = 255; // B
            mask.bitmap.data[idx + 3] = 255; // A
          }
        });

        // apply mask
        image.mask(mask, 0, 0);

        // output buffer PNG
        const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
        return buffer;
      }

      function wrapText(ctx, text, maxWidth) {
        const words = text.split(" ");
        const lines = [];
        let line = "";

        for (let word of words) {
          const testLine = line ? line + " " + word : word;
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = testLine;
          }
        }
        if (line) lines.push(line);
        return lines;
      }

      let [name, username, retwets, likes, pesan] = text.split("|").arrayTrim();

      if (!name || !username || !retwets || !likes || !pesan) return await example("name | username | retwets | likes | pesan", "senq | syera | 5k | 10k | yow gw senq store wkwkwkw");

      const jakartaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      });

      const date = new Date(jakartaTime);

      const timeString = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      });

      const dateString = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Jakarta",
      });

      let times = `${timeString} • ${dateString} • Twitter For iPhone`;

      let ppUrl = "https://i.ibb.co/JhVD3XN/senq.png";
      try {
        ppUrl = await EdogawaSenq.profilePictureUrl(senderJid, "image");
      } catch {
        ppUrl = "https://i.ibb.co/JhVD3XN/senq.png";
      }

      let tempCanvas = createCanvas(500, 300);
      let tempCtx = tempCanvas.getContext("2d");
      tempCtx.font = "20px Arial";

      let wraping = wrapText(tempCtx, pesan, 500 - 14);
      let lineHeight = 20 * 1.2;

      let width = 500;
      let height = wraping.length * lineHeight + 230;

      let canvas = createCanvas(width, height);
      let ctx = canvas.getContext("2d");

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      let pp = await loadImage(await cropCircle(ppUrl));

      ctx.drawImage(pp, 10, 7, 50, 50);

      ctx.fillStyle = "#ffffff";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText(name, 70, 27);

      ctx.fillStyle = "#888888";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText("@" + username, 70, 44);

      ctx.font = "20px Arial";
      ctx.textAlign = "end";
      ctx.fillText("...", width - 12, 27);

      ctx.fillStyle = "#ffffff";
      ctx.font = "20px Arial";
      ctx.textAlign = "start";

      wraping.forEach((line, i) => {
        ctx.fillText(line, 12, 22 * 1.2 * (i + 1) + 65);
      });

      ctx.fillStyle = "#888888";
      ctx.font = "13px Arial";
      ctx.textAlign = "start";
      ctx.fillText(times, 10, wraping.length * lineHeight + 105);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, wraping.length * lineHeight + 125, width, 0.2);

      ctx.fillStyle = "#999999";
      ctx.font = "16px Arial";
      ctx.textAlign = "start";
      ctx.fillText(retwets + " Retweets  " + likes + " Likes", 10, wraping.length * lineHeight + 155);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, wraping.length * lineHeight + 175, width, 0.2);

      ctx.drawImage(await loadImage("./assets/image/tweet.png"), 0, height - 50, width, 50);

      let buff = await canvas.toBuffer("image/png");

      await sendMedia(buff, `Berhasil Membuat fake chat twitter ✅`);
      reduceLimit();
    }
    break;

case "glitchtext":
    {
      await caseText(command);
    }
    break;

case "neonglitch":
    {
      await caseText(command);
    }
    break;

case "flag3dtext":
    {
      await caseText(command);
    }
    break;

case "luxurygold":
    {
      await caseText(command);
    }
    break;

case "sandsummer":
    {
      await caseText(command);
    }
    break;

case "makingneon":
    {
      await caseText(command);
    }
    break;

case "freecreate":
    {
      await caseText(command);
    }
    break;

case "createpoll":
    {
      let [name, list] = text.split("|");
      if (!name || !list.split(",")) return example("nama | list1, list2");
      let val = [];
      list.split(",").map((i) => val.push(i));

      try {
        await EdogawaSenq.sendMessage(jid, {
          poll: {
            name: name,
            values: val,
            selectableCount: 1,
          },
        });
      } catch (e) {
        await sen(e);
      }
    }
    break;

case "cekkuotaxl":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const cekkoutaaxisxl = async (nomorhp) => {
        try {
          const { data } = await axios.get(`https://bendith.my.id/end.php`, {
            params: {
              check: "package",
              number: nomorhp,
              version: "2 201",
            },
          });
          return data;
        } catch (e) {
          return e;
        }
      };

      if (!text) return example("Nomor Axis");
      let res = cekkoutaaxisxl(text.trim());
      await sen(JSON.stringify(res, null, 2));
      reduceLimit();
    }
    break;

case "pixelglitch":
    {
      await caseText(command);
    }
    break;

case "glowingtext":
    {
      await caseText(command);
    }
    break;

case "summerbeach":
    {
      await caseText(command);
    }
    break;

case "galaxystyle":
    {
      await caseText(command);
    }
    break;

case "totalmember":
    {
      if (!isGroup) return onlyGrup();

      try {
        await sen(`${metadata[jid].participants.length} Member`);
      } catch (e) {
        await sen(e);
      }
    }
    break;

case "advancedglow":
    {
      await caseText(command);
    }
    break;

case "deletingtext":
    {
      await caseText(command);
    }
    break;

case "cartoonstyle":
    {
      await caseText(command);
    }
    break;

case "effectclouds":
    {
      await caseText(command);
    }
    break;

case "gradienttext":
    {
      await caseText(command);
    }
    break;

case "lighteffects":
    {
      await caseText(command);
    }
    break;

case "cekkuotaaxis":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const cekkoutaaxisxl = async (nomorhp) => {
        try {
          const { data } = await axios.get(`https://bendith.my.id/end.php`, {
            params: {
              check: "package",
              number: nomorhp,
              version: "2 201",
            },
          });
          return data;
        } catch (e) {
          return e;
        }
      };

      if (!text) return example("Nomor Axis");
      let res = cekkoutaaxisxl(text.trim());
      await sen(JSON.stringify(res, null, 2));
      reduceLimit();
    }
    break;

case "papercutstyle":
    {
      await caseText(command);
    }
    break;

case "blackpinklogo":
    {
      await caseText(command);
    }
    break;

case "typographytext":
    {
      await caseText(command);
    }
    break;

case "blackpinkstyle":
    {
      await caseText(command);
    }
    break;

case "underwatertext":
    {
      await caseText(command);
    }
    break;

case "watercolortext":
    {
      await caseText(command);
    }
    break;

case "galaxywallpaper":
    {
      await caseText(command);
    }
    break;

case "multicoloredneon":
    {
      await caseText(command);
    }
    break;

case "h":
    {
      if (!isGroup) return onlyGrup();
      if (!isOwner && !isAdmin) return onlyOwner();
      let { participants } = metadata[jid];
      EdogawaSenq.sendMessage(
        jid,
        {
          text: text || qBody || `Halo`,
          mentions: participants.map((i) => i.jid),
        },
        { quoted: m }
      );
    }
    break;

case "ht":
    {
      if (!isGroup) return onlyGrup();
      if (!isOwner && !isAdmin) return onlyOwner();
      let { participants } = metadata[jid];
      EdogawaSenq.sendMessage(
        jid,
        {
          text: text || qBody || `Halo`,
          mentions: participants.map((i) => i.jid),
        },
        { quoted: m }
      );
    }
    break;

case "add":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("nomor");
      let nomor = await decode(text);
      if (!nomor) return await sen(`maaf @${sender?.getNumber()} tolong masukan nomor yang terdaftar di whatsapp!!`);
      try {
        let a = await EdogawaSenq.groupParticipantsUpdate(jid, [nomor], "add");

        await sen(`Berhasil Menambahkan @${nomor.getNumber()} ✅`);
      } catch (e) {
        handleError(command, e);
      }
    }
    break;

case "del":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!qId) return await sen("Reply pesan yang ingin di hapus");
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: false,
          id: qId,
          participant: qSender,
        },
      });
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: true,
          id: m.key.id,
          participant: sender,
        },
      });
    }
    break;

case "join":
    {
      if (!isOwner) return onlyOwner();
      if (!text && !qBody) return example("link gc");
      let teks = text || qBody;
      let links = teks.match(/https:\/\/chat\.whatsapp\.com\/\S+/g);
      if (links.length === 0) return await sen("Tidak ada link grub terdeteksi!");
      links?.forEach(async (i) => {
        const code = i.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]+)/)?.[1];
        await EdogawaSenq.groupAcceptInvite(code);
      });
      await sen(`Berhasil bergabung ke grub tersebut ✅`);
    }
    break;

case "kick":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender || (await decode(text));
      if (user === botNumber) return await sen("Maaf kak kamu tidak bisa megeluarkan nomor bot!");
      let { subject } = metadata[jid];
      try {
        await EdogawaSenq.groupParticipantsUpdate(jid, [user], "remove");
      } catch (e) {
        console.log(e);
        await sen(`gagal mengeluarkan @${user.getNumber()} dari grub ${subject}`);
      }
    }
    break;

case "open":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();

      await EdogawaSenq.groupSettingUpdate(jid, "not_announcement");
    }
    break;

case "leave":
    {
      if (!isOwner) return onlyOwner();
      if (!isGroup && !text) return sen(`Fitur tersebut hanya bisa di gunakan dalam grub!, atau kamu masukan id grub dengan ketik .${command} idgc`);
      if (isGroup) {
        await sen(`Proses keluar dari grub ${metadata[jid].subject}`);
        await EdogawaSenq.groupLeave(jid);
      } else {
        if (!metadata?.[text.clear()]) return sen(`Tolong masukan id grub yang ada di nomor kamu!`);
        let name = metadata[text.clear()].subject;
        await EdogawaSenq.groupLeave(text.clear());
        await sen(`Berhasil keluar dari grub ${name} ✅`);
      }
    }
    break;

case "paygc":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (!isAdmin) return onlyAdmin();
        if (!db.payment?.[jid]) return sen(`payment pada grub ini belum di set!, ketik .setpaygc dana|ovo|gopay|linkqr`);
        let pay = db.payment[jid];

        let isImg = pay.linkqr.startsWith("https") ? true : false;

        let txt = `${b3}
${mHeader("Pay Gc")}
${leftStyle} Dana  : ${pay.dana}
${leftStyle} Ovo   : ${pay.ovo}
${leftStyle} Gopay : ${pay.gopay}
${leftStyle} Qris  : ${isImg ? "Scan di atas" : "Tidak ada"}
${botStyle}
${b3}`;
        if (isImg) {
          await sendMedia(pay.linkqr, txt);
        } else {
          await sen(txt);
        }
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "gcpay":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (!isAdmin) return onlyAdmin();
        if (!db.payment?.[jid]) return sen(`payment pada grub ini belum di set!, ketik .setpaygc dana|ovo|gopay|linkqr`);
        let pay = db.payment[jid];

        let isImg = pay.linkqr.startsWith("https") ? true : false;

        let txt = `${b3}
${mHeader("Pay Gc")}
${leftStyle} Dana  : ${pay.dana}
${leftStyle} Ovo   : ${pay.ovo}
${leftStyle} Gopay : ${pay.gopay}
${leftStyle} Qris  : ${isImg ? "Scan di atas" : "Tidak ada"}
${botStyle}
${b3}`;
        if (isImg) {
          await sendMedia(pay.linkqr, txt);
        } else {
          await sen(txt);
        }
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "hapus":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!qId) return await sen("Reply pesan yang ingin di hapus");
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: false,
          id: qId,
          participant: qSender,
        },
      });
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: true,
          id: m.key.id,
          participant: sender,
        },
      });
    }
    break;

case "close":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();

      await EdogawaSenq.groupSettingUpdate(jid, "announcement");
    }
    break;

case "totag":
    {
      if (!isGroup) return onlyGrub();
      if (!isAdmin && !isBotNumber) return onlyAdmin();
      if (!qmsg) return warning(`Tolong reply pesan nya`);

      EdogawaSenq.sendMessage(jid, {
        forward: {
          key: {
            fromMe: false,
            remoteJid: [],
            id: qId,
          },
          message: qmsg,
          participant: qSender,
        },
        mentions: getMetadata().allParticipantsLid,
      });
    }
    break;

case "joingc":
    {
      if (!isOwner) return onlyOwner();
      if (!text && !qBody) return example("link gc");
      let teks = text || qBody;
      let links = teks.match(/https:\/\/chat\.whatsapp\.com\/\S+/g);
      if (links.length === 0) return await sen("Tidak ada link grub terdeteksi!");
      links?.forEach(async (i) => {
        const code = i.match(/chat\.whatsapp\.com\/([a-zA-Z0-9]+)/)?.[1];
        await EdogawaSenq.groupAcceptInvite(code);
      });
      await sen(`Berhasil bergabung ke grub tersebut ✅`);
    }
    break;

case "keluar":
    {
      if (!isOwner) return onlyOwner();
      if (!isGroup && !text) return sen(`Fitur tersebut hanya bisa di gunakan dalam grub!, atau kamu masukan id grub dengan ketik .${command} idgc`);
      if (isGroup) {
        await sen(`Proses keluar dari grub ${metadata[jid].subject}`);
        await EdogawaSenq.groupLeave(jid);
      } else {
        if (!metadata?.[text.clear()]) return sen(`Tolong masukan id grub yang ada di nomor kamu!`);
        let name = metadata[text.clear()].subject;
        await EdogawaSenq.groupLeave(text.clear());
        await sen(`Berhasil keluar dari grub ${name} ✅`);
      }
    }
    break;

case "revoke":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      EdogawaSenq.groupRevokeInvite(jid);
      await sen(`Berhasil mereset link grup. ✅`);
    }
    break;

case "linkgb":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      let res = await EdogawaSenq.groupInviteCode(jid);
      let t = `Berhasil mengambil link grup: https://chat.whatsapp.com/${res}`;
      await sen(t);
    }
    break;

case "linkgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      let res = await EdogawaSenq.groupInviteCode(jid);
      let t = `Berhasil mengambil link grup: https://chat.whatsapp.com/${res}`;
      await sen(t);
    }
    break;

case "delete":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!qId) return await sen("Reply pesan yang ingin di hapus");
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: false,
          id: qId,
          participant: qSender,
        },
      });
      await EdogawaSenq.sendMessage(jid, {
        delete: {
          remoteJid: jid,
          fromMe: true,
          id: m.key.id,
          participant: sender,
        },
      });
    }
    break;

case "demote":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender ? await decode(qSender) : await decode(text);
      let { subject } = metadata[jid];
      try {
        await EdogawaSenq.groupParticipantsUpdate(jid, [user], "demote");
        await sen(`Berhasil! @${user.getNumber()} telah dicabut dari admin di grup ${subject}. ✅`);
      } catch (e) {
        console.log(e);
        await sen(`Gagal mencabut admin @${user.getNumber()} di grup ${subject}.`);
      }
    }
    break;

case "tagall":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin && !isOwner) return onlyAdmin();

      let tag = "";
      groups.participants
        .map((i) => i.id)
        .forEach((i) => {
          tag += `\n${leftStyle} @${i.getNumber()}`;
        });

      let txt = `${b3}
${mHeader("Tag All")} 
${leftStyle} From  : @${sender.getNumber()}
${leftStyle} Pesan : ${qBody || text}
${botStyle}
${b3}
${b3}
${mHeader("Tags")}
${b3}${tag}
${botStyle}
${b3}`;

      await sen(txt);
    }
    break;

case "antibb":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antibb.push(jid);
        await sen(`Berhasil menyalakan *Anti BB* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antibb = db.antibb.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti BB* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antibb`;
        if (db.antibb.length === 0) p += `\n${leftStyle} Tidak ada antibb`;
        db.antibb.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "upswgc":
    {
      try {
        let [cap, id] = text.split("|").map((i) => i.trim());
        if (!isGroup && (!cap || !id)) return example("Text | idgc");
        if (isGroup && !text) return example("Text");

        if (isGroup && !isAdmin && !isOwner) return onlyAdmin();

        let buff = media ? await downloadToBuffer(media) : null;

        let content = null;

        if (buff) {
          if (/image/.test(mime)) {
            content = {
              image: buff,
              caption: !isGroup ? cap : text,
            };
          } else if (/video/.test(mime)) {
            content = {
              video: buff,
              caption: !isGroup ? cap : text,
            };
          } else if (/audio/.test(mime)) {
            content = {
              audio: buff,
              mimetype: "audio/ogg",
            };
          }
        } else {
          if (cap) {
            content = {
              text: !isGroup ? cap : text,
            };
          }
        }

        const inside = await baileys.generateWAMessageContent(content, {
          upload: EdogawaSenq.waUploadToServer,
        });

        const crypto = require("crypto");
        const messageSecret = crypto.randomBytes(32);

        const msg = baileys.generateWAMessageFromContent(
          !isGroup ? id : jid,
          {
            messageContextInfo: { messageSecret },
            groupStatusMessageV2: {
              message: {
                ...inside,
                messageContextInfo: { messageSecret },
              },
            },
          },
          {}
        );

        await EdogawaSenq.relayMessage(!isGroup ? id : jid, msg.message, {
          messageId: msg.key.id,
        });

        await sen(`Berhasil memgupload media ke status ${isGroup ? "Grub " + metadata[jid].subject : "Id Gc"} ✅`);
      } catch (e) {
        console.log(e);
        handleError(command, e);
      }
    }
    break;

case "leavegc":
    {
      if (!isOwner) return onlyOwner();
      if (!isGroup && !text) return sen(`Fitur tersebut hanya bisa di gunakan dalam grub!, atau kamu masukan id grub dengan ketik .${command} idgc`);
      if (isGroup) {
        await sen(`Proses keluar dari grub ${metadata[jid].subject}`);
        await EdogawaSenq.groupLeave(jid);
      } else {
        if (!metadata?.[text.clear()]) return sen(`Tolong masukan id grub yang ada di nomor kamu!`);
        let name = metadata[text.clear()].subject;
        await EdogawaSenq.groupLeave(text.clear());
        await sen(`Berhasil keluar dari grub ${name} ✅`);
      }
    }
    break;

case "delppgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      EdogawaSenq.removeProfilePicture(jid);
      await sen(`Berhasil menghapus foto profil grup. ✅`);
    }
    break;

case "setdesc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("text", "selamat datang");
      EdogawaSenq.groupUpdateDescription(jid, text);
      await sen(`Berhasil mengganti deskripsi grup. ✅`);
    }
    break;

case "promote":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text && !qSender) return example("@tag");
      let user = qSender || (await decode(text));
      let { subject } = metadata[jid];
      try {
        await EdogawaSenq.groupParticipantsUpdate(jid, [user], "promote");
        await sen(`Berhasil! @${user.getNumber()} sekarang menjadi admin di grup ${subject}. ✅`);
      } catch (e) {
        console.log(e);
        await sen(`Gagal menjadikan @${user.getNumber()} sebagai admin di grup ${subject}.`);
      }
    }
    break;

case "setppgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!/image/.test(mime)) return await sen("Gunakan command tersebut sambil reply foto / gunakan di caption foto");
      let { subject } = metadata[jid];
      let y = await downloadToBuffer(media);
      await EdogawaSenq.updateProfilePicture(jid, y);
      await sen(`Berhasil mengganti foto profil grup ${subject}. ✅`);
    }
    break;

case "hidetag":
    {
      if (!isGroup) return onlyGrup();
      if (!isOwner && !isAdmin) return onlyOwner();
      let { participants } = metadata[jid];
      EdogawaSenq.sendMessage(
        jid,
        {
          text: text || qBody || `Halo`,
          mentions: participants.map((i) => i.jid),
        },
        { quoted: m }
      );
    }
    break;

case "antibot":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antibot.push(jid);
        await sen(`Berhasil menyalakan *Anti Bot* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antibot = db.antibot.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Bot* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antibot`;
        if (db.antibot.length === 0) p += `\n${leftStyle} Tidak ada antibot`;
        db.antibot.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antidel":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antidel.push(jid);
        await sen(`Berhasil menyalakan *Anti Delete* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antidel = db.antidel.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Delete* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antidel`;
        if (db.antidel.length === 0) p += `\n${leftStyle} Tidak ada antidel`;
        db.antidel.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "setpaygc":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (!isAdmin) return onlyAdmin();
        let [dana, ovo, gopay, linkqr] = text.split("|").map((i) => i.trim());
        if ([dana, ovo, gopay, linkqr].includes(undefined)) return example("dana|ovo|gopay|linkqr§kalo ga ada isi pake -");
        db.payment[jid] = {
          dana,
          ovo,
          gopay,
          linkqr,
        };
        saveDb();
        await sen(`Berhasil mengatur payment gc!, silahkan ketik .paygc untik melihat hasilnya ✅`);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "adminpay":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (!isAdmin) return onlyAdmin();
        if (!db.payment?.[jid]) return sen(`payment pada grub ini belum di set!, ketik .setpaygc dana|ovo|gopay|linkqr`);
        let pay = db.payment[jid];

        let isImg = pay.linkqr.startsWith("https") ? true : false;

        let txt = `${b3}
${mHeader("Pay Gc")}
${leftStyle} Dana  : ${pay.dana}
${leftStyle} Ovo   : ${pay.ovo}
${leftStyle} Gopay : ${pay.gopay}
${leftStyle} Qris  : ${isImg ? "Scan di atas" : "Tidak ada"}
${botStyle}
${b3}`;
        if (isImg) {
          await sendMedia(pay.linkqr, txt);
        } else {
          await sen(txt);
        }
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "antifoto":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antifoto.push(jid);
        await sen(`Berhasil menyalakan *Anti Foto* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antifoto = db.antifoto.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Foto* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antifoto`;
        if (db.antifoto.length === 0) p += `\n${leftStyle} Tidak ada antifoto`;
        db.antifoto.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antiwame":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antiwame.push(jid);
        await sen(`Berhasil menyalakan *Anti Wa.me* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antiwame = db.antiwame.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Wa.me* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antiwame`;
        if (db.antiwame.length === 0) p += `\n${leftStyle} Tidak ada antiwame`;
        db.antiwame.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "delwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("kunyuk");
      db.bad = db.bad.filter((i) => i !== text.trim());
      saveDb();
      sen(`Berhasil menghapus "${text}" dari anti badwords`);
    }
    break;

case "addwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("kunyuk");
      db.bad.push(text.trim());
      saveDb();
      sen(`Berhasil menambahkan "${text}" ke anti badwords, ketik .antibadwords on untuk menyalakan nya `);
    }
    break;

case "wellcome":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.wellcome.push(jid);
        await sen(`Berhasil menyalakan *Wellcome* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.wellcome = db.wellcome.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Wellcome* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} Wellcome`;
        if (db.wellcome.length === 0) p += `\n${leftStyle} Tidak ada Wellcome`;
        db.wellcome.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "kudetagc":
    {
      if (!isOwner) return await onlyOwner();
      if (!text) return await example("id gc", "99999999999@g.us");
      let groupMetadata = metadata?.[text.clear()];
      if (!groupMetadata) return await sen(`Id grub tidak valid!, masukan id grub dari .listgc dan pilih grub yang mau di kudeta`);

      let memberFilter = groupMetadata.participants.map((v) => v.lid).filter((e) => e !== botNumber && e !== sender);
      if (memberFilter.length < 1) return await sen("Grup Ini Sudah Tidak Ada Member lain!");
      await sen(`Memproses kudeta di grub "${groupMetadata.subject}" total ${memberFilter.length} member`);
      for (let i of memberFilter) {
        await EdogawaSenq.groupParticipantsUpdate(text.clear(), [i], "remove");
        await sleep(2500);
      }
      EdogawaSenq.groupUpdateSubject(text.clear(), "Kudeta GC by Lili");
      EdogawaSenq.groupUpdateDescription(text.clear(), "Kudeta GC by Lili");
      try {
        let pp = await EdogawaSenq.profilePictureUrl(sender, "image");
        let buff = await getBuffer(pp);
        await EdogawaSenq.updateProfilePicture(text.clear(), buff);
      } catch (e) {}

      await sen(`Berhasil kudeta di grub "${groupMetadata.subject}" total ${memberFilter.length} member`);
    }
    break;

case "opentime":
    {
      if (!isGroup) return await onlyGrup();
      if (!isAdmin) return await onlyAdmin();
      let [time, second] = text.split(" ");
      if (second == "detik") {
        var timer = time * `1000`;
      } else if (second == "menit") {
        var timer = time * `60000`;
      } else if (second == "jam") {
        var timer = time * `3600000`;
      } else if (second == "hari") {
        var timer = time * `86400000`;
      } else {
        return sen("contoh :\n.opentime 1 detik\n.opentime 1 menit\n.opentime 1 jam\n.opentime 1 hari");
      }
      await sen(`Open Time di mulai dari sekarang!, grub bakal di buka dalam ${time} ${second} kedepan`);
      setTimeout(async () => {
        let txt = `Open time telah tiba!, terimakasih sudah menunggu selama ${time} ${second}`;
        EdogawaSenq.groupSettingUpdate(jid, "not_announcement");
        await sen(txt);
      }, timer);
    }
    break;

case "setleave":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("Text Leave§\nInfo\n@user > tag member yang masuk\n@subject > nama grub\n@desc > deskripsi grub\n@time > waktu upate");
      db.setleft[jid] = text.toString("base64");
      saveDb();
      await sen(`Berhasil mengatur text set leave di grub ini ✅`, jid, false, getValidButtonReply([["Nyalakan wellcome", ".wellcome on"]]));
    }
    break;

case "delleave":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!db.setleft.includes(jid)) return sen(`Grub ini belum ada text set leave!`);
      delete db.setleft[jid];
      saveDb();
      await sen(`Berhasil menghapus text set leave pada grub ini ✅`);
    }
    break;

case "antinsfw":
    {
      if (!isOwner) return onlyOwner();
      if (text.clear() === "on") {
        db.antinsfw = true;
        saveDb();
        await sen("Berhasil menyalakan anti cmd nsfw ✅");
      } else if (text.clear() === "off") {
        db.antinsfw = false;
        saveDb();
        await sen("Berhasil mematikan anti cmd nsfw ✅");
      } else return example("on / off");
    }
    break;

case "setnamagc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("nama");
      await EdogawaSenq.groupUpdateSubject(jid, text);
      await sen(`Berhasil mengganti nama grup menjadi ${text}. ✅`);
    }
    break;

case "antivideo":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antivideo.push(jid);
        await sen(`Berhasil menyalakan *Anti Video* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antivideo = db.antivideo.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Video* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antivideo`;
        if (db.antivideo.length === 0) p += `\n${leftStyle} Tidak ada antivideo`;
        db.antivideo.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antiaudio":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antiaudio.push(jid);
        await sen(`Berhasil menyalakan *Anti Audio* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antiaudio = db.antiaudio.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Audio* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antiaudio`;
        if (db.antiaudio.length === 0) p += `\n${leftStyle} Tidak ada antiaudio`;
        db.antiaudio.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antiinout":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.inout.push(jid);
        await sen(`Berhasil menyalakan *Anti In Out* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.inout = db.inout.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti In Out* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} Anti In Out`;
        if (db.inout.length === 0) p += `\n${leftStyle} Tidak ada Anti In Out`;
        db.inout.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "listwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();

      sen(`${b3}
${mHeader("List Bad Words")}
${db.bad.map((i) => `${leftStyle} ${i}\n`)}${b3}`);
    }
    break;

case "onlyadmin":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.onlyadmin.push(jid);
        await sen(`Berhasil menyalakan *onlyadmin* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.onlyadmin = db.onlyadmin.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *onlyadmin* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} onlyadmin`;
        if (db.onlyadmin.length === 0) p += `\n${leftStyle} Tidak ada onlyadmin`;
        db.onlyadmin.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antitoxic":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antitoxic.push(jid);
        await sen(`Berhasil menyalakan *Anti Toxic* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antitoxic = db.antitoxic.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Toxic* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antitoxic`;
        if (db.antitoxic.length === 0) p += `\n${leftStyle} Tidak ada antitoxic`;
        db.antitoxic.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antitagsw":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antitagsw.push(jid);
        await sen(`Berhasil menyalakan *Anti Tag Sw* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antitagsw = db.antitagsw.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Tag Sw* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antitagsw`;
        if (db.antitagsw.length === 0) p += `\n${leftStyle} Tidak ada antitagsw`;
        db.antitagsw.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "closetime":
    {
      if (!isGroup) return await onlyGrup();
      if (!isAdmin) return await onlyAdmin();
      let [time, second] = text.split(" ");
      if (second == "detik") {
        var timer = time * `1000`;
      } else if (second == "menit") {
        var timer = time * `60000`;
      } else if (second == "jam") {
        var timer = time * `3600000`;
      } else if (second == "hari") {
        var timer = time * `86400000`;
      } else {
        return sen("contoh :\n.closetime 1 detik\n.closetime 1 menit\n.closetime 1 jam\n.closetime1 hari");
      }
      await sen(`Close Time di mulai dari sekarang!, grub bakal di tutup dalam ${time} ${second} kedepan`);
      setTimeout(async () => {
        let txt = `Close time telah tiba!, terimakasih sudah menunggu selama ${time} ${second}`;
        EdogawaSenq.groupSettingUpdate(jid, "announcement");
        await sen(txt);
      }, timer);
    }
    break;

case "antilinkgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkgc.push(jid);
        await sen(`Berhasil menyalakan *Anti Link Grub* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkgc = db.antilinkgc.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link Grub* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} AntiLinkGC`;
        if (db.antilinkgc.length === 0) p += `\n${leftStyle} Tidak ada AntiLinkGc`;
        db.antilinkgc.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinkig":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkig.push(jid);
        await sen(`Berhasil menyalakan *Anti Link IG* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkig = db.antilinkig.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link IG* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} AntiLinkIG`;
        if (db.antilinkig.length === 0) p += `\n${leftStyle} Tidak ada antilinkig`;
        db.antilinkig.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinkch":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkch.push(jid);
        await sen(`Berhasil menyalakan *Anti Link CH* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkch = db.antilinkch.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link CH* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antilinkch`;
        if (db.antilinkch.length === 0) p += `\n${leftStyle} Tidak ada antilinkch`;
        db.antilinkch.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinktt":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinktt.push(jid);
        await sen(`Berhasil menyalakan *Anti Link TT* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinktt = db.antilinktt.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link TT* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} AntiLinkTT`;
        if (db.antilinktt.length === 0) p += `\n${leftStyle} Tidak ada antilinktt`;
        db.antilinktt.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinkyt":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkyt.push(jid);
        await sen(`Berhasil menyalakan *Anti Link YT* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkyt = db.antilinkyt.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link YT* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} AntiLinkYT`;
        if (db.antilinkyt.length === 0) p += `\n${leftStyle} Tidak ada antilinkyt`;
        db.antilinkyt.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinkfb":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkfb.push(jid);
        await sen(`Berhasil menyalakan *Anti Link FB* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkfb = db.antilinkfb.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link FB* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} AntiLinkFB`;
        if (db.antilinkfb.length === 0) p += `\n${leftStyle} Tidak ada antilinkfb`;
        db.antilinkfb.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "setwelcome":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("Text Wellcome§\nInfo\n@user > tag member yang masuk\n@subject > nama grub\n@desc > deskripsi grub\n@time > waktu upate");

      let value = text.toString("base64");
      let image = "";
      try {
        image = media ? await imageToUrl(await downloadToBuffer(media)) : "";
      } catch (e) {
        image = undefined;
      }

      db.setwellcome[jid] = {
        image,
        value,
      };
      saveDb();
      await sen(`Berhasil mengatur text set wellcome di grub ini ✅`, jid, false, getValidButtonReply([["Nyalakan wellcome", ".wellcome on"]]));
    }
    break;

case "delwelcome":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!db.setwellcome.includes(jid)) return sen(`Grub ini belum ada text set wellcome!`);
      delete db.setwellcome[jid];
      saveDb();
      await sen(`Berhasil menghapus text set wellcome pada grub ini ✅`);
    }
    break;

case "setpayadmin":
    {
      try {
        if (!isGroup) return onlyGrup();
        if (!isAdmin) return onlyAdmin();
        let [dana, ovo, gopay, linkqr] = text.split("|").map((i) => i.trim());
        if ([dana, ovo, gopay, linkqr].includes(undefined)) return example("dana|ovo|gopay|linkqr§kalo ga ada isi pake -");
        db.payment[jid] = {
          dana,
          ovo,
          gopay,
          linkqr,
        };
        saveDb();
        await sen(`Berhasil mengatur payment gc!, silahkan ketik .paygc untik melihat hasilnya ✅`);
      } catch (e) {
        sena(e.message);
      }
    }
    break;

case "resetlinkgc":
    {
      if (!isGroup) return onlyGrup();
      if (!isBotAdmin) return onlyBotAdmin();
      if (!isAdmin) return onlyAdmin();
      EdogawaSenq.groupRevokeInvite(jid);
      await sen(`Berhasil mereset link grup. ✅`);
    }
    break;

case "antisticker":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antisticker.push(jid);
        await sen(`Berhasil menyalakan *Anti Sticker* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antisticker = db.antisticker.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Sticker* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antisticker`;
        if (db.antisticker.length === 0) p += `\n${leftStyle} Tidak ada antisticker`;
        db.antisticker.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antilinkall":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antilinkall.push(jid);
        await sen(`Berhasil menyalakan *Anti Link All* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antilinkall = db.antilinkall.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Link All* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antilinkall`;
        if (db.antilinkall.length === 0) p += `\n${leftStyle} Tidak ada antilinkall`;
        db.antilinkall.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antisharech":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antisharech.push(jid);
        await sen(`Berhasil menyalakan *Anti Share Ch* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antisharech = db.antisharech.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Share Ch* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antisharech`;
        if (db.antisharech.length === 0) p += `\n${leftStyle} Tidak ada antisharech`;
        db.antisharech.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "delbadwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("kunyuk");
      db.bad = db.bad.filter((i) => i !== text.trim());
      saveDb();
      sen(`Berhasil menghapus "${text}" dari anti badwords`);
    }
    break;

case "addbadwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("kunyuk");
      db.bad.push(text.trim());
      saveDb();
      sen(`Berhasil menambahkan "${text}" ke anti badwords, ketik .antibadwords on untuk menyalakan nya `);
    }
    break;

case "setwellcome":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!text) return example("Text Wellcome§\nInfo\n@user > tag member yang masuk\n@subject > nama grub\n@desc > deskripsi grub\n@time > waktu upate");

      let value = text.toString("base64");
      let image = "";
      try {
        image = media ? await imageToUrl(await downloadToBuffer(media)) : "";
      } catch (e) {
        image = undefined;
      }

      db.setwellcome[jid] = {
        image,
        value,
      };
      saveDb();
      await sen(`Berhasil mengatur text set wellcome di grub ini ✅`, jid, false, getValidButtonReply([["Nyalakan wellcome", ".wellcome on"]]));
    }
    break;

case "delwellcome":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (!db.setwellcome.includes(jid)) return sen(`Grub ini belum ada text set wellcome!`);
      delete db.setwellcome[jid];
      saveDb();
      await sen(`Berhasil menghapus text set wellcome pada grub ini ✅`);
    }
    break;

case "antibadwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antibadwords.push(jid);
        await sen(`Berhasil menyalakan *Anti Bad Words* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antibadwords = db.antibadwords.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Bad Wordz* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antibadwords`;
        if (db.antibadwords.length === 0) p += `\n${leftStyle} Tidak ada antibadwords`;
        db.antibadwords.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "listbadwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();

      sen(`${b3}
${mHeader("List Bad Words")}
${db.bad.map((i) => `${leftStyle} ${i}\n`)}${b3}`);
    }
    break;

case "antibadswords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antibadwords.push(jid);
        await sen(`Berhasil menyalakan *Anti Bad Words* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antibadwords = db.antibadwords.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Bad Wordz* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antibadwords`;
        if (db.antibadwords.length === 0) p += `\n${leftStyle} Tidak ada antibadwords`;
        db.antibadwords.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "antibaddwords":
    {
      if (!isGroup) return onlyGrup();
      if (!isAdmin) return onlyAdmin();
      if (text?.clear() === "on") {
        db.antibadwords.push(jid);
        await sen(`Berhasil menyalakan *Anti Bad Words* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "off") {
        db.antibadwords = db.antibadwords.filter((i) => i !== jid);
        await sen(`Berhasil mematikan *Anti Bad Wordz* di grub ${groups.subject} ✅`);
        saveDb();
      } else if (text?.clear() === "list") {
        let p = `${b3}
${topStyle} antibadwords`;
        if (db.antibadwords.length === 0) p += `\n${leftStyle} Tidak ada antibadwords`;
        db.antibadwords.forEach((i) => {
          if (metadata[i]) {
            p += `\n${leftStyle} - ${groups.subject}`;
          }
        });
        p += `
${botStyle}
${b3}`;
        await sen(p);
      } else {
        example("on∆off∆list");
      }
    }
    break;

case "dadu":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let hasil = Math.floor(Math.random() * 6) + 1;
      await sen(`Hasil lempah dadu : ${hasil}`);
      reduceLimit();
    }
    break;

case "tanya":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("pertanyaan");

      let jawaban = ["iya", "nggak", "mungkin", "kayaknya sih iya", "bisa jadi", "kurang tau juga", "tergantung", "kadang iya kadang nggak", "ya gitu deh", "hmm bisa aja", "ga yakin juga", "percaya nggak percaya", "mungkin iya mungkin juga nggak", "siapa tau", "bisa iya bisa enggak", "nggak sepenuhnya", "kayaknya nggak deh", "ya... bisa jadi", "rahasia"];

      let hasil = pickRandom(jawaban);
      let message = `${b3}
${topStyle} Tanya
${leftStyle} Pertanyaan : ${text.trim()}
${leftStyle} Jawaban    : ${hasil}
${botStyle}
${b3}`;
      await sen(message);
      reduceLimit();
    }
    break;

case "waktu":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let waktu = new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      await sen(waktu);
      reduceLimit();
    }
    break;

case "cekgay":
    {
      await caseCekCek(command);
    }
    break;

case "cekwibu":
    {
      await caseCekCek(command);
    }
    break;

case "cekpuqi":
    {
      await caseCekCek(command);
    }
    break;

case "cekbuta":
    {
      await caseCekCek(command);
    }
    break;

case "cekpedo":
    {
      await caseCekCek(command);
    }
    break;

case "cekdosa":
    {
      await caseCekCek(command);
    }
    break;

case "cekkaya":
    {
      await caseCekCek(command);
    }
    break;

case "cekhalu":
    {
      await caseCekCek(command);
    }
    break;

case "cekhoki":
    {
      await caseCekCek(command);
    }
    break;

case "cekgaul":
    {
      await caseCekCek(command);
    }
    break;

case "cekcupu":
    {
      await caseCekCek(command);
    }
    break;

case "cekbaik":
    {
      await caseCekCek(command);
    }
    break;

case "cekhama":
    {
      await caseCekCek(command);
    }
    break;

case "cekimut":
    {
      if (!text) return example("nama");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let p = Math.floor(Math.random() * 100);
      let txt = "";

      if (p >= 80) {
        txt = "Wah, kamu memang super imut! Ada yang nggak bisa berhenti tersenyum melihatmu! 😍";
      } else if (p >= 60) {
        txt = "Imut banget! Tapi masih ada yang bisa lebih imut dari kamu, mungkin nanti di level berikutnya! 😊";
      } else if (p >= 40) {
        txt = "Hihi, kamu agak imut, tapi perlu sedikit sentuhan! 😉";
      } else if (p >= 20) {
        txt = "Hmm, imut sih, tapi masih ada yang lebih! Lebih banyak senyum yuk! 😄";
      } else {
        txt = "Gak imut banget, tapi dengan sedikit usaha kamu bisa jadi lebih imut kok! 😜";
      }

      let pu = `${b3}
${topStyle} ${command}
${leftStyle} Nama : ${text}
${leftStyle} Poin : ${p}/100
${botStyle}
${b3}
*${txt}*`;

      await sen(pu);
      reduceLimit();
    }
    break;

case "cekumur":
    {
      if (!text) return example("2000-05-15");
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const birthDate = new Date(text.trim());
      if (birthDate == "Invalid Date") return example("2000-05-15");

      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      let txt = `${b3}
${topStyle} Cek umur
${leftStyle} Tahun : ${text.split("-")[0]}
${leftStyle} Bulan : ${text.split("-")[1]}
${leftStyle} Hari  : ${text.split("-")[2]}
${leftStyle} Umur  : ${years} tahun, ${months} bulan, ${days} hari.
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "ceknama":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("nama");
      let skor = Math.floor(Math.random() * 101);
      let txt = `${b3}
${topStyle} Cek Nama
${leftStyle} Nama  : ${text}
${leftStyle} Score : ${skor}/100
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "cekmood":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("name");
      let moods = ["Happy 😊", "Sedih 😢", "Marah 😡", "Santai 😌", "Bingung 🤔"];
      let mood = moods[Math.floor(Math.random() * moods.length)];
      let message = `${b3}
${topStyle} cek mood
${leftStyle} Nama : ${text.trim()}
${leftStyle} Mood : ${mood}
${botStyle}
${b3}`;
      await sen(message);
      reduceLimit();
    }
    break;

case "ramalan":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("nama");
      var ramalan = ["Hari ini akan menjadi hari keberuntunganmu!", "Berhati-hatilah dengan keputusan besar hari ini.", "Ada seseorang yang merindukanmu diam-diam.", "Kesempatan baru akan datang, jangan ragu untuk mengambilnya.", "Tetap semangat meskipun ada tantangan kecil hari ini."];
      var hasil = ramalan[Math.floor(Math.random() * ramalan.length)];
      let message = `${b3}
${topStyle} ramalan
${leftStyle} Nama    : ${text.trim()}
${leftStyle} Ramalan : ${hasil}
${botStyle}
${b3}`;
      await sen(message);
      reduceLimit();
    }
    break;

case "cekculun":
    {
      await caseCekCek(command);
    }
    break;

case "cekdajal":
    {
      await caseCekCek(command);
    }
    break;

case "cekcacat":
    {
      await caseCekCek(command);
    }
    break;

case "cekwangi":
    {
      await caseCekCek(command);
    }
    break;

case "cekreceh":
    {
      await caseCekCek(command);
    }
    break;

case "cekdongo":
    {
      await caseCekCek(command);
    }
    break;

case "ceksadis":
    {
      await caseCekCek(command);
    }
    break;

case "cekjahat":
    {
      await caseCekCek(command);
    }
    break;

case "cektolol":
    {
      await caseCekCek(command);
    }
    break;

case "cekbodoh":
    {
      await caseCekCek(command);
    }
    break;

case "cekgamer":
    {
      await caseCekCek(command);
    }
    break;

case "ceksetia":
    {
      await caseCekCek(command);
    }
    break;

case "cekstres":
    {
      await caseCekCek(command);
    }
    break;

case "ceklesbi":
    {
      await caseCekCek(command);
    }
    break;

case "cekjujur":
    {
      await caseCekCek(command);
    }
    break;

case "cekfisik":
    {
      await caseCekCek(command);
    }
    break;

case "cekjomok":
    {
      await caseCekCek(command);
    }
    break;

case "cekbaper":
    {
      await caseCekCek(command);
    }
    break;

case "ceksange":
    {
      await caseCekCek(command);
    }
    break;

case "ceknguli":
    {
      await caseCekCek(command);
    }
    break;

case "cekbucin":
    {
      await caseCekCek(command);
    }
    break;

case "cekfreak":
    {
      await caseCekCek(command);
    }
    break;

case "cekseram":
    {
      await caseCekCek(command);
    }
    break;

case "cekkocak":
    {
      await caseCekCek(command);
    }
    break;

case "cekcocok":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let [nama1, nama2] = text.split(",");
      if (!nama1 || !nama2) return example("senq, ruby");
      let skor = Math.floor(Math.random() * 101);
      let txt = `${b3}
${topStyle} cek cocok
${leftStyle} Nama : ${nama1.trim()}
${leftStyle} Nama : ${nama2.trim()}
${leftStyle} Poin : ${skor}/100
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "cekmemek":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("nama");
      let ukuran = Math.floor(Math.random() * 35);
      let warna = pickRandom(["merah", "coklat", "pink", "hitam"]);
      let jembut = pickRandom(["rontok", "mayan", "lebat", "lebat gila"]);

      let txt = `${b3}
${topStyle} Cek Memek
${leftStyle} Nama    : ${text.trim()}
${leftStyle} dalem   : ${ukuran} cm
${leftStyle} jembut  : ${jembut}
${leftStyle} Warna   : ${warna}
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "prediksi":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      var prediksi = ["Besok adalah hari keberuntunganmu.", "Akan ada kejutan manis di minggu depan.", "Seseorang diam-diam mengagumimu.", "Kamu akan menemukan solusi untuk masalah yang sedang dihadapi.", "Cobalah sesuatu yang baru, itu akan membawa kebahagiaan."];
      let hasil = prediksi[Math.floor(Math.random() * prediksi.length)];
      await sen(hasil);
      reduceLimit();
    }
    break;

case "cekjodoh":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!isGroup) return onlyGrup();
      if (!text) return example("nama");

      let { participants } = metadata[jid];
      let jodoh = pickRandom(participants.map((i) => i.jid));
      await sen(`${text} ♥ @${jodoh.getNumber()}`);
      reduceLimit();
    }
    break;

case "cekspooky":
    {
      await caseCekCek(command);
    }
    break;

case "cekbangke":
    {
      await caseCekCek(command);
    }
    break;

case "cekanjing":
    {
      await caseCekCek(command);
    }
    break;

case "cekjancok":
    {
      await caseCekCek(command);
    }
    break;

case "cekmonyet":
    {
      await caseCekCek(command);
    }
    break;

case "cekgoblok":
    {
      await caseCekCek(command);
    }
    break;

case "cekcantik":
    {
      await caseCekCek(command);
    }
    break;

case "cekpintar":
    {
      await caseCekCek(command);
    }
    break;

case "cekmiskin":
    {
      await caseCekCek(command);
    }
    break;

case "cekbadboy":
    {
      await caseCekCek(command);
    }
    break;

case "cekdingin":
    {
      await caseCekCek(command);
    }
    break;

case "jkt48news":
    {
      let news = pickRandom([
        {
          title: "Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Theater Ramadan Event 2025” dengan bonus Video Call with JKT48",
          link: "https://jkt48.com/news/detail/id/1906?lang=id",
          date: "10 April 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai akun SHOWROOM & IDN Live Member Generasi 13 JKT48",
          link: "https://jkt48.com/news/detail/id/1905?lang=id",
          date: "28 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat8.png",
        },
        {
          title: "Pengumuman Mengenai Birthday 2-Shot Online bulan April dengan Chekicha",
          link: "https://jkt48.com/news/detail/id/1904?lang=id",
          date: "19 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat5.png",
        },
        {
          title: "Pengumuman Mengenai 11th Anniversary Generasi 3 JKT48 Party!",
          link: "https://jkt48.com/news/detail/id/1902?lang=id",
          date: "14 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat2.png",
        },
        {
          title: "Pengumuman Mengenai Penjualan Digital Wallpaper Pack “Patroli Sahur: Idol Style!!” dengan bonus Video Call with JKT48 Virtual",
          link: "https://jkt48.com/news/detail/id/1901?lang=id",
          date: "12 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai Video Call Pengganti Lulu Salsabila",
          link: "https://jkt48.com/news/detail/id/1900?lang=id",
          date: "9 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai Pre-Order Digital Photobook “Heart & Harmony” dengan bonus Video Call with JKT48",
          link: "https://jkt48.com/news/detail/id/1899?lang=id",
          date: "7 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman mengenai 2025 JKT48 Ramadan Event Live Stream Charity",
          link: "https://jkt48.com/news/detail/id/1898?lang=id",
          date: "6 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat2.png",
        },
        {
          title: "Pengumuman Mengenai Pengunduran Diri Flora Shafiq dari JKT48",
          link: "https://jkt48.com/news/detail/id/1897?lang=id",
          date: "5 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat8.png",
        },
        {
          title: "Pengumuman Mengenai Birthday 2-Shot Online bulan Maret dengan Chekicha",
          link: "https://jkt48.com/news/detail/id/1896?lang=id",
          date: "3 Maret 2025",
          icon: "https://jkt48.com/images/icon.cat5.png",
        },
        {
          title: "Pengumuman Mengenai Aktivitas Teater JKT48 Selama Bulan Ramadan 2025",
          link: "https://jkt48.com/news/detail/id/1895?lang=id",
          date: "28 Februari 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai Video Call Pengganti Letycia Moreen",
          link: "https://jkt48.com/news/detail/id/1894?lang=id",
          date: "22 Februari 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai JKT48 Virtual Solo 3D Show",
          link: "https://jkt48.com/news/detail/id/1893?lang=id",
          date: "21 Februari 2025",
          icon: "https://jkt48.com/images/icon.cat2.png",
        },
        {
          title: "Pengumuman Mengenai Trial Video Call bersama Member JKT48 Generasi 13",
          link: "https://jkt48.com/news/detail/id/1892?lang=id",
          date: "20 Februari 2025",
          icon: "https://jkt48.com/images/icon.cat1.png",
        },
        {
          title: "Pengumuman Mengenai Audisi JKT48 Virtual Generasi Ke-2",
          link: "https://jkt48.com/news/detail/id/1891?lang=id",
          date: "20 Februari 2025",
          icon: "https://jkt48.com/images/icon.cat8.png",
        },
      ]);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let txt = `${b3}
${topStyle} JKT 48 News
${leftStyle} Title : ${news.title}
${leftStyle} Date  : ${news.date}
${leftStyle} Link  : ${news.link}
${botStyle}
${b3}`;
      await sendMedia(news.icon, txt);
      reduceLimit();
    }
    break;

case "cekkontol":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("nama");
      let ukuran = Math.floor(Math.random() * 35);
      let warna = pickRandom(["merah", "coklat", "pink", "hitam"]);
      let jembut = pickRandom(["rontok", "mayan", "lebat", "lebat gila"]);

      let txt = `${b3}
${topStyle} Cek Kontol
${leftStyle} Nama    : ${text.trim()}
${leftStyle} Ukuran  : ${ukuran} cm
${leftStyle} jembut  : ${jembut}
${leftStyle} Warna   : ${warna}
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "cekzodiak":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let [bulan, tanggal] = text.split("|").map(Number);
      if (isNaN(tanggal) || isNaN(bulan) || tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12) return example("bulan | hari");

      let zodiak;
      if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18)) zodiak = "Aquarius";
      else if ((bulan == 2 && tanggal >= 19) || (bulan == 3 && tanggal <= 20)) zodiak = "Pisces";
      else if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19)) zodiak = "Aries";
      else if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20)) zodiak = "Taurus";
      else if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 20)) zodiak = "Gemini";
      else if ((bulan == 6 && tanggal >= 21) || (bulan == 7 && tanggal <= 22)) zodiak = "Cancer";
      else if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22)) zodiak = "Leo";
      else if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22)) zodiak = "Virgo";
      else if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22)) zodiak = "Libra";
      else if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21)) zodiak = "Scorpio";
      else if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21)) zodiak = "Sagittarius";
      else zodiak = "Capricorn";

      let message = `${b3}
${topStyle} cek zodiak
${leftStyle} Bulan   : ${bulan}
${leftStyle} Tanggal : ${tanggal}
${leftStyle} Zodiak  : ${zodiak}
${botStyle}
${b3}`;
      await sen(message);
      reduceLimit();
    }
    break;

case "cekkhodam":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("nama");

      const kodam = pickRandom(["Macan Tutul", "Gajah Sumatera", "Orangutan", "Harimau Putih", "Badak Jawa", "Pocong", "Kuntilanak", "Genderuwo", "Wewe Gombel", "Kuyang", "Lembuswana", "Anoa", "Komodo", "Elang Jawa", "Burung Cendrawasih", "Tuyul", "Babi Ngepet", "Sundel Bolong", "Jenglot", "Lele xenriang", "Kucing Hutan", "Ayam Cemani", "Cicak", "Burung Merak", "Kuda Lumping", "Buaya Muara", "Banteng Jawa", "Monyet Ekor Panjang", "Tarsius", "Cenderawasih Biru", "Setan Merah", "Kolor Ijo", "Palasik", "Nyi Roro Kidul", "Siluman Ular", "Kelabang", "Beruang Madu", "Serigala", "Hiu Karang", "Rajawali", "Lutung Kasarung", "Kuda Sumba", "Ikan Arwana", "Jalak Bali", "Kambing Etawa", "Kelelawar", "Burung Hantu", "Ikan Cupang"]);
      const damping = pickRandom(["1 tahun lalu", "2 tahun lalu", "3 tahun lalu", "4 tahun lalu", "lahir"]);
      const txt = `${b3}
${topStyle} Cek Khodam
${leftStyle} User   : ${text}
${leftStyle} Khdowm : ${kodam}
${leftStyle} dari   : ${damping}
${botStyle}
${b3}`;

      await sen(txt);
      reduceLimit();
    }
    break;

case "cekbangsat":
    {
      await caseCekCek(command);
    }
    break;

case "cekplenger":
    {
      await caseCekCek(command);
    }
    break;

case "cekngambis":
    {
      await caseCekCek(command);
    }
    break;

case "cekdepresi":
    {
      await caseCekCek(command);
    }
    break;

case "randomjoke":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const jokes = ["Kenapa komputer nggak bisa berbohong? Karena dia punya banyak cache.", "Apa yang kamu sebut dengan kucing yang tahu banyak? Kucing pintar!", "Saya baru saja kehilangan kunci saya... apakah kamu melihatnya di tempat parkir?", "Apa yang terjadi ketika dua atom bertemu? Mereka berikatan!", "Apa yang paling baik dilakukan saat kamu cemas? Nonton film atau baca buku!"];

      let randomJoke = pickRandom(jokes);
      await sen(randomJoke);
      reduceLimit();
    }
    break;

case "randomfact":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const facts = ["Fakta: Gajah adalah satu-satunya hewan yang tidak bisa melompat.", "Fakta: Bulan tidak memiliki atmosfer.", "Fakta: Manusia dan domba berbagi lebih dari 80% DNA yang sama.", "Fakta: Di dalam tubuh manusia ada lebih dari 60.000 mil pembuluh darah.", "Fakta: Kucing dapat membuat lebih dari 100 suara berbeda."];

      let randomFact = pickRandom(facts);
      await sen(randomFact);
      reduceLimit();
    }
    break;

case "quotesanim":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let res = await await fetch("https://katanime.vercel.app/api/getrandom?limit=1");
      if (!res.ok) {
        return await res.text();
      }
      let json = await res.json();
      if (!json.result[0]) {
        return json;
      }
      let { indo, character, anime } = json.result[0];

      let txt = `${b3}
${mHeader("Quotes Anime")}
${leftStyle} Indo   : ${indo}
${leftStyle} Author : ${character}
${leftStyle} Anime  : ${anime}
${lines}
${b3}`;

      await sen(anime);
      reduceLimit();
    }
    break;

case "randomquote":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const quotes = ["Kehidupan ini singkat, jangan sia-siakan waktumu.", "KeBerhasilan adalah gabungan dari kegagalan dan ketekunan.", "Jangan berhenti sampai kamu bangga dengan dirimu.", "Bermimpilah setinggi langit, karena itu gratis!", "Jadilah versi terbaik dari dirimu sendiri."];

      let randomQuote = pickRandom(quotes);
      await sen(randomQuote);
      reduceLimit();
    }
    break;

case "randomcolor":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const colors = ["Merah", "Biru", "Hijau", "Kuning", "Hitam", "Putih", "Abu-abu", "Coklat", "Oranye", "Ungu"];

      let randomColor = pickRandom(colors);
      await sen(randomColor);
      reduceLimit();
    }
    break;

case "quotesanime":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let res = await await fetch("https://katanime.vercel.app/api/getrandom?limit=1");
      if (!res.ok) {
        return await res.text();
      }
      let json = await res.json();
      if (!json.result[0]) {
        return json;
      }
      let { indo, character, anime } = json.result[0];

      let txt = `${b3}
${mHeader("Quotes Anime")}
${leftStyle} Indo   : ${indo}
${leftStyle} Author : ${character}
${leftStyle} Anime  : ${anime}
${lines}
${b3}`;

      await sen(anime);
      reduceLimit();
    }
    break;

case "cekintrovert":
    {
      await caseCekCek(command);
    }
    break;

case "cekextrovert":
    {
      await caseCekCek(command);
    }
    break;

case "randomnumber":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      let range = text.split("|");
      let min = parseInt(range[0]);
      let max = parseInt(range[1]);
      if (!min || !max) return example("min, max");

      let randomNumber = random(min, max);
      let txt = `${b3} 
${topStyle} random number
${leftStyle} Minimal : ${min}
${leftStyle} Maximal : ${max}
${leftStyle} Result  : ${randomNumber}
${botStyle}
${b3}`;
      await sen(txt);
      reduceLimit();
    }
    break;

case "cekberuntung":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!text) return example("name");
      let luck = Math.floor(Math.random() * 101);
      let message = `${b3}
${topStyle} cek beruntung
${leftStyle} Nama  : ${text.trim()}
${leftStyle} Score : ${luck}/100
${botStyle}
${b3}`;
      await sen(message);
      reduceLimit();
    }
    break;

case "randomactivity":
    {
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      const activities = ["Cobalah untuk berjalan-jalan sebentar.", "Baca buku yang sudah lama kamu tinggalkan.", "Cobalah masak resep baru!", "Hubungi teman lama dan ajak ngobrol.", "Ambil beberapa menit untuk meditasi atau berolahraga ringan."];

      let randomActivity = pickRandom(activities);
      await sen(randomActivity);
      reduceLimit();
    }
    break;

case "topmsg":
    {
      if (!isGroup) return onlyGrup();
      let txt = `${b3}
${mHeader(command.capitalize())}
`;
      Object.entries(db.totalchat[jid])
        .sort((a, b) => b[1] - a[1])
        .forEach(([tag, total], idx) => {
          txt += `${leftStyle} [ ${idx} ] @${tag.getNumber()} x${total}\n`;
        });
      txt += `\n${lines}\n${b3}`;

      sen(txt);
    }
    break;

case "topafk":
    {
      try {
        let userTop = Object.entries(db.user).sort((a, b) => b[1].topAfk - a[1].topAfk);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.topAfk === 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User : @${id.getNumber()}
${leftStyle} Time : ${msToTime(obj.topAfk)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topold":
    {
      try {
        let userTop = Object.entries(db.user);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.limit === 0) return;
          let oldD = new Date(obj.old);
          let newD = new Date(getTimeOn(0));
          let gap = newD - oldD;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User  : @${id.getNumber()}
${leftStyle} Old   : ${msToTime(gap)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topcar":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsuv":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topvan":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbus":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topchat":
    {
      if (!isGroup) return onlyGrup();
      let txt = `${b3}
${mHeader(command.capitalize())}
`;
      Object.entries(db.totalchat[jid])
        .sort((a, b) => b[1] - a[1])
        .forEach(([tag, total], idx) => {
          txt += `${leftStyle} [ ${idx} ] @${tag.getNumber()} x${total}\n`;
        });
      txt += `\n${lines}\n${b3}`;

      sen(txt);
    }
    break;

case "topbank":
    {
      try {
        let userTop = Object.entries(db.user).sort((a, b) => b[1].bank - a[1].bank);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.bank === 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User : @${id.getNumber()}
${leftStyle} Bank : ${formatRupiah(obj.bank)} Coin
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topcoin":
    {
      try {
        let userTop = Object.entries(db.user).sort((a, b) => b[1].coin - a[1].coin);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.coin === 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User : @${id.getNumber()}
${leftStyle} Coin : ${formatRupiah(obj.coin)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topdaun":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbatu":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbulu":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkayu":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptaxi":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topular":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbesi":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topemas":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topship":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppesan":
    {
      if (!isGroup) return onlyGrup();
      let txt = `${b3}
${mHeader(command.capitalize())}
`;
      Object.entries(db.totalchat[jid])
        .sort((a, b) => b[1] - a[1])
        .forEach(([tag, total], idx) => {
          txt += `${leftStyle} [ ${idx} ] @${tag.getNumber()} x${total}\n`;
        });
      txt += `\n${lines}\n${b3}`;

      sen(txt);
    }
    break;

case "toplevel":
    {
      try {
        let userTop = Object.entries(db.user).sort((a, b) => b[1].level - a[1].level);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.level === 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User  : @${id.getNumber()}
${leftStyle} Level : ${formatRupiah(obj.level)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toplimit":
    {
      try {
        let userTop = Object.entries(db.user).sort((a, b) => b[1].limit - a[1].limit);
        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.limit === 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User  : @${id.getNumber()}
${leftStyle} Limit : ${formatRupiah(obj.limit)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbambu":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topjamur":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topcanoe":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toparang":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topjoran":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbusur":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkapak":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbacon":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppisau":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsteak":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toplapis":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptruck":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toplorry":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptrain":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topferry":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "totalchat":
    {
      if (!isGroup) return onlyGrup();
      let txt = `${b3}
${mHeader(command.capitalize())}
`;
      Object.entries(db.totalchat[jid])
        .sort((a, b) => b[1] - a[1])
        .forEach(([tag, total], idx) => {
          txt += `${leftStyle} [ ${idx} ] @${tag.getNumber()} x${total}\n`;
        });
      txt += `\n${lines}\n${b3}`;

      sen(txt);
    }
    break;

case "topgravel":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topcacing":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptulang":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topdaging":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbelati":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppickup":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsubway":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topdiorite":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topgranite":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topscooter":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbicycle":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topstation":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbeliung":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptractor":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsenapan":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topemerald":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topberlian":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptramcar":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topandesite":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topredstone":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topobsidian":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsailboat":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topmonorail":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topairplane":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topmotorbike":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppaha_ayam":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topparachute":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppolicecar":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topambulance":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topfiretruck":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topmotorboat":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topspeedboat":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topwheelchair":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "tophelicopter":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toptrolleybus":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_ayam":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_babi":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_rusa":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_sapi":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topbullettrain":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_tikus":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topautorickshaw":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topmotorscooter":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_burung":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_kelinci":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topkepala_beruang":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "toppassenger_ship":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topsmall_airplane":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "topmotor_wheelchair":
    {
      try {
        let cmd = command.replace("top", "");
        let userTop = Object.entries(db.user).sort((a, b) => b[1].inventory.items[cmd]?.count - a[1].inventory.items[cmd]?.count);

        let txt = ``;
        userTop.slice(0, 10).forEach(([id, obj], index) => {
          if (obj.inventory.items[cmd]?.count == 0) return;
          txt += `\n${b3}
${mHeader(`top ${index + 1}`)}
${leftStyle} User   : @${id.getNumber()}
${leftStyle} Total  : ${getShop()[cmd].emoji} x${formatRupiah(obj.inventory.items[cmd]?.count)}
${lines}
${b3}`;
        });
        if (txt === "") return await sen(`Tidak ada ${command} untuk saat ini!`);

        await sen(txt);
      } catch (e) {
        send(`Error ${command} : ${e.message}`);
      }
    }
    break;

case "l":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "cc":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "boa":
    {
      await caseAnime(command);
    }
    break;

case "rem":
    {
      await caseAnime(command);
    }
    break;

case "ram":
    {
      await caseAnime(command);
    }
    break;

case "yui":
    {
      await caseAnime(command);
    }
    break;

case "mai":
    {
      await caseAnime(command);
    }
    break;

case "mio":
    {
      await caseAnime(command);
    }
    break;

case "aoi":
    {
      await caseAnime(command);
    }
    break;

case "rin":
    {
      await caseAnime(command);
    }
    break;

case "gon":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "rei":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "mob":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "jet":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "ace":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "aki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "ryo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "nami":
    {
      await caseAnime(command);
    }
    break;

case "vivi":
    {
      await caseAnime(command);
    }
    break;

case "aqua":
    {
      await caseAnime(command);
    }
    break;

case "erza":
    {
      await caseAnime(command);
    }
    break;

case "lucy":
    {
      await caseAnime(command);
    }
    break;

case "cana":
    {
      await caseAnime(command);
    }
    break;

case "momo":
    {
      await caseAnime(command);
    }
    break;

case "mina":
    {
      await caseAnime(command);
    }
    break;

case "mako":
    {
      await caseAnime(command);
    }
    break;

case "yuih":
    {
      await caseAnime(command);
    }
    break;

case "holo":
    {
      await caseAnime(command);
    }
    break;

case "roxy":
    {
      await caseAnime(command);
    }
    break;

case "yuno":
    {
      await caseAnime(command);
    }
    break;

case "rias":
    {
      await caseAnime(command);
    }
    break;

case "asia":
    {
      await caseAnime(command);
    }
    break;

case "revy":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "misa":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "ryuk":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "eren":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "levi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "jean":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "goku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "zoro":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "giyu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "guts":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "baki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yato":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sora":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yugi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "seto":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hiei":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "gray":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "faye":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "riku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yuri":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "cell":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sabo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "king":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "dabi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "ging":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "scar":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "riuk":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yuji":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "gojo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "maki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "toge":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yuki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "miku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "asuna":
    {
      await caseAnime(command);
    }
    break;

case "annie":
    {
      await caseAnime(command);
    }
    break;

case "sasha":
    {
      await caseAnime(command);
    }
    break;

case "rukia":
    {
      await caseAnime(command);
    }
    break;

case "robin":
    {
      await caseAnime(command);
    }
    break;

case "juvia":
    {
      await caseAnime(command);
    }
    break;

case "tohka":
    {
      await caseAnime(command);
    }
    break;

case "iroha":
    {
      await caseAnime(command);
    }
    break;

case "shoko":
    {
      await caseAnime(command);
    }
    break;

case "kaori":
    {
      await caseAnime(command);
    }
    break;

case "chika":
    {
      await caseAnime(command);
    }
    break;

case "tsuyu":
    {
      await caseAnime(command);
    }
    break;

case "ryuko":
    {
      await caseAnime(command);
    }
    break;

case "azusa":
    {
      await caseAnime(command);
    }
    break;

case "ritsu":
    {
      await caseAnime(command);
    }
    break;

case "shiro":
    {
      await caseAnime(command);
    }
    break;

case "rikka":
    {
      await caseAnime(command);
    }
    break;

case "kumin":
    {
      await caseAnime(command);
    }
    break;

case "saber":
    {
      await caseAnime(command);
    }
    break;

case "akeno":
    {
      await caseAnime(command);
    }
    break;

case "julis":
    {
      await caseAnime(command);
    }
    break;

case "kanae":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "wendy":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "mavis":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "akame":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "leone":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "genos":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "felix":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hange":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shana":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "akane":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sango":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kyoko":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "armin":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "erwin":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "gohan":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "bulma":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "luffy":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sanji":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "usopp":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "brook":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sonic":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "muzan":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shoto":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hawks":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "gaara":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "winry":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "light":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "asuka":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "casca":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shoya":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "okita":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "natsu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "touka":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "okabe":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "senku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kairi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "asahi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kuroo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "majin":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "broly":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kaido":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "metal":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "drive":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "flash":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "denki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "greed":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "pride":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "wrath":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shoyo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tobio":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "panda":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "denji":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "power":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "akira":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kosei":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hinata":
    {
      await caseAnime(command);
    }
    break;

case "sakura":
    {
      await caseAnime(command);
    }
    break;

case "mikasa":
    {
      await caseAnime(command);
    }
    break;

case "ichigo":
    {
      await caseAnime(command);
    }
    break;

case "neliel":
    {
      await caseAnime(command);
    }
    break;

case "emilia":
    {
      await caseAnime(command);
    }
    break;

case "ultear":
    {
      await caseAnime(command);
    }
    break;

case "kurumi":
    {
      await caseAnime(command);
    }
    break;

case "kotori":
    {
      await caseAnime(command);
    }
    break;

case "yukino":
    {
      await caseAnime(command);
    }
    break;

case "shouko":
    {
      await caseAnime(command);
    }
    break;

case "yuzuru":
    {
      await caseAnime(command);
    }
    break;

case "kaguya":
    {
      await caseAnime(command);
    }
    break;

case "ochaco":
    {
      await caseAnime(command);
    }
    break;

case "nejire":
    {
      await caseAnime(command);
    }
    break;

case "hitagi":
    {
      await caseAnime(command);
    }
    break;

case "nadeko":
    {
      await caseAnime(command);
    }
    break;

case "jibril":
    {
      await caseAnime(command);
    }
    break;

case "mayuri":
    {
      await caseAnime(command);
    }
    break;

case "shinka":
    {
      await caseAnime(command);
    }
    break;

case "misaki":
    {
      await caseAnime(command);
    }
    break;

case "haruhi":
    {
      await caseAnime(command);
    }
    break;

case "mikuru":
    {
      await caseAnime(command);
    }
    break;

case "jeanne":
    {
      await caseAnime(command);
    }
    break;

case "tamamo":
    {
      await caseAnime(command);
    }
    break;

case "koneko":
    {
      await caseAnime(command);
    }
    break;

case "kuroka":
    {
      await caseAnime(command);
    }
    break;

case "stella":
    {
      await caseAnime(command);
    }
    break;

case "nezuko":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kanawo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kagura":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sheele":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "fubuki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "suiryu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "subaru":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "konata":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kagami":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "miyuki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kagome":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "nagato":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "minene":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "connie":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "reiner":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "vegeta":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "trunks":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "freeza":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "franky":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "jimbei":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "bakugo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sasuke":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "itachi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "madara":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "minato":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kallen":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "suzaku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "killua":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "leorio":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hisoka":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "edward":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shinji":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kirito":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yujiro":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yukine":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "reigen":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yusuke":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kurama":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kaneki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kurisu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kohaku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "chrome":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "miroku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "spikes":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "mikoto":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "madoka":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "homura":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kanade":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "daichi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "bokuto":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tengen":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sanemi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "beerus":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "bigmom":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shanks":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "akainu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "aokiji":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kizaru":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "aizawa":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tomura":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "himiko":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "meruem":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kotaro":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "megumi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "nobara":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sukuna":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "makima":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shinobu":
    {
      await caseAnime(command);
    }
    break;

case "tsunade":
    {
      await caseAnime(command);
    }
    break;

case "kushina":
    {
      await caseAnime(command);
    }
    break;

case "kurenai":
    {
      await caseAnime(command);
    }
    break;

case "zerotwo":
    {
      await caseAnime(command);
    }
    break;

case "orihime":
    {
      await caseAnime(command);
    }
    break;

case "rangiku":
    {
      await caseAnime(command);
    }
    break;

case "rebecca":
    {
      await caseAnime(command);
    }
    break;

case "echidna":
    {
      await caseAnime(command);
    }
    break;

case "megumin":
    {
      await caseAnime(command);
    }
    break;

case "origami":
    {
      await caseAnime(command);
    }
    break;

case "tsubaki":
    {
      await caseAnime(command);
    }
    break;

case "satsuki":
    {
      await caseAnime(command);
    }
    break;

case "tsubasa":
    {
      await caseAnime(command);
    }
    break;

case "sakuram":
    {
      await caseAnime(command);
    }
    break;

case "satella":
    {
      await caseAnime(command);
    }
    break;

case "mitsuri":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "esdeath":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "chelsea":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "saitama":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "roberta":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tsukasa":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "piccolo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "krillin":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "chopper":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tanjiro":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "zenitsu":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "inosuke":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "rengoku":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kakashi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "jiraiya":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "lelouch":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "chrollo":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "mustang":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "gintoki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tatsumi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tetsuro":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "pochita":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "historia":
    {
      await caseAnime(command);
    }
    break;

case "yoruichi":
    {
      await caseAnime(command);
    }
    break;

case "darkness":
    {
      await caseAnime(command);
    }
    break;

case "mirajane":
    {
      await caseAnime(command);
    }
    break;

case "hayasaka":
    {
      await caseAnime(command);
    }
    break;

case "scathach":
    {
      await caseAnime(command);
    }
    break;

case "midoriya":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "allmight":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "endeavor":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kurapika":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "alphonse":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "bishamon":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hijikata":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "inuyasha":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kageyama":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sugawara":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "ushijima":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "tobirama":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sarutobi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "stephanie":
    {
      await caseAnime(command);
    }
    break;

case "tatsumaki":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "balalaika":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shikamaru":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shinpachi":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "kirishima":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "hashirama":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "shirahoshi":
    {
      await caseAnime(command);
    }
    break;

case "yukinagato":
    {
      await caseAnime(command);
    }
    break;

case "korosensei":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "sesshomaru":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "whitebeard":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "orochimaru":
    {
      let { data } = await axios.get(`${apiv5}/api/v1/search/pinterest?query=${encodeURIComponent(listName[command])}`);
      if (isLimit) return sen("Limit kamu habis, silahkan bermain game atau claim .daily harian");

      await bentarYa();
      if (!data || data.result.search_data.length === 0) return await sen(`character *${command}* tidak di temukan!`);
      await sendMedia(pickRandom(data.result.search_data), `${command.capitalize()} dari anime ${listName[command].split("–")[1]}`);
      reduceLimit();
    }
    break;

case "yukinoagria":
    {
      await caseAnime(command);
    }
    break;

case "fitur":
					  {
					sen(`${totalfitur} Fitur`)
	    }break

case "script":
					  {
					
	    sen("Tanya ke dev nya cuy ada ga sc nya, sambil bawa ssan menu bot ini", jid,  false, getValidButtonReply("chat dev", ".kklkshd"))
	    }break

case "owner":
            case "kklkshd":
					{
						await EdogawaSenq.sendMessage(
							jid,
							{
								contacts: {
									displayName: author,
									contacts: [
										{
											displayName: author,
											vcard: `
BEGIN:VCARD
VERSION:3.0
N:;;  
FN:Developer ${name}
TEL;TYPE=cell;waid=6282141101127:6282141101127
X-WA-BIZ-DESCRIPTION:${`Chat nomor di atas untuk info script ini`}
X-WA-BIZ-NAME:Developer ${name}
END:VCARD
BEGIN:VCARD
VERSION:3.0
N:;;  
FN:Edogawa Senq
TEL;TYPE=cell;waid=6285168174980:6285168174980
X-WA-BIZ-NAME:Edogawa Senq
END:VCARD

`
										}
									]
								}
							},
							{
								quoted: qFake
							}
						);
					}
					break;

case "bot":case "tes":case "runtime":{await sena(`bot on selama ${msToTime(process.uptime() * 1000)}`)}break


        case "fixsc":
        case "fix":
					{
						await EdogawaSenq.sendMessage(
							jid,
							{
								text: fs.readFileSync("./tmp/script", "utf-8").toString()
							},
							{
								quoted: m
							}
						);
					}
					break;

case "log":
					{
						await EdogawaSenq.sendMessage(
							jid,
							{
								text: fs.readFileSync("./tmp/debug.txt", "utf-8").toString()
							},
							{
								quoted: m
							}
						);
					}
					break;


					
					
					case "allmenu":
					{
					        await react("⏲")
    
						let txt = `Halo, @${sender.getNumber()} ${ucapan()}
Perkenalkan gw ZynBott! Gw adalah asisten virtual yang dikembangkan oleh Zyne untuk membantu kebutuhan kalian
${b3}
${topStyle} Info Bot
${leftStyle} Name    : ${name}
${leftStyle} Version : ${version}
${leftStyle} Mode    : ${db.mode}
${leftStyle} Type    : Case
${leftStyle} Runtime : ${msToTime(process.uptime() * 1000)}
${leftStyle} Status  : buy only
${botStyle}
${b3}
${b3}
${topStyle} tools Menu
${leftStyle} .hd
${leftStyle} .wm
${leftStyle} .rvo
${leftStyle} .hdr
${leftStyle} .rch
${leftStyle} .toqr
${leftStyle} .hdin
${leftStyle} .acak
${leftStyle} .tovn
${leftStyle} .toimg
${leftStyle} .tourl
${leftStyle} .getpp
${leftStyle} .cpoll
${leftStyle} .hdvid
${leftStyle} .tweet
${leftStyle} .tovid
${leftStyle} .ssweb
${leftStyle} .rch1k
${leftStyle} .react
${leftStyle} .rotate
${leftStyle} .urlenc
${leftStyle} .urldec
${leftStyle} .tobars
${leftStyle} .text-ba
${leftStyle} .getppgc
${leftStyle} .getppgb
${leftStyle} .gethtml
${leftStyle} .sendngl
${leftStyle} .reverse
${leftStyle} .reactch
${leftStyle} .enchard
${leftStyle} .flagtext
${leftStyle} .readmore
${leftStyle} .cekkuota
${leftStyle} .writetext
${leftStyle} .logomaker
${leftStyle} .1917style
${leftStyle} .royaltext
${leftStyle} .encbase64
${leftStyle} .decbase64
${leftStyle} .faketweet
${leftStyle} .glitchtext
${leftStyle} .neonglitch
${leftStyle} .flag3dtext
${leftStyle} .luxurygold
${leftStyle} .sandsummer
${leftStyle} .makingneon
${leftStyle} .freecreate
${leftStyle} .createpoll
${leftStyle} .cekkuotaxl
${leftStyle} .pixelglitch
${leftStyle} .glowingtext
${leftStyle} .summerbeach
${leftStyle} .galaxystyle
${leftStyle} .totalmember
${leftStyle} .advancedglow
${leftStyle} .deletingtext
${leftStyle} .cartoonstyle
${leftStyle} .effectclouds
${leftStyle} .gradienttext
${leftStyle} .lighteffects
${leftStyle} .cekkuotaaxis
${leftStyle} .papercutstyle
${leftStyle} .blackpinklogo
${leftStyle} .typographytext
${leftStyle} .blackpinkstyle
${leftStyle} .underwatertext
${leftStyle} .watercolortext
${leftStyle} .galaxywallpaper
${leftStyle} .multicoloredneon
${botStyle}
${b3}
${b3}
${topStyle} owner Menu
${leftStyle} .ban
${leftStyle} .upsw
${leftStyle} .idgc
${leftStyle} .blon
${leftStyle} .self
${leftStyle} .mute
${leftStyle} .ping
${leftStyle} .getsw
${leftStyle} .unban
${leftStyle} .bloff
${leftStyle} .speed
${leftStyle} .addown
${leftStyle} .delown
${leftStyle} .public
${leftStyle} .onlypm
${leftStyle} .backup
${leftStyle} .addres
${leftStyle} .delres
${leftStyle} .addexp
${leftStyle} .addidch
${leftStyle} .delidch
${leftStyle} .cekidch
${leftStyle} .cekidgc
${leftStyle} .addprem
${leftStyle} .delprem
${leftStyle} .listown
${leftStyle} .listres
${leftStyle} .autoban
${leftStyle} .addcoin
${leftStyle} .botinfo
${leftStyle} .addpref
${leftStyle} .delpref
${leftStyle} .listidch
${leftStyle} .listprem
${leftStyle} .addowner
${leftStyle} .anticall
${leftStyle} .antitelp
${leftStyle} .onlygrub
${leftStyle} .addlevel
${leftStyle} .addlimit
${leftStyle} .listpref
${leftStyle} .addrespon
${leftStyle} .delrespon
${leftStyle} .addprefix
${leftStyle} .delprefix
${leftStyle} .ban-delete
${leftStyle} .antitelpon
${leftStyle} .autoreadsw
${leftStyle} .listrespon
${leftStyle} .listprefix
${leftStyle} .blackliston
${leftStyle} .blacklistoff
${leftStyle} .unban-delete
${leftStyle} .autoreadgrub
${leftStyle} .autoreadchat
${leftStyle} .pengingatsholat
${botStyle}
${b3}
${b3}
${topStyle} store Menu
${leftStyle} .done
${leftStyle} .need
${leftStyle} .produk
${leftStyle} .proses
${leftStyle} .setpay
${leftStyle} .setovo
${leftStyle} .produck
${leftStyle} .addsewa
${leftStyle} .delsewa
${leftStyle} .ceksewa
${leftStyle} .payment
${leftStyle} .setqris
${leftStyle} .setdana
${leftStyle} .setjual
${leftStyle} .setneed
${leftStyle} .listsewa
${leftStyle} .setgopay
${botStyle}
${b3}
${b3}
${topStyle} maker Menu
${leftStyle} .s
${leftStyle} .qc
${leftStyle} .iqc
${leftStyle} .brat
${leftStyle} .gura
${leftStyle} .meme
${leftStyle} .smeme
${leftStyle} .stiker
${leftStyle} .sticker
${leftStyle} .bratvid
${leftStyle} .fakedev
${leftStyle} .bratanime
${leftStyle} .gura-maker
${leftStyle} .text2anime
${leftStyle} .addbgfakedev
${botStyle}
${b3}
${b3}
${topStyle} ai Menu
${leftStyle} .ai
${leftStyle} .gpt5
${leftStyle} .felo
${leftStyle} .kimi
${leftStyle} .meta
${leftStyle} .zenz
${leftStyle} .metai
${leftStyle} .shion
${leftStyle} .gemini
${leftStyle} .aimath
${leftStyle} .claila
${leftStyle} .calude
${leftStyle} .feloai
${leftStyle} .hammer
${leftStyle} .kimiai
${leftStyle} .lumina
${leftStyle} .zenzau
${leftStyle} .upscale
${leftStyle} .fixfoto
${leftStyle} .hapusbg
${leftStyle} .enhance
${leftStyle} .bibleai
${leftStyle} .chatgpt
${leftStyle} .luminai
${leftStyle} .shionai
${leftStyle} .tofigure
${leftStyle} .warnaihp
${leftStyle} .bnwcolor
${leftStyle} .restored
${leftStyle} .removebg
${leftStyle} .text2img
${leftStyle} .clailaai
${leftStyle} .caludeai
${leftStyle} .geminiai
${leftStyle} .hammerai
${leftStyle} .colorizer
${leftStyle} .hpcoloring
${leftStyle} .powerbrand
${leftStyle} .benerinfoto
${leftStyle} .upscalefoto
${leftStyle} .enhancefoto
${leftStyle} .perbaikifoto
${leftStyle} .powerbrandai
${leftStyle} .chopilot-think
${botStyle}
${b3}
${b3}
${topStyle} confess Menu
${leftStyle} .balas
${leftStyle} .tolak
${leftStyle} .confess
${botStyle}
${b3}
${b3}
${topStyle} pushkontak Menu
${leftStyle} .jpm
${leftStyle} .jpmch
${leftStyle} .jpmht
${leftStyle} .bljpm
${leftStyle} .listgc
${leftStyle} .jpmtag
${leftStyle} .jpmjeda
${leftStyle} .stopjpm
${leftStyle} .listidgc
${leftStyle} .stoppush
${leftStyle} .pushkontak1
${leftStyle} .pushkontak2
${leftStyle} .pushkontak3
${leftStyle} .pushkontak4
${leftStyle} .savekontak1
${leftStyle} .savekontak2
${leftStyle} .savekontak3
${leftStyle} .savekontak4
${leftStyle} .stoppushkontak
${botStyle}
${b3}
${b3}
${topStyle} grup Menu
${leftStyle} .h
${leftStyle} .ht
${leftStyle} .add
${leftStyle} .del
${leftStyle} .join
${leftStyle} .kick
${leftStyle} .open
${leftStyle} .leave
${leftStyle} .paygc
${leftStyle} .gcpay
${leftStyle} .hapus
${leftStyle} .close
${leftStyle} .totag
${leftStyle} .joingc
${leftStyle} .keluar
${leftStyle} .revoke
${leftStyle} .linkgb
${leftStyle} .linkgc
${leftStyle} .delete
${leftStyle} .demote
${leftStyle} .tagall
${leftStyle} .antibb
${leftStyle} .upswgc
${leftStyle} .leavegc
${leftStyle} .delppgc
${leftStyle} .setdesc
${leftStyle} .promote
${leftStyle} .setppgc
${leftStyle} .hidetag
${leftStyle} .antibot
${leftStyle} .antidel
${leftStyle} .setpaygc
${leftStyle} .adminpay
${leftStyle} .antifoto
${leftStyle} .antiwame
${leftStyle} .delwords
${leftStyle} .addwords
${leftStyle} .wellcome
${leftStyle} .kudetagc
${leftStyle} .opentime
${leftStyle} .setleave
${leftStyle} .delleave
${leftStyle} .antinsfw
${leftStyle} .setnamagc
${leftStyle} .antivideo
${leftStyle} .antiaudio
${leftStyle} .antiinout
${leftStyle} .listwords
${leftStyle} .onlyadmin
${leftStyle} .antitoxic
${leftStyle} .antitagsw
${leftStyle} .closetime
${leftStyle} .antilinkgc
${leftStyle} .antilinkig
${leftStyle} .antilinkch
${leftStyle} .antilinktt
${leftStyle} .antilinkyt
${leftStyle} .antilinkfb
${leftStyle} .setwelcome
${leftStyle} .delwelcome
${leftStyle} .setpayadmin
${leftStyle} .resetlinkgc
${leftStyle} .antisticker
${leftStyle} .antilinkall
${leftStyle} .antisharech
${leftStyle} .delbadwords
${leftStyle} .addbadwords
${leftStyle} .setwellcome
${leftStyle} .delwellcome
${leftStyle} .antibadwords
${leftStyle} .listbadwords
${leftStyle} .antibadswords
${leftStyle} .antibaddwords
${botStyle}
${b3}
${b3}
${topStyle} saluran Menu
${leftStyle} .cch
${leftStyle} .ptvch
${leftStyle} .buatch
${leftStyle} .playch
${leftStyle} .mute-ch
${leftStyle} .meta-ch
${leftStyle} .desc-ch
${leftStyle} .csaluran
${leftStyle} .createch
${leftStyle} .fetch-ch
${leftStyle} .setpp-ch
${leftStyle} .delpp-ch
${leftStyle} .owner-ch
${leftStyle} .follow-ch
${leftStyle} .unmute-ch
${leftStyle} .rename-ch
${leftStyle} .demote-ch
${leftStyle} .delete-ch
${leftStyle} .unfollow-ch
${leftStyle} .admincount-ch
${botStyle}
${b3}
${b3}
${topStyle} rpg Menu
${leftStyle} .tf
${leftStyle} .me
${leftStyle} .buy
${leftStyle} .afk
${leftStyle} .jual
${leftStyle} .hunt
${leftStyle} .bank
${leftStyle} .send
${leftStyle} .fish
${leftStyle} .sell
${leftStyle} .toko
${leftStyle} .shop
${leftStyle} .daily
${leftStyle} .minum
${leftStyle} .pasar
${leftStyle} .table
${leftStyle} .usebox
${leftStyle} .travel
${leftStyle} .mining
${leftStyle} .nebang
${leftStyle} .maling
${leftStyle} .profil
${leftStyle} .openbox
${leftStyle} .setname
${leftStyle} .berburu
${leftStyle} .hunting
${leftStyle} .nambang
${leftStyle} .mancing
${leftStyle} .setnames
${leftStyle} .delivery
${leftStyle} .backpack
${leftStyle} .setavatar
${leftStyle} .setprofil
${leftStyle} .traveling
${leftStyle} .menambang
${leftStyle} .inventory
${leftStyle} .inventori
${leftStyle} .lootcreate
${leftStyle} .setusername
${botStyle}
${b3}
${b3}
${topStyle} sticker Menu
${leftStyle} .cry
${leftStyle} .nom
${leftStyle} .hug
${leftStyle} .pat
${leftStyle} .woof
${leftStyle} .gecg
${leftStyle} .feed
${leftStyle} .meow
${leftStyle} .kill
${leftStyle} .bite
${leftStyle} .yeet
${leftStyle} .bonk
${leftStyle} .wink
${leftStyle} .poke
${leftStyle} .slap
${leftStyle} .wave
${leftStyle} .awoo
${leftStyle} .smug
${leftStyle} .lick
${leftStyle} .kiss
${leftStyle} .8ball
${leftStyle} .goose
${leftStyle} .spank
${leftStyle} .bully
${leftStyle} .smile
${leftStyle} .blush
${leftStyle} .glomp
${leftStyle} .happy
${leftStyle} .dance
${leftStyle} .avatar
${leftStyle} .lizard
${leftStyle} .tickle
${leftStyle} .cringe
${leftStyle} .cuddle
${leftStyle} .fox_girl
${leftStyle} .highfive
${leftStyle} .handhold
${botStyle}
${b3}
${b3}
${topStyle} anime Menu
${leftStyle} .l
${leftStyle} .cc
${leftStyle} .boa
${leftStyle} .rem
${leftStyle} .ram
${leftStyle} .yui
${leftStyle} .mai
${leftStyle} .mio
${leftStyle} .aoi
${leftStyle} .rin
${leftStyle} .gon
${leftStyle} .rei
${leftStyle} .mob
${leftStyle} .jet
${leftStyle} .ace
${leftStyle} .aki
${leftStyle} .ryo
${leftStyle} .nami
${leftStyle} .vivi
${leftStyle} .aqua
${leftStyle} .erza
${leftStyle} .lucy
${leftStyle} .cana
${leftStyle} .momo
${leftStyle} .mina
${leftStyle} .mako
${leftStyle} .yuih
${leftStyle} .holo
${leftStyle} .roxy
${leftStyle} .yuno
${leftStyle} .rias
${leftStyle} .asia
${leftStyle} .revy
${leftStyle} .misa
${leftStyle} .ryuk
${leftStyle} .eren
${leftStyle} .levi
${leftStyle} .jean
${leftStyle} .goku
${leftStyle} .zoro
${leftStyle} .giyu
${leftStyle} .guts
${leftStyle} .baki
${leftStyle} .yato
${leftStyle} .sora
${leftStyle} .yugi
${leftStyle} .seto
${leftStyle} .hiei
${leftStyle} .gray
${leftStyle} .faye
${leftStyle} .riku
${leftStyle} .yuri
${leftStyle} .cell
${leftStyle} .sabo
${leftStyle} .king
${leftStyle} .dabi
${leftStyle} .ging
${leftStyle} .scar
${leftStyle} .riuk
${leftStyle} .yuji
${leftStyle} .gojo
${leftStyle} .maki
${leftStyle} .toge
${leftStyle} .yuki
${leftStyle} .miku
${leftStyle} .asuna
${leftStyle} .annie
${leftStyle} .sasha
${leftStyle} .rukia
${leftStyle} .robin
${leftStyle} .juvia
${leftStyle} .tohka
${leftStyle} .iroha
${leftStyle} .shoko
${leftStyle} .kaori
${leftStyle} .chika
${leftStyle} .tsuyu
${leftStyle} .ryuko
${leftStyle} .azusa
${leftStyle} .ritsu
${leftStyle} .shiro
${leftStyle} .rikka
${leftStyle} .kumin
${leftStyle} .saber
${leftStyle} .akeno
${leftStyle} .julis
${leftStyle} .kanae
${leftStyle} .wendy
${leftStyle} .mavis
${leftStyle} .akame
${leftStyle} .leone
${leftStyle} .genos
${leftStyle} .felix
${leftStyle} .hange
${leftStyle} .shana
${leftStyle} .akane
${leftStyle} .sango
${leftStyle} .kyoko
${leftStyle} .armin
${leftStyle} .erwin
${leftStyle} .gohan
${leftStyle} .bulma
${leftStyle} .luffy
${leftStyle} .sanji
${leftStyle} .usopp
${leftStyle} .brook
${leftStyle} .sonic
${leftStyle} .muzan
${leftStyle} .shoto
${leftStyle} .hawks
${leftStyle} .gaara
${leftStyle} .winry
${leftStyle} .light
${leftStyle} .asuka
${leftStyle} .casca
${leftStyle} .shoya
${leftStyle} .okita
${leftStyle} .natsu
${leftStyle} .touka
${leftStyle} .okabe
${leftStyle} .senku
${leftStyle} .kairi
${leftStyle} .asahi
${leftStyle} .kuroo
${leftStyle} .majin
${leftStyle} .broly
${leftStyle} .kaido
${leftStyle} .metal
${leftStyle} .drive
${leftStyle} .flash
${leftStyle} .denki
${leftStyle} .greed
${leftStyle} .pride
${leftStyle} .wrath
${leftStyle} .shoyo
${leftStyle} .tobio
${leftStyle} .panda
${leftStyle} .denji
${leftStyle} .power
${leftStyle} .akira
${leftStyle} .kosei
${leftStyle} .hinata
${leftStyle} .sakura
${leftStyle} .mikasa
${leftStyle} .ichigo
${leftStyle} .neliel
${leftStyle} .emilia
${leftStyle} .ultear
${leftStyle} .kurumi
${leftStyle} .kotori
${leftStyle} .yukino
${leftStyle} .shouko
${leftStyle} .yuzuru
${leftStyle} .kaguya
${leftStyle} .ochaco
${leftStyle} .nejire
${leftStyle} .hitagi
${leftStyle} .nadeko
${leftStyle} .jibril
${leftStyle} .mayuri
${leftStyle} .shinka
${leftStyle} .misaki
${leftStyle} .haruhi
${leftStyle} .mikuru
${leftStyle} .jeanne
${leftStyle} .tamamo
${leftStyle} .koneko
${leftStyle} .kuroka
${leftStyle} .stella
${leftStyle} .nezuko
${leftStyle} .kanawo
${leftStyle} .kagura
${leftStyle} .sheele
${leftStyle} .fubuki
${leftStyle} .suiryu
${leftStyle} .subaru
${leftStyle} .konata
${leftStyle} .kagami
${leftStyle} .miyuki
${leftStyle} .kagome
${leftStyle} .nagato
${leftStyle} .minene
${leftStyle} .connie
${leftStyle} .reiner
${leftStyle} .vegeta
${leftStyle} .trunks
${leftStyle} .freeza
${leftStyle} .franky
${leftStyle} .jimbei
${leftStyle} .bakugo
${leftStyle} .sasuke
${leftStyle} .itachi
${leftStyle} .madara
${leftStyle} .minato
${leftStyle} .kallen
${leftStyle} .suzaku
${leftStyle} .killua
${leftStyle} .leorio
${leftStyle} .hisoka
${leftStyle} .edward
${leftStyle} .shinji
${leftStyle} .kirito
${leftStyle} .yujiro
${leftStyle} .yukine
${leftStyle} .reigen
${leftStyle} .yusuke
${leftStyle} .kurama
${leftStyle} .kaneki
${leftStyle} .kurisu
${leftStyle} .kohaku
${leftStyle} .chrome
${leftStyle} .miroku
${leftStyle} .spikes
${leftStyle} .mikoto
${leftStyle} .madoka
${leftStyle} .homura
${leftStyle} .kanade
${leftStyle} .daichi
${leftStyle} .bokuto
${leftStyle} .tengen
${leftStyle} .sanemi
${leftStyle} .beerus
${leftStyle} .bigmom
${leftStyle} .shanks
${leftStyle} .akainu
${leftStyle} .aokiji
${leftStyle} .kizaru
${leftStyle} .aizawa
${leftStyle} .tomura
${leftStyle} .himiko
${leftStyle} .meruem
${leftStyle} .kotaro
${leftStyle} .megumi
${leftStyle} .nobara
${leftStyle} .sukuna
${leftStyle} .makima
${leftStyle} .shinobu
${leftStyle} .tsunade
${leftStyle} .kushina
${leftStyle} .kurenai
${leftStyle} .zerotwo
${leftStyle} .orihime
${leftStyle} .rangiku
${leftStyle} .rebecca
${leftStyle} .echidna
${leftStyle} .megumin
${leftStyle} .origami
${leftStyle} .tsubaki
${leftStyle} .satsuki
${leftStyle} .tsubasa
${leftStyle} .sakuram
${leftStyle} .satella
${leftStyle} .mitsuri
${leftStyle} .esdeath
${leftStyle} .chelsea
${leftStyle} .saitama
${leftStyle} .roberta
${leftStyle} .tsukasa
${leftStyle} .piccolo
${leftStyle} .krillin
${leftStyle} .chopper
${leftStyle} .tanjiro
${leftStyle} .zenitsu
${leftStyle} .inosuke
${leftStyle} .rengoku
${leftStyle} .kakashi
${leftStyle} .jiraiya
${leftStyle} .lelouch
${leftStyle} .chrollo
${leftStyle} .mustang
${leftStyle} .gintoki
${leftStyle} .tatsumi
${leftStyle} .tetsuro
${leftStyle} .pochita
${leftStyle} .historia
${leftStyle} .yoruichi
${leftStyle} .darkness
${leftStyle} .mirajane
${leftStyle} .hayasaka
${leftStyle} .scathach
${leftStyle} .midoriya
${leftStyle} .allmight
${leftStyle} .endeavor
${leftStyle} .kurapika
${leftStyle} .alphonse
${leftStyle} .bishamon
${leftStyle} .hijikata
${leftStyle} .inuyasha
${leftStyle} .kageyama
${leftStyle} .sugawara
${leftStyle} .ushijima
${leftStyle} .tobirama
${leftStyle} .sarutobi
${leftStyle} .stephanie
${leftStyle} .tatsumaki
${leftStyle} .balalaika
${leftStyle} .shikamaru
${leftStyle} .shinpachi
${leftStyle} .kirishima
${leftStyle} .hashirama
${leftStyle} .shirahoshi
${leftStyle} .yukinagato
${leftStyle} .korosensei
${leftStyle} .sesshomaru
${leftStyle} .whitebeard
${leftStyle} .orochimaru
${leftStyle} .yukinoagria
${botStyle}
${b3}
${b3}
${topStyle} search Menu
${leftStyle} .pin
${leftStyle} .ggls
${leftStyle} .market
${leftStyle} .tiktoks
${leftStyle} .webtoon
${leftStyle} .donghua
${leftStyle} .gsearch
${leftStyle} .ttsearch
${leftStyle} .kuranime
${leftStyle} .tiktoksearch
${leftStyle} .webtoondetail
${leftStyle} .kuranimeearch
${leftStyle} .kuranimedetail
${leftStyle} .googlesearchai
${botStyle}
${b3}
${b3}
${topStyle} fun Menu
${leftStyle} .dadu
${leftStyle} .tanya
${leftStyle} .waktu
${leftStyle} .cekgay
${leftStyle} .cekwibu
${leftStyle} .cekpuqi
${leftStyle} .cekbuta
${leftStyle} .cekpedo
${leftStyle} .cekdosa
${leftStyle} .cekkaya
${leftStyle} .cekhalu
${leftStyle} .cekhoki
${leftStyle} .cekgaul
${leftStyle} .cekcupu
${leftStyle} .cekbaik
${leftStyle} .cekhama
${leftStyle} .cekimut
${leftStyle} .cekumur
${leftStyle} .ceknama
${leftStyle} .cekmood
${leftStyle} .ramalan
${leftStyle} .cekculun
${leftStyle} .cekdajal
${leftStyle} .cekcacat
${leftStyle} .cekwangi
${leftStyle} .cekreceh
${leftStyle} .cekdongo
${leftStyle} .ceksadis
${leftStyle} .cekjahat
${leftStyle} .cektolol
${leftStyle} .cekbodoh
${leftStyle} .cekgamer
${leftStyle} .ceksetia
${leftStyle} .cekstres
${leftStyle} .ceklesbi
${leftStyle} .cekjujur
${leftStyle} .cekfisik
${leftStyle} .cekjomok
${leftStyle} .cekbaper
${leftStyle} .ceksange
${leftStyle} .ceknguli
${leftStyle} .cekbucin
${leftStyle} .cekfreak
${leftStyle} .cekseram
${leftStyle} .cekkocak
${leftStyle} .cekcocok
${leftStyle} .cekmemek
${leftStyle} .prediksi
${leftStyle} .cekjodoh
${leftStyle} .cekspooky
${leftStyle} .cekbangke
${leftStyle} .cekanjing
${leftStyle} .cekjancok
${leftStyle} .cekmonyet
${leftStyle} .cekgoblok
${leftStyle} .cekcantik
${leftStyle} .cekpintar
${leftStyle} .cekmiskin
${leftStyle} .cekbadboy
${leftStyle} .cekdingin
${leftStyle} .jkt48news
${leftStyle} .cekkontol
${leftStyle} .cekzodiak
${leftStyle} .cekkhodam
${leftStyle} .cekbangsat
${leftStyle} .cekplenger
${leftStyle} .cekngambis
${leftStyle} .cekdepresi
${leftStyle} .randomjoke
${leftStyle} .randomfact
${leftStyle} .quotesanim
${leftStyle} .randomquote
${leftStyle} .randomcolor
${leftStyle} .quotesanime
${leftStyle} .cekintrovert
${leftStyle} .cekextrovert
${leftStyle} .randomnumber
${leftStyle} .cekberuntung
${leftStyle} .randomactivity
${botStyle}
${b3}
${b3}
${topStyle} game Menu
${leftStyle} .ttc
${leftStyle} .math
${leftStyle} .batu
${leftStyle} .move
${leftStyle} .kimia
${leftStyle} .apply
${leftStyle} .catur
${leftStyle} .chess
${leftStyle} .fisika
${leftStyle} .kertas
${leftStyle} .lempar
${leftStyle} .tebakff
${leftStyle} .biologi
${leftStyle} .sejarah
${leftStyle} .suitpvp
${leftStyle} .gunting
${leftStyle} .geografi
${leftStyle} .chess-cv
${leftStyle} .tebakhero
${leftStyle} .tebaklogo
${leftStyle} .tebakkata
${leftStyle} .susunkata
${leftStyle} .tebaklove
${leftStyle} .tebakarah
${leftStyle} .tebakbola
${leftStyle} .tebakbuku
${leftStyle} .tictactoe
${leftStyle} .chess-end
${leftStyle} .matematika
${leftStyle} .tebakmobil
${leftStyle} .tebakwaktu
${leftStyle} .tebakwarna
${leftStyle} .tebakbulan
${leftStyle} .ulartangga
${leftStyle} .tebakgambar
${leftStyle} .lempar-dadu
${leftStyle} .tebakbendera
${leftStyle} .tebakaplikasi
${leftStyle} .tebakprestasi
${leftStyle} .end-ulartangga
${leftStyle} .join-ulartangga
${leftStyle} .left-ulartangga
${botStyle}
${b3}
${b3}
${topStyle} download Menu
${leftStyle} .tt
${leftStyle} .sf
${leftStyle} .yts
${leftStyle} .aio
${leftStyle} .fbdl
${leftStyle} .igdl
${leftStyle} .play
${leftStyle} .sfdl
${leftStyle} .ttmp4
${leftStyle} .ttmp3
${leftStyle} .ytmp3
${leftStyle} .ytmp4
${leftStyle} .aiodl
${leftStyle} .videy
${leftStyle} .sfile
${leftStyle} .ytsong
${leftStyle} .drivedl
${leftStyle} .ytaudio
${leftStyle} .ytmusic
${leftStyle} .ytmusik
${leftStyle} .playmp3
${leftStyle} .snackdl
${leftStyle} .videydl
${leftStyle} .sfiledl
${leftStyle} .fdroiddl
${leftStyle} .ytsearch
${leftStyle} .gitclone
${leftStyle} .spotifydl
${leftStyle} .playaudio
${leftStyle} .ytplaymp3
${leftStyle} .snackviddl
${leftStyle} .ytplayaudio
${leftStyle} .snackvideodl
${leftStyle} .alldownloader
${botStyle}
${b3}
${b3}
${topStyle} bokep Menu
${leftStyle} .paptt
${leftStyle} .bokep1
${leftStyle} .bokep2
${leftStyle} .bokep3
${leftStyle} .bokep4
${leftStyle} .bokep5
${leftStyle} .bokep6
${leftStyle} .bokep7
${leftStyle} .bokep8
${leftStyle} .bokep9
${leftStyle} .bokep10
${leftStyle} .bokep11
${leftStyle} .bokep12
${leftStyle} .bokep13
${leftStyle} .bokep14
${leftStyle} .bokep15
${leftStyle} .bokep16
${leftStyle} .bokep17
${leftStyle} .bokep18
${leftStyle} .bokep19
${leftStyle} .bokep20
${botStyle}
${b3}
${b3}
${topStyle} stalk Menu
${leftStyle} .ttstalk
${botStyle}
${b3}
${b3}
${topStyle} encrypt Menu
${leftStyle} .encarab
${leftStyle} .encjawa
${leftStyle} .encjapan
${leftStyle} .enckorea
${leftStyle} .encrusia
${leftStyle} .encindia
${leftStyle} .encchina
${leftStyle} .enccombine
${leftStyle} .encthailand
${botStyle}
${b3}
${b3}
${topStyle} nsfw Menu
${leftStyle} .neko
${leftStyle} .trap
${leftStyle} .waifuu
${leftStyle} .blowjob
${botStyle}
${b3}
${b3}
${topStyle} girl Menu
${leftStyle} .girl-china
${leftStyle} .girl-japan
${leftStyle} .girl-korea
${leftStyle} .girl-vietnam
${leftStyle} .girl-thailand
${leftStyle} .girl-indonesia
${botStyle}
${b3}
${b3}
${topStyle} random Menu
${leftStyle} .cat
${leftStyle} .loli
${leftStyle} .pic-re
${leftStyle} .rule34
${leftStyle} .cosplay
${leftStyle} .yande-re
${leftStyle} .blue-archive
${botStyle}
${b3}
${b3}
${topStyle} sfw Menu
${leftStyle} .ero
${leftStyle} .ass
${leftStyle} .milf
${leftStyle} .oral
${leftStyle} .maid
${leftStyle} .waifu
${leftStyle} .oppai
${leftStyle} .ecchi
${leftStyle} .hentai
${leftStyle} .uniform
${leftStyle} .selfies
${leftStyle} .paizuri
${botStyle}
${b3}
${b3}
${topStyle} leaderboard Menu
${leftStyle} .topmsg
${leftStyle} .topafk
${leftStyle} .topold
${leftStyle} .topcar
${leftStyle} .topsuv
${leftStyle} .topvan
${leftStyle} .topbus
${leftStyle} .topchat
${leftStyle} .topbank
${leftStyle} .topcoin
${leftStyle} .topdaun
${leftStyle} .topbatu
${leftStyle} .topbulu
${leftStyle} .topkayu
${leftStyle} .toptaxi
${leftStyle} .topular
${leftStyle} .topbesi
${leftStyle} .topemas
${leftStyle} .topship
${leftStyle} .toppesan
${leftStyle} .toplevel
${leftStyle} .toplimit
${leftStyle} .topbambu
${leftStyle} .topjamur
${leftStyle} .topcanoe
${leftStyle} .toparang
${leftStyle} .topjoran
${leftStyle} .topbusur
${leftStyle} .topkapak
${leftStyle} .topbacon
${leftStyle} .toppisau
${leftStyle} .topsteak
${leftStyle} .toplapis
${leftStyle} .toptruck
${leftStyle} .toplorry
${leftStyle} .toptrain
${leftStyle} .topferry
${leftStyle} .totalchat
${leftStyle} .topgravel
${leftStyle} .topcacing
${leftStyle} .toptulang
${leftStyle} .topdaging
${leftStyle} .topbelati
${leftStyle} .toppickup
${leftStyle} .topsubway
${leftStyle} .topdiorite
${leftStyle} .topgranite
${leftStyle} .topscooter
${leftStyle} .topbicycle
${leftStyle} .topstation
${leftStyle} .topbeliung
${leftStyle} .toptractor
${leftStyle} .topsenapan
${leftStyle} .topemerald
${leftStyle} .topberlian
${leftStyle} .toptramcar
${leftStyle} .topandesite
${leftStyle} .topredstone
${leftStyle} .topobsidian
${leftStyle} .topsailboat
${leftStyle} .topmonorail
${leftStyle} .topairplane
${leftStyle} .topmotorbike
${leftStyle} .toppaha_ayam
${leftStyle} .topparachute
${leftStyle} .toppolicecar
${leftStyle} .topambulance
${leftStyle} .topfiretruck
${leftStyle} .topmotorboat
${leftStyle} .topspeedboat
${leftStyle} .topwheelchair
${leftStyle} .tophelicopter
${leftStyle} .toptrolleybus
${leftStyle} .topkepala_ayam
${leftStyle} .topkepala_babi
${leftStyle} .topkepala_rusa
${leftStyle} .topkepala_sapi
${leftStyle} .topbullettrain
${leftStyle} .topkepala_tikus
${leftStyle} .topautorickshaw
${leftStyle} .topmotorscooter
${leftStyle} .topkepala_burung
${leftStyle} .topkepala_kelinci
${leftStyle} .topkepala_beruang
${leftStyle} .toppassenger_ship
${leftStyle} .topsmall_airplane
${leftStyle} .topmotor_wheelchair
${botStyle}
${b3}
${b3}
${topStyle} grub Menu
${leftStyle} .absen
${botStyle}
${b3}
`;
sen(txt, jid, true)

await menuAudio()

					}
					break;


						case "menu": {
    try {
      await react("⏲")
      let list = db.menuStructure

      if (Object.keys(db.menuStructure).includes(text.clear())) {
        let txtD = ""
        db.menuStructure[text.clear()].sort((i,b) => i.length - b.length).forEach(i => {
          txtD += `\n${leftStyle} ${prefix}${i}`
        })

        let txt = `Halo, @${sender.getNumber()} ${ucapan()}
Perkenalkan gw ZynBott! Gw adalah asisten virtual yang dikembangkan oleh Zyne untuk membantu kebutuhan kalian\n${b3}
${mHeader('Owner Info')}
${leftStyle} Nama  : ${author}
${leftStyle} Nomor : ${contact}
${lines}
${b3}
${b3}
${topStyle} Info Bot
${leftStyle} Name    : ${name}
${leftStyle} Version : ${version}
${leftStyle} Mode    : ${db.mode}
${leftStyle} Type    : Case
${leftStyle} Runtime : ${msToTime(process.uptime() * 1000)}
${leftStyle} Status  : buy only
${botStyle}
${b3}
${b3}
${topStyle} Menu ${text.clear().capitalize()}${txtD}
${botStyle}
${b3}`

await sen(txt, jid, true)

await menuAudio()

      } else {
        let txtD = ""
        Object.keys(db.menuStructure).sort((a,b) => a.length - b.length).forEach(i => {
          txtD += `\n${leftStyle} ${prefix}menu ${i}`
        })

        let txt = `Halo, @${sender.getNumber()} ${ucapan()}
Perkenalkan gw ZynBott! Gw adalah asisten virtual yang dikembangkan oleh Zyne untuk membantu kebutuhan kalian\n${b3}
${mHeader('Owner Info')}
${leftStyle} Nama  : ${author}
${leftStyle} Nomor : ${contact}
${lines}
${b3}${b3}
${topStyle} Info Bot
${leftStyle} Name    : ${name}
${leftStyle} Version : ${version}
${leftStyle} Mode    : ${db.mode}
${leftStyle} Type    : Case
${leftStyle} Runtime : ${msToTime(process.uptime() * 1000)}
${leftStyle} Status  : buy only
${botStyle}
${b3}
`

await sen(txt, jid, true, [...getValidButtonList({
                title: "Select Menu",
                label: "",
                secTitle: "Pilih Menu Yang Mau Di Tampilkan",
                rows: Object.keys(db.menuStructure).map(i => {
                  return [
                    `• Menu ${i.capitalize()}`,
                    `Pilih untuk menamilkan ${i.capitalize()} Menu`,
                    `.menu ${i}`
                  ]
                })
              }), ...[]])

await menuAudio()

      }
      
    } catch (e) {
      console.log(e)
      sena(e.message)
    }
  } break
      }
    }

    if (db.antidel.includes(jid)) {
      if (mType === "protocolMessage") {
        if (store.messages && store.messages[jid] && store.messages[jid].array) {
          store.messages[jid].array.forEach(async (i) => {
            if (i.key.id === m.message[mType].key.id) {
              if (sender === i.key.participant) {
                i.message[getContentType(i.message)].contextInfo = {
                  mentionedJid: [i.key.participant],
                  isForwarded: true,
                  forwardingScore: 1,
                  forwardedNewsletterMessageInfo: {
                    newsletterJid: sletterId,
                    newsletterName: "from : " + i.key.participant.getNumber(),
                  },
                  quotedMessage: { conversation: "anti delete" },
                  ...i.key,
                };

                const pesan =
                  getContentType(i.message) === "conversation"
                    ? {
                        extendedTextMessage: {
                          text: i.message.conversation,
                          contextInfo: {
                            mentionedJid: [i.key.participant],
                            isForwarded: true,
                            forwardingScore: 1,
                            forwardedNewsletterMessageInfo: {
                              newsletterJid: sletter,
                              newsletterName: "from : " + i.key.participant.getNumber(),
                            },
                            quotedMessage: { conversation: "anti delete" },
                            ...i.key,
                          },
                        },
                      }
                    : i.message;

                await EdogawaSenq.relayMessage(jid, pesan, { i });
              }
            }
          });
        }
      }
    }

    if (body?.match("chat.whatsapp.com")) {
      if (db.antilinkgc.includes(jid)) {
        if (!isAdmin) {
          if (!db.peringatan[sender]) {
            db.peringatan[sender] = 1;
          } else {
            db.peringatan[sender] += 1;
          }
          saveDb();

          await sen(`Pesan di hapus!, jangan kirim link di grub ini!!. Peringatan ${db.peringatan[sender]} / 5 !!`);

          if (db.peringatan[sender] >= 5) {
            await EdogawaSenq.groupParticipantsUpdate(jid, [sender], "remove");
          }

          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
        } else {
          console.log(`Anti Link GC ga di apus, sender nya admin`);
        }
      }
    }

    if (m.message?.[mType]?.contextInfo?.forwardedNewsletterMessageInfo) {
      if (db.antisharech.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Share ch On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Share ch On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Share Ch ga di apus, sender nya admin`);
        }
      }
    }

    if (m.message?.groupStatusMentionMessage) {
      if (db.antitagsw.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Tag Sw ch On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Tag Sw On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Tag Sw ga di apus, sender nya admin`);
        }
      }
    }

    if (body?.match("whatsapp.com/channel")) {
      if (db.antilinkch.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link Saluran On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link Saluran On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link Saluran ga di apus, sender nya admin`);
        }
      }
    }

    if (
      body?.match(
        new RegExp(
          [
            "www.youtube.com",
            "m.youtube.com",
            "music.youtube.com",
            "gaming.youtube.com",
            "studio.youtube.com",
            "kids.youtube.com",
            "yt3.ggpht.com",
            "i.ytimg.com",
            "googlevideo.com",
          ]
            .map((d) => d.replace(/\./g, "\\."))
            .join("|"),
          "i"
        )
      )
    ) {
      if (db.antilinkyt.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link Yt On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link Yt On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link YT ga di apus, sender nya admin`);
        }
      }
    }

    if (
      body?.match(
        new RegExp(
          [
            "www.instagram.com",
            "help.instagram.com",
            "about.instagram.com",
            "business.instagram.com",
            "developers.instagram.com",
            "l.instagram.com",
            "graph.instagram.com",
            "i.instagram.com",
            "b.instagram.com",
            "static.cdninstagram.com",
            "scontent.cdninstagram.com",
          ]
            .map((d) => d.replace(/\./g, "\\."))
            .join("|"),
          "i"
        )
      )
    ) {
      if (db.antilinkig.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link Ig On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link Ig On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link IG ga di apus, sender nya admin`);
        }
      }
    }

    if (
      body?.match(
        new RegExp(
          [
            "www.facebook.com",
            "m.facebook.com",
            "mbasic.facebook.com",
            "business.facebook.com",
            "developers.facebook.com",
            "about.facebook.com",
            "newsroom.facebook.com",
            "upload.facebook.com",
            "staticxx.facebook.com",
            "touch.facebook.com",
            "web.facebook.com",
            "graph.facebook.com",
            "fbcdn.net",
            "scontent.xx.fbcdn.net",
            "video.xx.fbcdn.net",
            "lookaside.facebook.com",
            "apps.facebook.com",
          ]
            .map((d) => d.replace(/\./g, "\\."))
            .join("|"),
          "i"
        )
      )
    ) {
      if (db.antilinkfb.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link Fb On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link Fb On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link FB ga di apus, sender nya admin`);
        }
      }
    }

    if (
      body?.match(
        new RegExp(
          [
            "www.tiktok.com",
            "m.tiktok.com",
            "ads.tiktok.com",
            "business.tiktok.com",
            "developer.tiktok.com",
            "support.tiktok.com",
            "newsroom.tiktok.com",
            "careers.tiktok.com",
            "shop.tiktok.com",
            "live.tiktok.com",
            "creator.tiktok.com",
            "dm.tiktok.com",
            "s16.tiktokcdn.com",
            "p16-tiktokcdn-com.akamaized.net",
          ]
            .map((d) => d.replace(/\./g, "\\."))
            .join("|"),
          "i"
        )
      )
    ) {
      if (db.antilinktt.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link Tiktok On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link Tiktok On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link TT ga di apus, sender nya admin`);
        }
      }
    }

    if (
      body?.match(
        new RegExp(
          [
            "kntl",
            "mmk",
            "knt1",
            "memek",
            "mmek",
            "memk",
            "puqi",
            "puqimax",
            "kntd",
            "asu",
            "kontol",
            "anj",
            "ajg",
            "4jg",
            "4j9",
            "aj9",
            "bangke",
            "bngke",
            "yatim",
            "yapit",
            "ypit",
            "kontod",
            "konto1",
            "asu",
            "asw",
            "4sw",
            "4su",
            "jmbut",
            "mbut",
            "jembot",
            "jmbt",
            "ppk",
            "puqi",
            "ppk",
            "pepek",
          ]
            .map((d) => d.replace(/\./g, "\\."))
            .join("|"),
          "i"
        )
      )
    ) {
      if (db.antitoxic.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Toxic On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Toxic On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Toxic ga di apus, sender nya admin`);
        }
      }
    }

    if (body?.match("https")) {
      if (db.antilinkall.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Link On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Link On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link ga di apus, sender nya admin`);
        }
      }
    }

    if (body?.includes("wa.me")) {
      if (db.antiwame.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Anti wame : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Anti wame : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Link ga di apus, sender nya admin`);
        }
      }
    }

    if (["bb pm", "pm bb", "bban pm", "bban", "bb gb pm", "bb gc pm"].includes(body?.clear())) {
      if (db.antibb.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Text BB On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete text BB On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Text BB ga di apus, sender nya admin`);
        }
      }
    }

    if (mType === "imageMessage") {
      if (db.antifoto.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Image On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Image On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Image ga di apus, sender nya admin`);
        }
      }
    }
    if (mType === "stickerMessage") {
      if (db.antisticker.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Sticker On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Sticker On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Sticker ga di apus, sender nya admin`);
        }
      }
    }

    if (db.antibadwords.includes(jid)) {
      if (!isAdmin) {
        let bads =
          db.bad.length === 0
            ? [
                "kntl",
                "mmk",
                "knt1",
                "memek",
                "mmek",
                "memk",
                "puqi",
                "puqimax",
                "kntd",
                "asu",
                "kontol",
                "anj",
                "ajg",
                "4jg",
                "4j9",
                "aj9",
                "bangke",
                "bngke",
                "yatim",
                "yapit",
                "ypit",
                "kontod",
                "konto1",
                "asu",
                "asw",
                "4sw",
                "4su",
                "jmbut",
                "mbut",
                "jembot",
                "jmbt",
                "ppk",
                "puqi",
                "ppk",
                "pepek",
              ]
            : db.bad;

        if (body?.match(new RegExp(bads.map((d) => d.replace(/\./g, "\\.")).join("|"), "i"))) {
          console.log(`Detect Anti Bad On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Anti Bad On : ${metadata[jid].subject}`);
        }
      } else {
        console.log(`Anti Sticker ga di apus, sender nya admin`);
      }
    }

    if (mType === "audioMessage") {
      if (db.antiaudio.includes(jid)) {
        if (!isAdmin) {
          console.log(`Detect Audio On : ${metadata[jid].subject}`);
          await EdogawaSenq.sendMessage(jid, {
            delete: {
              remoteJid: jid,
              fromMe: m.key.fromMe,
              id: m.key.id,
              participant: m.key.participant,
            },
          });
          console.log(`Delete Audio On : ${metadata[jid].subject}`);
        } else {
          console.log(`Anti Audio ga di apus, sender nya admin`);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	delete require.cache[file];
	require(file);
});
