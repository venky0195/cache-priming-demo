export default function handler(test,request, context) {
    request.headers.delete("x-launch-deploymentuid");
    return fetch(request)
}