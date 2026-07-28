<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="rss/channel/title"/> - RSS Feed</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&amp;display=swap" rel="stylesheet"/>
        <style>
          body {
            background-color: #09090b;
            color: #f4f4f5;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
            padding: 40px 24px;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 800px;
            width: 100%;
          }
          .header {
            border-bottom: 1px solid #27272a;
            padding-bottom: 24px;
            margin-bottom: 32px;
          }
          .badge {
            display: inline-block;
            background-color: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.2);
            color: #22c55e;
            font-size: 11px;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 16px;
          }
          h1 {
            color: #ffffff;
            font-size: 36px;
            font-weight: 800;
            margin: 0 0 12px 0;
            letter-spacing: -0.02em;
          }
          .desc {
            color: #a1a1aa;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 0 20px 0;
          }
          .alert-box {
            background-color: #18181b;
            border: 1px solid #27272a;
            border-radius: 12px;
            padding: 16px;
            font-size: 13px;
            color: #a1a1aa;
            line-height: 1.6;
          }
          .alert-box code {
            background-color: #09090b;
            color: #22c55e;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
          }
          .feed-item {
            background-color: rgba(24, 24, 27, 0.4);
            border: 1px solid #27272a;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
            transition: border-color 0.3s ease;
          }
          .feed-item:hover {
            border-color: rgba(34, 197, 94, 0.3);
          }
          .item-title {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 10px 0;
          }
          .item-title a {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .item-title a:hover {
            color: #22c55e;
          }
          .item-meta {
            font-size: 12px;
            color: #a1a1aa;
            margin-bottom: 12px;
            display: flex;
            gap: 16px;
          }
          .item-desc {
            color: #a1a1aa;
            font-size: 14px;
            line-height: 1.6;
            margin: 0 0 16px 0;
          }
          .read-btn {
            display: inline-flex;
            align-items: center;
            color: #22c55e;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .read-btn:hover {
            color: #16a34a;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">RSS Feed</span>
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p class="desc"><xsl:value-of select="rss/channel/description"/></p>
            <div class="alert-box">
              <strong>💡 Subscription Information:</strong> This page is a styled RSS feed. Copy this URL (<code><xsl:value-of select="rss/channel/link"/>/feed.xml</code>) into your news reader app (like Feedly or NetNewsWire) to subscribe to automatic updates.
            </div>
          </div>
          
          <div class="feed-items">
            <xsl:for-each select="rss/channel/item">
              <div class="feed-item">
                <h2 class="item-title">
                  <a href="{link}" target="_blank" rel="noopener noreferrer">
                    <xsl:value-of select="title"/>
                  </a>
                </h2>
                <div class="item-meta">
                  <span>📅 <xsl:value-of select="substring(pubDate, 5, 12)"/></span>
                  <span>✍️ <xsl:value-of select="author"/></span>
                </div>
                <p class="item-desc"><xsl:value-of select="description"/></p>
                <a href="{link}" target="_blank" rel="noopener noreferrer" class="read-btn">
                  Read Article →
                </a>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
