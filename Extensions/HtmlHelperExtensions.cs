using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace MyPage.Extensions;

public static class HtmlHelperExtensions
{
    public static IHtmlContent RenderScript(this IHtmlHelper helper, string scriptName)
    {
        string scriptsDirectory = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "scripts", "dist");
        var files = Directory.GetFiles(scriptsDirectory);
        var fileInfos = files.Select(f => new FileInfo(f).Name);
        var scriptSource =
            Directory.GetFiles(scriptsDirectory).
                      Select(file => new FileInfo(file).Name).
                      Single(file => file.StartsWith(scriptName, StringComparison.OrdinalIgnoreCase));

        return helper.Raw($"<script src=\"/scripts/dist/{scriptSource}\"></script>");
    }
}